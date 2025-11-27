import Card from "@/components/Card";
import { getAllProjects } from "@/data/projects";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="flex justify-center mt-12">
      <div className="flex flex-col gap-6 max-w-3xl w-full">
        <p className="text-xl serif font-semibold text-center">Proof Of Work</p>
        <div className="flex gap-4 justify-center flex-wrap">
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
