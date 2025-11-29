"use client";

import { useState, useRef, useEffect } from "react";
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

  // 🟦 Card size (matches Card.tsx)
  const CARD_WIDTH = 320;
  const CARD_HEIGHT = 380;

  // 🔵 Correct: Get folder position relative to container
  useEffect(() => {
    if (folderRef.current && containerRef.current) {
      const folderRect = folderRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      setOrigin({
        x: folderRect.left - containerRect.left + folderRect.width / 2,
        y: folderRect.top - containerRect.top + folderRect.height / 2,
      });
    }
  }, [isOpen]);

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
    <div className="flex justify-center mt-12">
      <div className="flex flex-col gap-6 max-w-3xl w-full">
        <p className="text-xl serif font-semibold text-center">Proof Of Work</p>

        <div
          ref={containerRef}
          className="relative min-h-[500px] rounded-2xl p-4 overflow-hidden"
        >
          {/* Folder Icon */}
          <div
            ref={folderRef}
            className="absolute bottom-48 right-8 z-50 pointer-events-auto"
          >
            <ProjectFolder
              isOpen={isOpen}
              onClick={handleFolderClick}
              filesExited={animateCards}
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 w-full relative">
            {projects.map((project, index) => {
              const stackRotate = (index - projects.length / 2) * 6;

              const arcX = (index % 2 === 0 ? -1 : 1) * 40;
              const arcY = index * -12;

              return (
                <motion.div
                  key={project.id}
                  className="relative h-[380px]"
                  initial={false}
                  animate={
                    animateCards
                      ? {
                          x: 0,
                          y: 0,
                          scale: 1,
                          rotate: 0,
                          opacity: 1,
                          zIndex: 5,
                        }
                      : {
                          // 🔥 PERFECT: Cards collapse to folder center
                          x: origin.x - CARD_WIDTH / 2 + arcX,
                          y: origin.y - CARD_HEIGHT / 2 + arcY,
                          scale: 0.22,
                          rotate: stackRotate,
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
