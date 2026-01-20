import About from "@/components/sections/About";
import { CoverSection } from "@/components/sections/Cover";
import Projects from "@/components/sections/Projects";
import RecentBlog from "@/components/sections/RecentBlogs";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";
import Github from "@/components/sections/Github";
import Button from "@/components/Button";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <div className="flex w-full bg-background min-h-screen text-foreground">
      <div className="hidden sm:block w-px bg-border inset-shadow" />

      <div className="flex-1 w-full">
        <div className="flex flex-col py-10 sm:flex-row justify-between sm:items-center gap-4 w-full px-0.5">
          {/* <GradientText
            text="Kshitij Akarsh"
            gradient="linear-gradient(90deg, #fcd34d 0%, #f59e0b 50%, #f97316 100%)"
            className="serif text-3xl sm:text-4xl text-center mt-10 mb-2 sm:mb-10"
          />

          <div className="hidden sm:flex justify-end">
            <Button text="Download Resume" />
          </div> */}

          <Navbar />
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
      <div className="hidden sm:block w-px bg-border inset-shadow" />
    </div>
  );
}
