import { Book, Code, Briefcase, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const experiences = [
    {
      // role: "Senior Frontend Developer",
      // company: "Tech Company",
      // period: "2022 - Present",
      // description: "Led the development of responsive web applications using React and TypeScript. Implemented design systems and improved performance."

      role: " ",
      company: " ",
      period: " ",
      description: " ",
    },
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 font-heading">
              <span>About Me</span>
            </h2>

            <div className="prose dark:prose-invert max-w-none space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <p>
                I'm a dedicated Full-Stack Developer with hands-on experience
                building real-world platforms like Dhairya and Elevance. Over
                the past few years, I’ve honed my skills in JavaScript,
                TypeScript, React, and Node.js to develop fast, responsive web
                applications.
              </p>
              <p>
                I focus on delivering clean, scalable interfaces backed by
                secure and efficient backend systems using tools like MongoDB,
                JWT, and Cloudinary. My work is driven by a desire to solve
                meaningful problems and improve user workflows through
                thoughtful design and modern technologies.
              </p>
            </div>

            {/* <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5">
                <div className="p-1.5 rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                  <Code size={14} />
                </div>
                <span className="text-xs">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="p-1.5 rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                  <Briefcase size={14} />
                </div>
                <span className="text-xs">10+ Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="p-1.5 rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                  <Book size={14} />
                </div>
                <span className="text-xs">Continuous Learner</span>
              </div>
            </div> */}

            <div className="mt-6">
              <Link
                to="/about"
                className="px-4 py-1.5 rounded-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors inline-flex items-center gap-1"
              >
                Learn More About Me
              </Link>
            </div>
          </div>

          {/* <div className="bg-white dark:bg-transparent dark:bg-opacity-30 dark:bg-gradient-to-r dark:from-black dark:to-gray-900 dark:backdrop-blur-md rounded-sm p-4">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-1.5">
              <Calendar
                size={16}
                className="text-gray-800 dark:text-gray-200"
              />
              <span>Experience</span>
            </h3>

            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-4">
                  <div className="absolute -left-1 top-1 h-2 w-2 rounded-full bg-gray-800 dark:bg-gray-200"></div>
                  <div className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </div>
                  <h4 className="text-sm font-semibold">{exp.role}</h4>
                  <div className="text-xs text-gray-800 dark:text-gray-200 mb-1">
                    {exp.company}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
