
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-[350px] px-4">
        <h1 className="text-3xl font-bold mb-3">404</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Oops! Page not found</p>
        <a href="/" className="px-4 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
