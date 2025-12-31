import express from "express";
import { getPlans } from "../Controllers/plancontroller.js";

const router = express.Router();

/**
 * GET /api/plans
 * Public route – returns all available subscription plans
 */
router.get("/", getPlans);

export default router;
