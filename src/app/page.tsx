import About from "@/sections/About";
import { CoverSection } from "@/sections/Cover";
import Projects from "@/sections/Projects";
import RecentBlog from "@/sections/RecentBlogs";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-[1px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 inset-shadow " />
      <div className="flex-1">
        <p className="serif text-4xl text-center mt-10 mb-10">
          Kshitij Akarsh.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col gap-6">
            <CoverSection />
            <About />
            <Projects />
            <RecentBlog />
          </div>
        </div>
      </div>
      <div className="w-[1px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 inset-shadow" />
    </div>
  );
}
