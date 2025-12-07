"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Project } from "@/types";
import Image from "next/image";
import { useState } from "react";

type CardProps = Omit<Project, "id">;

export default function ProjectCard(props: CardProps) {
  const { image, title, githubUrl, liveUrl, backgroundColor } = props;
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm h-44 sm:h-60 p-2 sm:p-3 space-y-2 sm:space-y-3 font-marvel transition-all duration-300 "
          onMouseMove={handleMove}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{
            border: "var(--thin-border)",
            borderRadius: "var(--outer-radius)",
            backgroundClip: "padding-box",
            background: hovering
              ? `radial-gradient(
              140px circle at ${coords.x}px ${coords.y}px,
              ${backgroundColor ?? "var(--bg-card)"},
              transparent 70%
            )`
              : "transparent",
          }}
        >
          <div
            style={{
              borderRadius: "var(--inner-radius)",
              overflow: "hidden",
            }}
          >
            <Image
              src={image}
              alt={title}
              width={360}
              height={225}
              className="rounded-md object-cover w-full h-32 sm:h-40 md:h-44"
            />
          </div>

          <div className="flex items-center justify-between px-1 sm:px-2 gap-2">
            <h1 className="text-sm sm:text-base md:text-lg text-foreground tracking-wide truncate">
              {title}
            </h1>

            <div className="flex gap-1 sm:gap-1.5 shrink-0">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-1.5 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-light whitespace-nowrap"
                style={{
                  color: "var(--text-primary)",
                  backgroundColor: "var(--bg-button)",
                  borderRadius: "var(--outer-radius)",
                  border: "var(--thin-border)",
                }}
              >
                GitHub
              </a>

              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-1.5 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-light whitespace-nowrap"
                style={{
                  color: "var(--text-primary)",
                  backgroundColor: "var(--bg-button)",
                  borderRadius: "var(--outer-radius)",
                  border: "var(--thin-border)",
                }}
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <div className="border border-amber-300 ">
            <Image
              src={props.image}
              alt={props.title}
              width={440}
              height={300}
              className="rounded-md object-cover w-full h-32 sm:h-40 md:h-56 my-4"
            />
          </div>
          <DialogDescription>{props.description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-2">
          {props.techUsed.map((tech) => (
            <span
              key={tech.stack}
              className="px-2 py-1 text-[10px] sm:text-xs font-light whitespace-nowrap"
              style={{
                color: "var(--text-primary)",
                backgroundColor: "var(--bg-button)",
                borderRadius: "var(--outer-radius)",
                border: "var(--thin-border)",
              }}
            >
              {tech.stack}
            </span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
