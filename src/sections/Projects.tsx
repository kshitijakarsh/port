import Card from "@/components/Card";
import { getHomepageProjects } from "@/data/projects";

export default function Projects() {
  const projects = getHomepageProjects();

  return (
    <div className="px-2 sm:flex sm:justify-center sm:gap-8">
      <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-3xl">
        <p className="text-lg sm:text-xl serif font-semibold">Proof Of Work</p>
        <div className="flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4">
          {projects.map((project) => (
            <Card
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              techUsed={project.techUsed}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}