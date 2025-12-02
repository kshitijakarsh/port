import { FlipWords } from "@/components/ui/shadcn-io/flip-words";

export default function About() {
  const words = ["Frontend Developer", "Designer", "Learner"];
  return (
    <div className="px-4">
      <p className="text-lg sm:text-xl serif font-semibold py-3 sm:py-4">
        About
      </p>
      <p className="text-sm py-4">
        I&apos;m a passionate{" "}
        <FlipWords
          words={words}
          duration={3000}
          letterDelay={0.05}
          wordDelay={0.3}
          className="text-amber-600 font-semibold"
        />
        with expertise in creating responsive, user-friendly web applications.
        With experience in full-stack development, I have worked on projects
        like Dhairya, an all-in-one gym management service, and Elevance, a
        platform that helps users find jobs based on their resumes.
      </p>

      <p className="text-sm py-4">
        I specialize in modern JavaScript frameworks like React and Node.js, and
        I&apos;m adept at building applications that are both visually appealing
        and performant. My approach to development emphasizes clean,
        maintainable code, scalability, and optimizing performance for seamless
        user experiences.
      </p>

      <p className="text-sm pt-4">
        In addition to development, I enjoy contributing to open-source
        projects, mentoring junior developers, and continuously learning new
        technologies. Whether it&apos;s solving complex UI challenges or
        improving backend functionality, I&apos;m always striving to push the
        boundaries of what&apos;s possible in web development.
      </p>

      <a
        href="/about"
        className="hover:underline text-sm font-medium"
        style={{ color: "var(--text-link)" }}
      >
        more
      </a>
    </div>
  );
}
