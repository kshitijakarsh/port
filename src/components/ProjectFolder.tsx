"use client";
import { motion } from "framer-motion";

interface ProjectFolderProps {
  isOpen: boolean;
  onClick: () => void;
  filesExited?: boolean;
}

export default function ProjectFolder({ isOpen, onClick, filesExited = false }: ProjectFolderProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative cursor-pointer"
      style={{ width: "200px", height: "180px" }}
      aria-label="Open projects folder"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-36">
          {/* Folder body */}
          <div
            className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(to bottom, #ea580c 0%, #f97316 50%, #fb923c 100%)",
            }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center pt-8 pb-16"
              animate={{ opacity: filesExited ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={isOpen ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute w-24 h-16 bg-white rounded-lg shadow-lg transform rotate-6"
                  style={{
                    background: "linear-gradient(to bottom, #f9fafb, #e5e7eb)",
                    top: "20%",
                    left: "15%",
                  }}
                >
                  <div className="p-2 space-y-1">
                    <div className="h-0.5 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-0.5 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>

                {/* FILE 2 - Middle */}
                <div
                  className="absolute w-24 h-16 bg-white rounded-lg shadow-lg transform -rotate-3"
                  style={{
                    background: "linear-gradient(to bottom, #f9fafb, #e5e7eb)",
                    top: "30%",
                    left: "50%",
                    transform: "translateX(-50%) rotate(-3deg)",
                  }}
                >
                  <div className="p-2 space-y-1">
                    <div className="h-0.5 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-0.5 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>

                {/* FILE 3 - Front */}
                <motion.div
                  className="absolute w-24 h-16 bg-white rounded-lg shadow-xl"
                  style={{
                    background: "linear-gradient(to bottom, #ffffff, #f3f4f6)",
                    top: "40%",
                    right: "15%",
                  }}
                  animate={isOpen ? { rotate: 8, y: -5 } : { rotate: -4, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-2 space-y-1">
                    <div className="h-0.5 bg-gray-400 rounded w-full"></div>
                    <div className="h-0.5 bg-gray-400 rounded w-4/5"></div>
                    <div className="h-0.5 bg-gray-400 rounded w-3/5"></div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Glassmorphic overlay - opens from top */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl origin-bottom"
              style={{
                width: "100%",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
              initial={{ height: "60%" }}
              animate={isOpen ? { height: "60%" } : { height: "90%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Text content */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="text-xl font-bold serif">Projects</h3>
              <p className="text-[10px] opacity-90 mt-0.5">Proof of Work</p>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
