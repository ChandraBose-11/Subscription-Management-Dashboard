import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import Plan from "./Models/planModel.js";

dotenv.config();
await connectDB();

const seedPlans = async () => {
  try {
    const count = await Plan.countDocuments();

    if (count > 0) {
      console.log("⚠️ Plans already exist. Skipping seeding.");
      process.exit();
    }

    await Plan.insertMany([
      {
        name: "Basic",
        price: 0,
        duration: 30,
        features: ["Access to blogs", "Community support"],
      },
      {
        name: "Pro",
        price: 499,
        duration: 30,
        features: [
          "Unlimited blogs",
          "Advanced analytics",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        price: 999,
        duration: 30,
        features: [
          "All Pro features",
          "Team collaboration",
          "Dedicated support",
        ],
      },
    ]);

    console.log("✅ Plans seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedPlans();
