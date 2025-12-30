import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const About = () => {
  const [stats, setStats] = useState({
    users: 0,
    plans: 0,
    subscriptions: 0,
  });

  useEffect(() => {
    const target = { users: 1200, plans: 4, subscriptions: 850 };
    const interval = setInterval(() => {
      setStats((prev) => {
        const updated = { ...prev };
        let done = true;
        for (let key in prev) {
          if (prev[key] < target[key]) {
            updated[key] = prev[key] + 1;
            done = false;
          }
        }
        if (done) clearInterval(interval);
        return updated;
      });
    }, 15);
  }, []);

  return (
    <div className="min-h-screen py-10 px-6 relative overflow-hidden bg-white text-gray-900 dark:bg-[#0f172a] dark:text-gray-100">

      {/* Decorative glows */}
      <div className="hidden dark:block absolute top-10 left-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden dark:block absolute bottom-10 right-10 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto rounded-3xl shadow-2xl p-10 relative z-10 bg-white border border-gray-200 dark:bg-[#1e293b] dark:border-gray-700"
      >
        {/* Header */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl font-extrabold text-center mb-10 text-indigo-600 dark:text-indigo-300"
        >
          About <span className="text-pink-500">Subscription Dashboard</span>
        </motion.h1>

        {/* Who We Are */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-10 p-6 rounded-2xl shadow-lg border-l-4 bg-indigo-50 border-indigo-400 dark:bg-slate-800 dark:border-indigo-500"
        >
          <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Subscription Management Dashboard
            </span>{" "}
            is a mini SaaS application designed to manage user subscriptions,
            plans, and role-based access. It demonstrates real-world backend
            architecture, secure authentication, and a clean admin dashboard.
          </p>
        </motion.section>

        {/* Project Purpose */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-6 rounded-2xl border-l-4 shadow-md mb-10 bg-purple-50 border-purple-400 dark:bg-purple-900/40 dark:border-purple-400"
        >
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-200 mb-3">
            Project Objective
          </h2>
          <p className="text-gray-700 dark:text-gray-100 text-lg">
            The goal of this project is to build a scalable subscription system
            with JWT authentication, refresh tokens, admin authorization, and
            optional payment simulation using Stripe or Razorpay test mode.
          </p>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-6 rounded-2xl border-l-4 shadow-md mb-10 bg-pink-50 border-pink-400 dark:bg-pink-900/40 dark:border-pink-400"
        >
          <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-200 mb-3">
            Tech Stack Used
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-100">
            <li>React.js + Vite + TailwindCSS</li>
            <li>Redux Toolkit for global state</li>
            <li>Node.js & Express.js backend</li>
            <li>MongoDB with Mongoose </li>
            <li>JWT Authentication & Refresh Tokens</li>
          </ul>
        </motion.section>

        {/* Stats */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16 mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Platform Overview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Registered Users", value: stats.users, color: "indigo" },
              { label: "Subscription Plans", value: stats.plans, color: "purple" },
              { label: "Active Subscriptions", value: stats.subscriptions, color: "pink" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl p-8 shadow-xl border bg-white dark:bg-slate-800"
              >
                <h3 className={`text-5xl font-bold text-${stat.color}-500`}>
                  {stat.value}
                </h3>
                <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-6 rounded-2xl shadow-lg border-l-4 mb-10 bg-blue-50 border-blue-400 dark:bg-blue-900/40 dark:border-blue-400"
        >
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 mb-3">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-100">
            <li>Role-based access (Admin & User)</li>
            <li>Plan subscription & expiry handling</li>
            <li>Admin dashboard for monitoring subscriptions</li>
            <li>Secure APIs with validation & error handling</li>
            <li>Responsive UI with dark/light theme</li>
          </ul>
        </motion.section>

        {/* Closing */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 text-center p-6 rounded-2xl shadow-inner bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 dark:from-indigo-900 dark:via-purple-800 dark:to-pink-900"
        >
          <p className="italic text-lg font-semibold text-indigo-700 dark:text-indigo-200">
            “Building scalable systems is not about complexity — it’s about clarity and structure.”
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
