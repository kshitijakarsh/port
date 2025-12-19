"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@/components/Card";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { getAllProjects } from "@/data/projects";


function useIsMobile(breakpoint = 639) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export default function Projects() {
  const projects = getAllProjects();
  const isMobile = useIsMobile();

  const [introDone, setIntroDone] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <AnimatePresence>
        {!introDone && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <TypingAnimation
              words={["Proof Of Work"]}
              startOnView={false}
              className="serif font-semibold text-[clamp(2.5rem,7vw,4.5rem)]"
              onComplete={() => {
                setTimeout(() => setIntroDone(true), 400);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {introDone && (
        <motion.p
          className="
            px-4 py-2
            text-xl sm:text-2xl
            serif font-semibold
            text-center
            mt-6 sm:mt-10
          "
          initial={{
            opacity: 0,
            scale: 2.5,
            y: "40vh",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => {
            setTimeout(() => setShowProjects(true), 150);
          }}
        >
          Proof Of Work
        </motion.p>
      )}

      {showProjects && isMobile && (
        <motion.div
          className="flex flex-col gap-6 px-4 mt-8 pb-20"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </motion.div>
      )}

      {showProjects && !isMobile && (
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Card {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
