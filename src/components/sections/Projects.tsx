import ProjectCard from "@/components/ProjectCard";
import { getHomepageProjects } from "@/data/projects";

export default function Projects() {
  const projects = getHomepageProjects();

  return (
    <section className="w-full px-4 sm:px-4 border-t-2 border-b-2 border-double">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            techUsed={project.techUsed}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            imageAlt={project.imageAlt}
            backgroundColor={project.backgroundColor}
            year={project.year}
            field={project.field}
            type={project.type}
          />
        ))}
      </div>
    </section>
  );
}