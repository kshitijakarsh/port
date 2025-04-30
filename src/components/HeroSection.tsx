import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="pt-40 pb-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        {" "}
        <div className="space-y-6 text-left">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
            <span>
              Hi, I'm{" "}
              <span className="text-5xl text-orange-400 relative inline-block">
                kshitij.
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 transform translate-y-2 rounded-full animate-shimmer"></span>
              </span>
            </span>
            <br />
          </h1>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-md">
            I build exceptional and accessible digital experiences for the web.
          </p>

          <div className="flex items-start justify-start gap-3 flex-wrap">
            <Link
              to="/projects"
              className="px-4 py-1.5 rounded bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              View My Work
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <style>
        {`
    @keyframes shimmer {
      0% { background-position: -200% 50%; }
      100% { background-position: 200% 50%; }
    }
    
    .animate-shimmer {
      background-size: 200% auto;
      animation: shimmer 3s infinite linear;
    }
  `}
      </style>
    </section>
  );
}
