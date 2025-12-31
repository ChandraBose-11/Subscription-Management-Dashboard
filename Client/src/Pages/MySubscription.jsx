import { useEffect, useState } from "react";

export default function MySubscription() {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    fetch("https://subscription-management-dashboard-1.onrender.com/api/subscribe/my-subscription", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setSubscription(data));
  }, []);

  if (!subscription?.plan) {
    return (
      <div className="min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-md rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            No Active Subscription
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            You don’t have an active plan yet.
          </p>
        </div>
      </div>
    );
  }

  const { plan, status, endDate } = subscription;

  return (
    
    <div className="min-h-screen mx-auto flex justify-center items-center px-4 py-12">
      
      <div className="w-full max-w-4xl rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Subscription Details
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your current active plan
            </p>
          </div>

          <span
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.toUpperCase()}
          </span>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 py-6">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Plan Name
            </p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              {plan.name}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Price
            </p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              ₹{plan.price}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Duration
            </p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              {plan.duration} days
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Valid Until
            </p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              {new Date(endDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
          Need help or want to upgrade your plan? Contact support.
        </div>
      </div>
    </div>
  );
}
