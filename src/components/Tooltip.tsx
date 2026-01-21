"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    side?: "top" | "bottom";
}

export default function Tooltip({ content, children, className, side = "top" }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    const isTop = side === "top";

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: isTop ? 10 : -10, scale: 0.95, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: isTop ? 10 : -10, scale: 0.95, x: "-50%" }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={`absolute left-1/2 z-50 pointer-events-none ${isTop ? "-top-12" : "top-full mt-2"
                            }`}
                    >
                        <div className={`shadow-xl rounded-lg overflow-hidden ${className}`}>
                            {content}
                        </div>
                        <div className={`absolute left-1/2 -translate-x-1/2 border-4 border-transparent ${isTop ? "top-full border-t-black/20" : "bottom-full border-b-black/20"
                            }`} />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </div>
    );
}
