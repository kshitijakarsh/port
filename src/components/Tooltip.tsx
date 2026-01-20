"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    className?: string; // Allow overriding container styles
}

export default function Tooltip({ content, children, className }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                    >
                        {/* We remove default styles to allow full custom rendering of the "header" cards */}
                        <div className={`shadow-xl rounded-lg overflow-hidden ${className}`}>
                            {content}
                        </div>
                        {/* Simple arrow - optional, maybe remove if cards are large */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/20" />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </div>
    );
}
