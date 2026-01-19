import { Project } from "@/types";

/**
 * Centralized project data with unique IDs
 */
export const projects: readonly Project[] = [
  {
    id: "dhairya",
    image: "./dhairya.svg",
    title: "Dhairya",
    description:
      "A full-featured gym management platform offering revenue tracking, user attendance monitoring",
    techUsed: [
      { id: "dhairya-tech-1", stack: "JavaScript" },
      { id: "dhairya-tech-2", stack: "TypeScript" },
      { id: "dhairya-tech-3", stack: "Node.js" },
    ],
    githubUrl: "https://github.com/kshitijakarsh/Dhairya",
    liveUrl: "https://dhairya-five.vercel.app/",
    backgroundColor: "#ffc9c9",
    year: "2024",
    field: "Full Stack",
    type: "Personal Project",
  },
  {
    id: "elevance",
    image: "./elevance.svg",
    title: "Elevance",
    description:
      "An AI-powered career platform that analyzes resumes to recommend relevant jobs, simulate interview round",
    techUsed: [
      { id: "elevance-tech-1", stack: "React" },
      { id: "elevance-tech-2", stack: "Tailwind CSS" },
      { id: "elevance-tech-3", stack: "Chart.js" },
    ],
    githubUrl: "https://github.com/kshitijakarsh/elevance",
    liveUrl: "https://elevance-web.vercel.app/",
    backgroundColor: "#ffd6a7",
    year: "2024",
    field: "AI",
    type: "Personal Project",
  },
  {
    id: "codesblue",
    image: "./codesblue.svg",
    title: "CodesBlue",
    description:
      "Agency website to onboard people and give an overview of services offered",
    techUsed: [
      { id: "codesblue-tech-1", stack: "NextJs" },
      { id: "codesblue-tech-2", stack: "Tailwind CSS" },
    ],
    githubUrl: "https://github.com/kshitijakarsh/codesblue",
    liveUrl: "https://www.codesblue.com/",
    backgroundColor: "#B3DBF4",
    year: "2024",
    field: "Web Dev",
    type: "Client Work",
  },
] as const;

/**
 * Get projects for homepage (limited subset)
 */
export const getHomepageProjects = (): readonly Project[] => {
  return projects.slice(0, 2);
};

/**
 * Get all projects
 */
export const getAllProjects = (): readonly Project[] => {
  return projects;
};
