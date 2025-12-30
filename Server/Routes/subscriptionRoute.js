import express from "express";
import {
  subscribeToPlan,
  getMySubscription,
  getAllSubscriptions,
} from "../Controllers/subscriptionController.js";
import { verifyToken ,verifyAdmin} from "../Middleware/verifyUser.js";

const router = express.Router();

// USER ROUTES
router.post("/:planId", verifyToken, subscribeToPlan);
router.get("/my-subscription", verifyToken, getMySubscription);

// ADMIN ROUTE
router.get("/admin/subscriptions", verifyToken,verifyAdmin, getAllSubscriptions);

export default router;
