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
    {
      image: "./codesblue.svg",
      title: "CodesBlue",
      description:
        "Agency website to onboard people and give an overview of services offered",
      techUsed: [
        { stack: "NextJs" },
        { stack: "Tailwind CSS" },
      ],
      githubUrl: "https://github.com/kshitijakarsh/codesblue",
      liveUrl: "https://www.codesblue.com/",
    },
  ];

  return (
    <div className="flex justify-center mt-12">
      <div className="flex flex-col gap-6 max-w-3xl w-full">
        <p className="text-xl serif font-semibold text-center">Proof Of Work</p>
        <div className="flex gap-4 justify-center flex-wrap">
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
