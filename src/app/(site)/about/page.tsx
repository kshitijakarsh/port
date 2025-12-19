import { FlipWords } from "@/components/ui/shadcn-io/flip-words";

export default function About() {
  const words = ["Frontend Developer", "Designer", "Learner"];
  
  return (
    <div className="flex justify-center mt-6 sm:mt-8 md:mt-12 px-2 sm:px-4 h-screen">
      <div>
        <p className="text-lg sm:text-xl md:text-2xl serif font-semibold text-center mb-2">
          About
        </p>

        <p className="text-sm py-4">
          I'm a passionate
          <FlipWords
            words={words}
            duration={3000}
            letterDelay={0.05}
            wordDelay={0.3}
            className="text-amber-600 font-semibold"
          />
          driven by curiosity, clarity, and a genuine love for thoughtful
          creation.
        </p>

        <p className="text-sm py-2">
          I love creating responsive, user-friendly web applications. With
          experience in full-stack development, I have worked on projects like
          Dhairya, an all-in-one gym management service, and Elevance, a
          platform that helps users find jobs based on their resumes.
        </p>

        <p className="text-sm py-2">
          I specialize in modern JavaScript frameworks like React and Node.js,
          and I&apos;m adept at building applications that are both visually
          appealing and performant. My approach to development emphasizes clean,
          maintainable code, scalability, and optimizing performance for
          seamless user experiences.
        </p>

        <p className="text-sm pt-2">
          In addition to development, I enjoy contributing to open-source
          projects, mentoring junior developers, and continuously learning new
          technologies. Whether it&apos;s solving complex UI challenges or
          improving backend functionality, I&apos;m always striving to push the
          boundaries of what&apos;s possible in web development.
        </p>

        <div className="mt-10 space-y-6 text-sm text-gray-800">
          <div>
            <p className="font-semibold mb-2">Resume</p>
            <a
              href="./Kshitij_Akarsh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--text-link)" }}
            >
              View / Download
            </a>
          </div>

          <div>
            <p className="font-semibold mb-2">Education</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm">
              <div className="md:w-1/2">
                <p>Noida Institute of Engineering and Technology</p>
                <p>B.Tech, Computer Science (Data Science)</p>
              </div>
              <div className="md:text-right mt-2 md:mt-0 text-xs text-gray-600 md:w-1/2">
                <p>Expected July 2027</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Socials</p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/kshitijakarsh"
                target="_blank"
                className="hover:underline"
                style={{ color: "var(--text-link)" }}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kshitijakarsh"
                target="_blank"
                className="hover:underline"
                style={{ color: "var(--text-link)" }}
              >
                LinkedIn
              </a>
              <a
                href="mailto:kshitijakarsh@gmail.com"
                className="hover:underline"
                style={{ color: "var(--text-link)" }}
              >
                Email
              </a>
              <a
                href="https://x.com/kshitijakarsh"
                className="hover:underline"
                style={{ color: "var(--text-link)" }}
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
