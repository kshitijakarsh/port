"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import ProjectFolder from "@/components/ProjectFolder";
import { getAllProjects } from "@/data/projects";

export default function Projects() {
  const projects = getAllProjects();

  const [isOpen, setIsOpen] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  const folderRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const CARD_WIDTH = 320;
  const CARD_HEIGHT = 320;

  const updateOrigin = () => {
    if (!folderRef.current || !containerRef.current) return;

    const folderRect = folderRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setOrigin({
      x: folderRect.left - containerRect.left + folderRect.width / 2,
      y: folderRect.top - containerRect.top + folderRect.height / 2,
    });
  };

  useLayoutEffect(() => {
    updateOrigin();

    window.addEventListener("resize", updateOrigin);
    return () => window.removeEventListener("resize", updateOrigin);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setAnimateCards(true), 350);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleFolderClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setAnimateCards(true), 350);
    } else {
      setAnimateCards(false);
      setTimeout(() => setIsOpen(false), 350);
    }
  };

  return (
    <div className="flex justify-center mx-auto">
      <div className="flex flex-col gap-4 sm:gap-6 w-full mt-6 sm:mt-8 md:mt-12 px-2 sm:px-4">
        <p className="text-lg sm:text-xl md:text-2xl serif font-semibold text-center">
          Proof Of Work
        </p>

        <div className="grid grid-cols-1 gap-3 sm:hidden">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>

        <div
          ref={containerRef}
          className="hidden sm:block relative min-h-[380px] md:min-h-[650px] 
                     rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 overflow-hidden"
        >
          <div
            ref={folderRef}
            className="absolute bottom-10 right-10 sm:bottom-16 sm:right-16 z-50"
          >
            <ProjectFolder isOpen={isOpen} onClick={handleFolderClick} />
          </div>


          <div className="grid grid-cols-2 gap-4 w-full relative">
            {projects.map((project, index) => {
              const angle = (index - projects.length / 2) * 6;
              const arcX = (index % 2 === 0 ? -1 : 1) * 30;
              const arcY = index * -10;

              return (
                <motion.div
                  key={project.id}
                  className="relative h-80"
                  initial={false}
                  animate={
                    animateCards
                      ? {
                          x: 0,
                          y: 0,
                          scale: 1,
                          rotate: 0,
                          opacity: 1,
                          zIndex: 10,
                        }
                      : {
                          x: origin.x - CARD_WIDTH / 2 + arcX,
                          y: origin.y - CARD_HEIGHT / 2 + arcY,
                          scale: 0.22,
                          rotate: angle,
                          opacity: 0,
                          zIndex: 50 - index,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 0.8,
                    delay: animateCards
                      ? 0.25 + index * 0.08
                      : (projects.length - index - 1) * 0.06,
                  }}
                >
                  <Card {...project} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
