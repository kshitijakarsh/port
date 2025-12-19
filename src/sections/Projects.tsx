import Card from "@/components/Card";
import { getHomepageProjects } from "@/data/projects";

export default function Projects() {
  const projects = getHomepageProjects();

  return (
    <section className="w-full">
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mb-10" />
      <div className="mx-auto w-full max-w-5xl px-2 sm:px-4">
        <div className="mb-6">
          <p className="text-lg sm:text-xl serif font-semibold text-center sm:text-left">
            Proof of Work
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            sm:gap-6
          "
        >
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
              backgroundColor={project.backgroundColor}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mt-10" />
    </section>
  );
}
