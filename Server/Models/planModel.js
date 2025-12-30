import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    duration: {
      type: Number, // in days
      required: true,
    },
  },
  { timestamps: true }
);

const Plan = mongoose.model("Plan", planSchema);
export default Plan;
