import Card from "@/components/Card";

export default function Projects() {
  const projects = [
    {
      image: "./dhairya.svg",
      title: "Dhairya",
      description:
        "A full-featured gym management platform offering revenue tracking, user attendance monitoring",
      techUsed: [
        { stack: "JavaScript" },
        { stack: "TypeScript" },
        { stack: "Node.js" },
      ],
      githubUrl: "https://github.com/kshitijakarsh/Dhairya",
      liveUrl: "https://dhairya-five.vercel.app/",
    },
    {
      image: "./elevance.svg",
      title: "Elevance",
      description:
        "An AI-powered career platform that analyzes resumes to recommend relevant jobs, simulate interview round",
      techUsed: [
        { stack: "React" },
        { stack: "Tailwind CSS" },
        { stack: "Chart.js" },
      ],
      githubUrl: "https://github.com/kshitijakarsh/elevance",
      liveUrl: "https://elevance-web.vercel.app/",
    },
  ];

  return (
    <div className="px-2 sm:flex sm:justify-center sm:gap-8">
      <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-3xl">
        <p className="text-lg sm:text-xl serif font-semibold">Proof Of Work</p>
        <div className="flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              techUsed={project.techUsed}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}