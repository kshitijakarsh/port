"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShowcaseSlide } from "@/components/ShowcaseSlide";
import VideoCard from "@/components/VideoCard";
import { getAllDesigns } from "@/data/designs";

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const update = () => setIsDesktop(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [breakpoint]);

  return isDesktop;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export default function DesignShowcase() {
  const designVideos = getAllDesigns();
  const containerRef = useRef<HTMLDivElement>(null);

  const isDesktop = useIsDesktop();

  const [introDone, setIntroDone] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1;


  useEffect(() => {
    if (!introDone || !isDesktop) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const maxX = -(designVideos.length - 1) * viewportWidth;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      x.set(Math.max(Math.min(0, x.get() - e.deltaY), maxX));
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      document.body.style.overflow = originalOverflow;
    };
  }, [introDone, isDesktop, designVideos.length, viewportWidth, x]);

  return (
    <section className="relative min-h-screen overflow-hidden">

      <AnimatePresence>
        {!introDone && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <TypingAnimation
              words={["Design Showcase"]}
              startOnView={false}
              className="serif font-semibold text-[clamp(3rem,8vw,6rem)]"
              onComplete={() => {
                setTimeout(() => setIntroDone(true), 500);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>


      {introDone && (
        <motion.p
          className="px-4 py-2 sm:px-8 text-xl text-center sm:text-2xl serif font-semibold"
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
            setTimeout(() => setVisible(true), 150);
          }}
        >
          Design Showcase
        </motion.p>
      )}


      {visible && isDesktop && (
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex h-screen"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {designVideos.map((video, index) => (
            <ShowcaseSlide
              key={video.id}
              index={index}
              x={x}
              viewportWidth={viewportWidth}
              video={video}
            />
          ))}
        </motion.div>
      )}

      {visible && !isDesktop && (
        <div className="flex flex-col gap-12 px-4 sm:px-8 mt-10 pb-20">
          {designVideos.map((video) => (
            <div key={video.id} className="flex flex-col gap-4">
              <VideoCard
                videoSrc={video.videoSrc}
                videoType={video.videoType}
              />

              <div>
                <h1 className="text-lg font-medium">{video.title}</h1>
                <p className="text-sm text-neutral-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
