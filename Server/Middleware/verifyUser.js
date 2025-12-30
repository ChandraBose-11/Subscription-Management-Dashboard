

import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  // If no token → unauthorized
  if (!token) {
    return next(errorHandler(401, "Unauthorized: No token provided"));
  }

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized: Invalid token"));
    }

    // Attach decoded payload (id, isAdmin)
    req.user = user;

    // Continue to next middleware
    next();
  });
};


export const verifyAdmin = (req, res, next) => {
  // ✅ FIX: isAdmin is STRING, not BOOLEAN
  if (req.user.isAdmin !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Admin access only",
    });
  }
  next();
};