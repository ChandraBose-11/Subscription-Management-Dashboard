import { useEffect, useState } from "react";
import PlanCard from "../Components/Plancard";

export default function Plans() {
  const [plans, setPlans] = useState([]);

  // 🔒 ORIGINAL FUNCTIONALITY (UNCHANGED)
  useEffect(() => {
    fetch("https://subscription-management-dashboard-1.onrender.com/api/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] py-16 px-28">
      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Subscription Plans
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose a plan that fits your needs. Each plan comes with a defined
            duration and a set of features to help you get started.
          </p>
        </div>

        {/* PLANS GRID */}
        {plans.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading plans...
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PlanCard key={plan._id} plan={plan} />
            ))}
          </div>
        )}

        {/* FOOTER NOTE */}
        <div className="mt-14 text-center text-sm text-gray-500 dark:text-gray-400">
          You can manage or view your active subscription anytime from the
          dashboard.
        </div>
      </div>
    </div>
  );
}
