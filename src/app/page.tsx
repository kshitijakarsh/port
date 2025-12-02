import About from "@/sections/About";
import { CoverSection } from "@/sections/Cover";
import Projects from "@/sections/Projects";
import RecentBlog from "@/sections/RecentBlogs";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[1px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 inset-shadow " />
      <div className="flex-1 ">
        <div className="flex justify-between items-center gap-6 w-full px-4 sm:px-8 md:px-12 lg:px-16 ">
          <GradientText
            text="Kshitij Akarsh"
            gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
            className="serif text-4xl text-center mt-10 mb-10"
          />
          <Button text="Download Resume" />
        </div>

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
