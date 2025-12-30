import Plan from "../Models/planModel.js";

/**
 * GET /api/plans
 * Public API
 * Returns all available subscription plans
 */
export const getPlans = async (req, res, next) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    next(error);
  }
};
