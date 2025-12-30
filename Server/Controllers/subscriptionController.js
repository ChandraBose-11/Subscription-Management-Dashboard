import Subscription from "../Models/subscriptionModel.js";
import Plan from "../Models/planModel.js";
import { errorHandler } from "../Middleware/error.js";

/**
 * SUBSCRIBE TO A PLAN
 * POST /api/subscribe/:planId
 * Protected
 */
export const subscribeToPlan = async (req, res, next) => {
  try {
    const plan = await Plan.findById(req.params.planId);
    if (!plan) return next(errorHandler(404, "Plan not found"));

    // Expire existing subscription if exists
    await Subscription.updateMany(
      { user: req.user.id, status: "active" },
      { status: "expired" }
    );

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + plan.duration);

    const subscription = new Subscription({
      user: req.user.id,
      plan: plan._id,
      startDate,
      endDate,
    });

    await subscription.save();

    res.status(201).json({
      message: "Subscription successful",
      subscription,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET CURRENT USER SUBSCRIPTION
 * GET /api/my-subscription
 * Protected
 */
export const getMySubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findOne({
      user: req.user.id,
      status: "active",
    }).populate("plan");

    if (!subscription) {
      return res.status(200).json({ message: "No active subscription" });
    }

    res.status(200).json(subscription);
  } catch (error) {
    next(error);
  }
};

/**
 * ADMIN: GET ALL SUBSCRIPTIONS
 * GET /api/admin/subscriptions
 * Protected (admin only)
 */
export const getAllSubscriptions = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "Admin access only"));
  }

  try {
    const subscriptions = await Subscription.find()
      .populate("user", "username email")
      .populate("plan", "name price duration");

    res.status(200).json(subscriptions);
  } catch (error) {
    next(error);
  }
};
