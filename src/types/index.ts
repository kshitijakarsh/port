import { LucideIcon } from "lucide-react";

/**
 * Technology stack item
 */
export interface Tech {
  id: string;
  stack: string;
}

/**
 * Project data structure
 */
export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  techUsed: readonly Tech[];
  githubUrl: string;
  liveUrl: string;
  imageAlt?: string;
  backgroundColor?: string;
}

/**
 * Design/video project data structure
 */
export interface Design {
  id: string;
  videoSrc: string;
  title: string;
  description: string;
  toolsUsed: string[];
  videoType: "mobile" | "web";
}

/**
 * Navigation route configuration
 */
export interface Route {
  id: string;
  path: string;
  icon: LucideIcon;
  label: string;
}

/**
 * Blog post structure
 */
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}
