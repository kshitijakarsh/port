export default function About() {
  return (
    <div className="flex justify-center px-4">
      <div className="max-w-3xl">
        <p className="text-xl serif font-semibold py-4 px-4 text-center mt-10">
          About
        </p>

        <p className="text-sm py-4">
          I'm a passionate frontend developer with expertise in creating
          responsive, user-friendly web applications. With experience in
          full-stack development, I have worked on projects like Dhairya, an
          all-in-one gym management service, and Elevance, a platform that helps
          users find jobs based on their resumes.
        </p>

        <p className="text-sm py-4">
          I specialize in modern JavaScript frameworks like React and Node.js,
          and I'm adept at building applications that are both visually
          appealing and performant. My approach to development emphasizes clean,
          maintainable code, scalability, and optimizing performance for
          seamless user experiences.
        </p>

        <p className="text-sm py-4">
          In addition to development, I enjoy contributing to open-source
          projects, mentoring junior developers, and continuously learning new
          technologies. Whether it's solving complex UI challenges or improving
          backend functionality, I’m always striving to push the boundaries of
          what’s possible in web development.
        </p>

        <div className="mt-10 space-y-6 text-sm text-gray-800">
          <div>
            <p className="font-semibold mb-2">Resume</p>
            <a
              href="./Kshitij_Akarsh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
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
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kshitijakarsh"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="mailto:kshitijakarsh@gmail.com"
                className="text-blue-500 hover:underline"
              >
                Email
              </a>
              <a
                href="https://x.com/kshitijakarsh"
                className="text-blue-500 hover:underline"
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