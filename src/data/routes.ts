import { Home, Info, BookOpen, PencilRuler } from "lucide-react";
import { Route } from "@/types";

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

export const getRoutePaths = (): readonly string[] => {
  return routes.map((route) => route.path);
};

export const getRouteIcons = () => {
  return routes.map((route) => route.icon);
};
