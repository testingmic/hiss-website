import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import router from "./routes";
import "./styles/global.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-3xl">HISS</span>
            </div>
            <h1 className="text-white text-2xl font-bold mb-4">
              High International Standard School
            </h1>
            <div className="w-48 h-2 bg-white/30 rounded-full mx-auto overflow-hidden">
              <div
                className="h-full bg-white rounded-full"
                style={{
                  width: "100%",
                  animation: "loadingProgress 2s ease-in-out",
                }}
              />
            </div>
            <style jsx>{`
              @keyframes loadingProgress {
                0% {
                  width: 0%;
                }
                100% {
                  width: 100%;
                }
              }
            `}</style>
          </div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </AnimatePresence>
  );
};

export default App;
