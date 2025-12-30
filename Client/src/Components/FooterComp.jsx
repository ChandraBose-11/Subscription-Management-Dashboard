import React from "react";

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 496 512" fill="currentColor" className={className}>
    <path d="M248 8C111 8 0 119 0 256c0 110.3 71.4 204.1 170.5 237.2 12.5 2.3 17.1-5.4 17.1-12v-44.1c-69.3 15.1-84-33.4-84-33.4-11.4-28.9-27.8-36.6-27.8-36.6-22.7-15.5 1.7-15.2 1.7-15.2 25.1 1.8 38.3 25.8 38.3 25.8 22.3 38.2 58.6 27.2 72.9 20.8 2.3-16.2 8.7-27.2 15.8-33.5-55.3-6.3-113.5-27.7-113.5-123.3 0-27.3 9.8-49.6 25.8-67.1-2.6-6.3-11.2-31.6 2.5-65.8 0 0 21.1-6.7 69.1 25.7 20-5.6 41.5-8.4 62.9-8.5 21.4.1 42.9 2.9 62.9 8.5 48-32.4 69.1-25.7 69.1-25.7 13.7 34.2 5.1 59.5 2.5 65.8 16 17.5 25.8 39.8 25.8 67.1 0 95.8-58.3 116.9-113.7 123.1 9 7.8 17 23.2 17 46.8v69.5c0 6.7 4.5 14.4 17.2 12C424.6 460.1 496 366.3 496 256 496 119 385 8 248 8z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 448 512" fill="currentColor" className={className}>
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1a53.79 53.79 0 1 1 0-107.6 53.79 53.79 0 0 1 0 107.6zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
  </svg>
);

export default function FooterComp() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      
      {/* TOP STRIPE */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Subscription Dashboard
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            A full-stack SaaS dashboard for managing subscriptions, users,
            and admin operations with ease.
          </p>
        </div>

        {/* FRONTEND */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white mb-4">
            Frontend
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>React</li>
            <li>Redux Toolkit</li>
            <li>Tailwind CSS</li>
            <li>Flowbite React</li>
            <li>Framer Motion</li>
          </ul>
        </div>

        {/* BACKEND */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white mb-4">
            Backend
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>JWT Authentication</li>
            <li>Zod Validation</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white mb-4">
            Developer
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Built & maintained by Chandra Bose
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/ChandraBose-11"
              target="_blank"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <GithubIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/chandra-bose-b838142a1/"
              target="_blank"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <LinkedinIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © {year} Subscription Management Dashboard · All rights reserved
      </div>
    </footer>
  );
}
