"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import VideoCard from "@/components/VideoCard";

type ShowcaseSlideProps = {
  index: number;
  x: MotionValue<number>;
  viewportWidth: number;
  video: {
    id: string;
    videoSrc: string;
    videoType: "mobile" | "web";
    title: string;
    description: string;
  };
};

export function ShowcaseSlide({
  index,
  x,
  viewportWidth,
  video,
}: ShowcaseSlideProps) {
  const scale = useTransform(
    x,
    [
      -viewportWidth * (index + 1),
      -viewportWidth * index,
      -viewportWidth * (index - 1),
    ],
    [0.94, 1, 0.94]
  );

  return (
    <motion.div
      style={{ scale }}
      className="w-screen shrink-0 flex justify-center mt-20 gap-8 px-4 sm:px-8"
      transition={{
        scale: { duration: 0.35, ease: "easeOut" },
      }}
    >
      <VideoCard videoSrc={video.videoSrc} videoType={video.videoType} />

      <div className="max-w-md">
        <h1 className="text-lg font-medium">{video.title}</h1>
        <p className="text-sm text-neutral-600">{video.description}</p>
      </div>
    </motion.div>
  );
}
