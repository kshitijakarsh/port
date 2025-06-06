import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Code,
  Coffee,
  BookOpen,
  Calendar,
  Download,
  ExternalLink,
  Twitter,
  Mail,
  Github,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const experienceData = [
  // {
  // id: "exp1",
  // title: "Senior Frontend Developer",
  // company: "Tech Innovations Inc.",
  // period: "2022 - Present",
  // description:
  //   "Leading frontend development for enterprise SaaS applications, implementing design systems, and mentoring junior developers.",
  // achievements: [
  //   "Redesigned the main dashboard, increasing user engagement by 40%",
  //   "Implemented component library used across multiple teams",
  //   "Reduced bundle size by 30% through code optimization",
  // ],
  // },
  {
    id: " ",
    title: " ",
    company: " ",
    period: " ",
    description: " ",
    achievements: [" ", " ", " "],
  },
];

const About = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar show={showNavbar} />
      <main className="min-h-screen py-12 md:py-24 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="w-full md:w-1/3">
                <div className="relative rounded-lg overflow-hidden aspect-square mb-6">
                  <img
                    src="./pfp.svg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="space-y-3">
                  <a
                    href="./Kshitij_Akarsh.pdf"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition-colors"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kshitijakarsh/"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-700 font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink size={18} />
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <div className="inline-block mb-4">
                  <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-sm font-medium">
                    About Me
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Kshitij Akarsh
                </h1>

                <div className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Fullstack Developer
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p className="text-sm">
                    {" "}
                    I'm a passionate frontend developer with expertise in
                    creating responsive, user-friendly web applications. With
                    experience in full-stack development, I have worked on
                    projects like Dhairya, an all-in-one gym management service,
                    and Elevance, a platform that helps users find jobs based on
                    their resumes.{" "}
                  </p>{" "}
                  <p className="text-sm">
                    {" "}
                    I specialize in modern JavaScript frameworks like React and
                    Node.js, and I'm adept at building applications that are
                    both visually appealing and performant. My approach to
                    development emphasizes clean, maintainable code,
                    scalability, and optimizing performance for seamless user
                    experiences.{" "}
                  </p>{" "}
                  <p className="text-sm">
                    {" "}
                    In addition to development, I enjoy contributing to
                    open-source projects, mentoring junior developers, and
                    continuously learning new technologies. Whether it's solving
                    complex UI challenges or improving backend functionality,
                    I’m always striving to push the boundaries of what’s
                    possible in web development.{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="py-12 border-t border-gray-200 dark:border-gray-800">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Coffee
                  size={20}
                  className="text-gray-700 dark:text-gray-300"
                />
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                My professional journey and key roles
              </p>
            </div>

            <div className="bg-white dark:bg-transparent dark:bg-opacity-30 dark:bg-gradient-to-r dark:from-black dark:to-gray-900 dark:backdrop-blur-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="space-y-8">
                {experienceData.map((experience, index) => (
                  <div key={experience.id} className="relative pl-6">
                    <div className="absolute -left-1 top-1.5 h-3 w-3 rounded-full bg-gray-700 dark:bg-gray-500"></div>
                    {index !== experienceData.length - 1 && (
                      <div
                        className="absolute -left-0 top-3 bottom-0 w-px bg-gray-300 dark:bg-gray-700"
                        style={{ height: "calc(100% + 32px)" }}
                      ></div>
                    )}

                    <div className="mb-1 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Calendar size={14} />
                      {experience.period}
                    </div>

                    <h4 className="text-lg font-semibold">
                      {experience.title}
                    </h4>
                    <div className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-2">
                      {experience.company}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {experience.description}
                    </p>

                    <div className="space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-1 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          <section className="py-12 border-t border-gray-200 dark:border-gray-800">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen
                  size={20}
                  className="text-gray-700 dark:text-gray-300"
                />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
            </div>

            <div className="bg-white dark:bg-transparent dark:bg-opacity-30 dark:bg-gradient-to-r dark:from-black dark:to-gray-900 dark:backdrop-blur-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">
                    Bachelor of Science in Computer Science
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                    Noida Institute of Engineering & Technology
                  </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Calendar size={14} />
                  2023 - 2027
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                Graduated with honors. Specialized in Web Technologies and
                Human-Computer Interaction. Relevant coursework included
                Advanced JavaScript, User Experience Design, and Data Structures
                & Algorithms.
              </p>
            </div>
          </section>

          <section className="py-12 border-t border-gray-200 dark:border-gray-800">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <User size={20} className="text-gray-700 dark:text-gray-300" />
                <h2 className="text-2xl font-bold">Get In Touch</h2>
              </div>
            </div>

            <div className="bg-white dark:bg-transparent dark:bg-opacity-30 dark:bg-gradient-to-r dark:from-black dark:to-gray-900 dark:backdrop-blur-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <section className="mt-12 mb-12 mx-auto text-center">
                <h3 className="text-lg font-medium mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
                  Let's Connect
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-6">
                  <a
                    href="https://github.com/kshitijakarsh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-medium text-gray-600 dark:text-gray-400 transition-opacity duration-200">
                      GitHub
                    </span>
                  </a>

                  <a
                    href="mailto:kshitijakarsh@gmail.com"
                    className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800"
                    aria-label="Email Me"
                  >
                    <Mail className="h-6 w-6 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-medium text-gray-600 dark:text-gray-400 transition-opacity duration-200">
                      Email
                    </span>
                  </a>

                  <a
                    href="https://twitter.com/kshitijakarsh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800"
                    aria-label="Twitter/X Profile"
                  >
                    <Twitter className="h-6 w-6 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-medium text-gray-600 dark:text-gray-400 transition-opacity duration-200">
                      Twitter/X
                    </span>
                  </a>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
