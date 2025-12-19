import React from "react";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-red-600">403</span>
          </div>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Access Forbidden
        </h1>
        <p className="text-gray-600 mb-8">
          You don’t have permission to access this page.  
          This area is restricted to administrators only.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-2 rounded-lg bg-gray-800 text-white text-sm font-medium hover:bg-gray-900 transition"
          >
            Go Home
          </Link>

          <Link
            to="/login"
            className="px-6 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Login as Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
