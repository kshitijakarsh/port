"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

type CardProps = Omit<Project, "id">;

export default function Card({
  image,
  title,
  description,
  githubUrl,
  liveUrl,
  backgroundColor,
  imageAlt = "Project preview image",
}: CardProps) {
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
    <div
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm h-56 sm:h-80 p-2 sm:p-3 space-y-2 sm:space-y-3 font-marvel transition-all duration-300 "
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
          alt={imageAlt}
          width={360}
          height={225}
          className="rounded-md object-cover w-full h-32 sm:h-40 md:h-44"
        />
      </div>

      <div className="flex items-center justify-between px-1 sm:px-2 gap-2">
        <h1 className="font-semibold text-sm sm:text-base md:text-lg text-foreground tracking-wide truncate">
          {title}
        </h1>

        <div className="flex gap-1 sm:gap-1.5 flex-shrink-0">
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

      <p className="text-[10px] sm:text-xs text-foreground leading-relaxed px-1 sm:px-2 line-clamp-2 sm:line-clamp-3">
        {description}
      </p>

      {/* <div className="px-1 sm:px-2">
        <ProjectCard/>
      </div> */}
    </div>
  );
}
