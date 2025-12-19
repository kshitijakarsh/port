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
    videoType: "mobile",
  },
  {
    id: "domain-registry-landing",
    videoSrc: "./des2.mp4",
    title: "Landing Page for a Domain Registry",
    description:
      "A sleek landing page design showcasing domain search, pricing, and extensions with a modern, intuitive layout.",
    toolsUsed: ["Figma"],
    videoType: "web",
  },
  {
    id: "stash-bento",
    videoSrc: "./Stash.mp4",
    title: "Bento Card",
    description:
      "A bento-style card layout that highlights key product features in a clear, visually structured format.",
    toolsUsed: ["Figma"],
    videoType: "web",
  },
  {
    id: "codes-blue-mock",
    videoSrc: "./CodesBlueMock.mp4",
    title: "CodesBlue Mock Landing Page",
    description:
      "A conceptual landing page for CodesBlue showcasing a modern UI approach with an emphasis on clarity, spacing, and feature-driven content.",
    toolsUsed: ["Figma"],
    videoType: "web",
  },
] as const;

export const getAllDesigns = (): readonly Design[] => {
  return designs;
};
