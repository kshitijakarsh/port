// pages/Index.tsx
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import TechStack from "../components/TechStack";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogSection from "../components/BlogSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    id: "project1",
    title: "Dhairya",
    description:
      "A full-featured gym management platform offering revenue tracking, user attendance monitoring, personalized workout insights, and seamless gym discovery and enrollment.",
    imageSrc: "./Dhairya.png",
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
    imageSrc: "./elevance.png",
    tags: ["Node.js", "TypeScript", "Gemini"],
    githubUrl: "https://github.com/kshitijakarsh/elevance",
    liveUrl: "https://elevance-web.vercel.app/",
    featured: true,
  },
];

const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar show={showNavbar} />
      <main className="min-h-screen">
        <HeroSection />

        <div className="max-w-4xl mx-auto px-4">
          <section className="py-24">
            <div className="mb-14 text-left">
              <h2 className="text-3xl font-bold tracking-tight font-heading mb-2">
                Featured Projects
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
                A curated selection of impactful products and experiments
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {featuredProjects.map((project) => (
                <div key={project.id} className="flex flex-col h-full">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            <div className="mt-16 text-left">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                View All Projects
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* <BlogSection /> */}

          <section className="py-20">
            <AboutSection />
          </section>

          <section>
            <TechStack />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
