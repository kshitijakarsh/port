import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

type CardProps = Omit<Project, "id">;

export default function Card(props: CardProps) {
  return (
    <div className="px-1 sm:px-2">
      <ProjectCard {...props} />
    </div>
  );
}
