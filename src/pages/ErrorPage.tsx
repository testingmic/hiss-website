import { Link, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError() as any;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          <div className="bg-blue-900 py-8 px-6 text-center">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="text-7xl font-bold text-white"
            >
              404
            </motion.h1>
            <h2 className="text-2xl font-semibold text-white mt-4">
              Page Not Found
            </h2>
          </div>

          <div className="p-8">
            <div className="mb-8 text-center">
              <p className="text-gray-700 mb-4">
                The page you are looking for doesn't exist or has been moved.
              </p>
              {error && (
                <p className="text-red-500 text-sm">
                  {error.statusText || error.message}
                </p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                to="/"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                <FaHome className="mr-2" />
                Back to Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                <FaArrowLeft className="mr-2" />
                Go Back
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Need assistance?{" "}
              <a
                href="/contact"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Contact us
              </a>
            </p>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            High International Standard School
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
