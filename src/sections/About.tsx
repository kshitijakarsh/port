export default function About() {
  return (
    <div>
      <p className="text-lg sm:text-xl serif font-semibold py-3 sm:py-4">
        About
      </p>
      <p className="text-xs sm:text-sm py-3 sm:py-4 max-w-2xl leading-relaxed sm:leading-normal">
        Tech enthusiast building innovative tools with AI and code. Passionate
        about startups, problem-solving, and creating value through software.{" "}
        <span>
          <a
            href="/about"
            className="hover:underline"
            style={{ color: "var(--text-link)" }}
          >
            more
          </a>
        </span>
      </p>
    </div>
  );
}
