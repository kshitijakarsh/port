import Card from "@/components/Card";
import { getHomepageProjects } from "@/data/projects";

export default function Projects() {
  const projects = getHomepageProjects();

  return (
    <div className="px-4">
      <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 inset-shadow w-full h-[1px] mb-6"></div>
      <div className="sm:flex sm:justify-center sm:gap-8">
        <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-3xl">
          <p className="text-lg sm:text-xl serif font-semibold">
            Proof Of Work
          </p>
          <div className="flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4 px-2">
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
      </div>
      <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 inset-shadow w-full h-[1px] mt-6"></div>
    </div>
  );
}
