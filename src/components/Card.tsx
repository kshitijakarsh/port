"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";

type CardProps = Omit<Project, "id">;

export default function Card({
  image,
  title,
  description,
  techUsed,
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
      className="relative max-w-xs w-full h-96 p-3 space-y-3 font-marvel transition-all duration-300"
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
      {/* IMAGE */}
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
          className="rounded-md object-cover w-full h-[180px]"
        />
      </div>

      {/* TITLE + BUTTONS */}
      <div className="flex items-center justify-between px-2">
        <h1 className="font-semibold text-lg text-foreground tracking-wide">
          {title}
        </h1>

        <div className="flex gap-1.5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-0.5 text-xs font-light"
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
            className="px-2.5 py-0.5 text-xs font-light"
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

      {/* DESCRIPTION */}
      <p className="text-xs text-foreground leading-relaxed px-2 line-clamp-3">
        {description}
      </p>

      {/* STACK TAGS */}
      <div className="absolute bottom-4 left-0 right-0 flex flex-wrap gap-1.5 px-2">
        {techUsed?.map((tech) => (
          <span
            key={tech.id}
            className="px-2.5 py-0.5 text-xs font-light"
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
    </div>
  );
}
