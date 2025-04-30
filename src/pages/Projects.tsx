import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";


const allProjects = [
  {
    id: "project1",
    title: "Dhairya",
    description:
      "A full-featured gym management platform offering revenue tracking, user attendance monitoring, personalized workout insights, and seamless gym discovery and enrollment.",
    imageSrc:
      "./Dhairya.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/kshitijakarsh/Dhairya",
    liveUrl: "https://dhairya-five.vercel.app/",
    featured: true,
  },
  {
    id: "project2",
    title: "Elevance",
    description:
      "An AI-powered career platform that analyzes resumes to recommend relevant jobs, simulate interview rounds, and assist in coding preparation with real-time tools.",
    imageSrc:
      "./elevance.png",
    tags: ["Next.js", "TypeScript", "Gemini"],
    githubUrl: "https://github.com/kshitijakarsh/elevance",
    liveUrl: "https://elevance-web.vercel.app/",
    featured: true,
  },
];

const Projects = () => {
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <Navbar show={false} />
      <main className="min-h-screen pt-36 pb-12 bg-white dark:bg-gray-950">
        <div className="w-full max-w-4xl mx-auto px-4">
          <section className="mb-8 text-left">
            <h1 className="text-3xl font-bold mb-3 font-heading">
              <span className="gradient-text">My Projects</span>
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore my portfolio of web applications, mobile apps, and design projects
            </p>
          </section>

          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {allProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="w-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="animate-fadeIn">
                    <ProjectCard
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      imageSrc={project.imageSrc}
                      tags={project.tags}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                      featured={false}
                    />
                  </div>
                </div>
              ))}
            </div>

            {allProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No projects found in this category
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;