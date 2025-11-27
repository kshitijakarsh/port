import { Design } from "@/types";

/**
 * Centralized design/video project data with unique IDs
 */
export const designs: readonly Design[] = [
  {
    id: "music-player",
    videoSrc: "./des1.mp4",
    title: "A Music Player",
    description:
      "A minimal music player app design for phones, featuring album art, playback controls, and smooth animations.",
    toolsUsed: ["Figma"],
  },
  {
    id: "domain-registry-landing",
    videoSrc: "./des2.mp4",
    title: "Landing Page for a Domain Registry",
    description:
      "A sleek landing page design showcasing domain search, pricing, and extensions with a modern, intuitive layout.",
    toolsUsed: ["Figma"],
  },
] as const;

/**
 * Get all designs
 */
export const getAllDesigns = (): readonly Design[] => {
  return designs;
};
