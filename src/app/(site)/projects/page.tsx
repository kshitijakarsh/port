import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/data/projects';
import Button from '@/components/Button';
import { MoveLeft } from 'lucide-react';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col gap-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 min-h-screen px-4">
      <div className="px-4">
        <Button variant="social" href="/" className="w-20 rounded-full">
          <MoveLeft size={14} />
          Back
        </Button>
      </div>

      <div className="px-4">
        <h1 className="font-serif text-3xl mb-2">Projects</h1>
        <p className="text-muted-foreground text-sm max-w-xl">
          A collection of projects I&apos;ve worked on, ranging from full-stack applications to
          AI-powered experiments and client work.
        </p>
      </div>

      <section className="w-full px-4 sm:px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
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
    </div>
  );
}
