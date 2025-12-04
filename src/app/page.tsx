import About from "@/sections/About";
import { CoverSection } from "@/sections/Cover";
import Projects from "@/sections/Projects";
import RecentBlog from "@/sections/RecentBlogs";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";
import Github from "@/sections/Github";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="hidden sm:block w-[1px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 inset-shadow" />

      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 w-full px-4 sm:px-8 md:px-12 lg:px-16">
          <GradientText
            text="Kshitij Akarsh"
            gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
            className="serif text-3xl sm:text-4xl text-center mt-10 mb-2 sm:mb-10"
          />

          <div className="hidden sm:flex justify-end">
            <Button text="Download Resume" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-6 w-full max-w-4xl">
            <CoverSection />
            <About />
            <Projects />
            <RecentBlog />
            <Github />
          </div>
        </div>
      </div>
      <div className="hidden sm:block w-[1px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 inset-shadow" />
    </div>
  );
}
