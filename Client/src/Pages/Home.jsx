import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    title: "Flexible Plans",
    text: "Choose from multiple subscription plans that fit your needs.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Secure Payments",
    text: "Integrated with Stripe / Razorpay test mode for safe transactions.",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Admin Control",
    text: "Powerful admin dashboard to monitor and manage subscriptions.",
    color: "from-blue-500 to-sky-600",
  },
];

const highlights = [
  { label: "Users", value: "1200+" },
  { label: "Plans", value: "4+" },
  { label: "Subscriptions", value: "850+" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] transition-colors duration-500 overflow-hidden relative">

      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-500/5 pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center text-center min-h-[90vh] pt-28 pb-16 px-6">
        {/* Glow effects */}
        <div className="hidden dark:block absolute top-[-10%] left-[20%] w-52 h-52 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden dark:block absolute bottom-[-15%] right-[10%] w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Manage Subscriptions
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              The Smart Way
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            A modern SaaS dashboard to manage users, plans, and subscriptions —
            built with secure authentication, clean UI, and scalable architecture.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/plans"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              View Plans
            </Link>

            <Link
              to="/about"
              className="px-8 py-3 rounded-full border-2 border-purple-600 dark:border-indigo-500 text-purple-600 dark:text-indigo-400 font-semibold hover:bg-gradient-to-r hover:border-transparent from-indigo-500 to-purple-600 hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* DIVIDER */}
      <div className="w-full border-t border-gray-300 dark:border-gray-700 opacity-40"></div>

      {/* HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-10 shadow-xl bg-white dark:bg-slate-800"
            >
              <h3 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full border-t border-gray-300 dark:border-gray-700 opacity-40"></div>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-white dark:bg-transparent bg-opacity-70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
            Why Choose Our Platform
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-14 max-w-3xl mx-auto text-lg">
            Built with best practices in mind — secure, scalable, and user-friendly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className={`p-10 rounded-2xl bg-gradient-to-br ${f.color} shadow-xl hover:shadow-2xl duration-300 text-white`}
              >
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Get Started?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Create an account, choose a plan, and experience a complete
          subscription management workflow.
        </p>
        <Link
          to="/register"
          className="inline-block px-10 py-4 rounded-full bg-white text-indigo-600 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
        >
          Create Account
        </Link>
      </section>
    </div>
  );
}
