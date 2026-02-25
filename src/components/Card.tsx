import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

export default function Card(props: Project) {
  return (
    <div className="px-1 sm:px-2">
      <ProjectCard {...props} />
    </div>
  );
}
