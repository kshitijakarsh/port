import { Github, Linkedin, Twitter } from "lucide-react";
import Button from "../Button";

export default function About() {
  return (
    <div className="px-4">
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        Hey, I&apos;m Kshitij, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Tech stack isn&apos;t my concern, I&apos;m flexible with whatever the project needs, though I prefer modern frameworks and tools. I&apos;m always open for new opportunities to learn and grow.
      </p>

      <div className="flex gap-2.5 mt-4">
        <Button variant="social" href="https://linkedin.com/in/kshitijakarsh">
          <Linkedin size={12} />
          LinkedIn
        </Button>

        <Button variant="social" href="https://github.com/kshitijakarsh">
          <Github size={12} />
          GitHub
        </Button>

        <Button variant="social" href="https://x.com/kshitijakarsh">
          <Twitter size={12} />
          X
        </Button>
      </div>
    </div>
  );
}
