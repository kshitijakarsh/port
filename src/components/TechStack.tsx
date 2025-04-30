import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const techStack = [
    "JavaScript",
    "TypeScript",
    "React", 
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Node.js", 
    "Express.js", 
    "MongoDB", 
    "PostgreSQL", 
    "MySQL",
    "Prisma",
    "Git", 
    "Docker", 
    "AWS", 
    "Zod",
    "Recoil",
    "Supabase"
  ];

  return (
    <section className="md:py-20 ">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Skills</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Technologies and tools I use to bring products to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {techStack.map((tech) => (
            <Badge 
              key={tech}
              variant="secondary"
              className="bg-gray-800 dark:bg-gray-900 text-white px-3 py-1 text-xs md:text-sm hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors rounded"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
