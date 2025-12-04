import { Home, Info, BookOpen, PencilRuler, Download } from "lucide-react";
import { Route } from "@/types";

/**
 * Navigation routes configuration
 */

export const routes: readonly Route[] = [
  {
    id: "home",
    path: "/",
    icon: Home,
    label: "Home",
  },
  {
    id: "about",
    path: "/about",
    icon: Info,
    label: "About",
  },
  {
    id: "projects",
    path: "/projects",
    icon: BookOpen,
    label: "Projects",
  },
  {
    id: "designs",
    path: "/designs",
    icon: PencilRuler,
    label: "Designs",
  },
] as const;

/**
 * Get route paths array
 */
export const getRoutePaths = (): readonly string[] => {
  return routes.map((route) => route.path);
};

/**
 * Get route icons array
 */
export const getRouteIcons = () => {
  return routes.map((route) => route.icon);
};
