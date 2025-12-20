import React from "react";
import { motion } from "framer-motion";
import { FiHelpCircle, FiLifeBuoy, FiMail } from "react-icons/fi";

const Support = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Support Center
          </h1>
          <p className="mt-4 text-base-content/70 max-w-xl mx-auto">
            Need help or facing an issue? We’re here to make things smooth and
            simple for you.
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -4 }}
            className=" bg-linear-to-br from-green-200 via-green-300 to-green-400 rounded-2xl p-8 shadow-sm border border-base-300"
          >
            <FiHelpCircle className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">FAQs</h3>
            <p className="text-base-content/70 text-sm">
              Find quick answers to common questions about issues, roles, and
              workflows.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className=" bg-linear-to-br from-green-200 via-green-300 to-green-400 rounded-2xl p-8 shadow-sm border border-base-300"
          >
            <FiLifeBuoy className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Issue Assistance</h3>
            <p className="text-base-content/70 text-sm">
              Having trouble with an assigned issue? Get guidance on what to do
              next.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className=" bg-linear-to-br from-green-200 via-green-300 to-green-400 rounded-2xl p-8 shadow-sm border border-base-300"
          >
            <FiMail className="text-4xl text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Contact Admin</h3>
            <p className="text-base-content/70 text-sm">
              Reach out to the admin team for critical problems or account
              support.
            </p>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center text-sm text-base-content/50"
        >
          © {new Date().getFullYear()} Support System · Built with care
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Support;
