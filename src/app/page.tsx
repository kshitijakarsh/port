import About from "@/sections/About";
import Projects from "@/sections/Projects";
import RecentBlog from "@/sections/RecentBlogs";

export default function Home() {
  return (
    <div>
      <p className="serif text-4xl text-center mt-10 mb-10">Kshitij Akarsh.</p>
      <div className="flex justify-center px-4">
        <div className="mt-16">
        </div>
        <div className="flex flex-col gap-12 max-w-3xl w-full">
          <About />
          <Projects />
          <RecentBlog />
        </div>
      </div>
    </div>
  );
}
