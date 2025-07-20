"use client";

import Image from "next/image";
import React from "react";

interface Tech {
  stack: string;
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  techUsed: readonly Tech[];
  githubUrl: string;
  liveUrl: string;
  imageAlt?: string;
}

export default function Card({
  image,
  title,
  description,
  techUsed,
  githubUrl,
  liveUrl,
  imageAlt = "Project preview image",
}: CardProps) {
  return (
    <div
      className="max-w-xs w-full h-auto p-3 space-y-3 bg-[#F8F8F8] font-marvel"
      style={{
        border: "var(--thin-border)",
        borderRadius: "var(--outer-radius)",
      }}
    >
      <div style={{ borderRadius: "var(--inner-radius)" }}>
        <Image
          src={image}
          alt={imageAlt}
          width={360}
          height={225}
          className="rounded-md object-cover w-full"
        />
      </div>

      <div className="flex items-center justify-between px-2">
        <h1 className="font-semibold text-lg text-foreground tracking-wide">
          {title}
        </h1>

        <div className="flex gap-1.5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-0.5 text-xs font-light text-foreground bg-white"
            style={{
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
            className="px-2.5 py-0.5 text-xs font-light text-foreground bg-white"
            style={{
              borderRadius: "var(--outer-radius)",
              border: "var(--thin-border)",
            }}
          >
            Live
          </a>
        </div>
      </div>

      <p className="text-xs text-foreground leading-relaxed px-2">{description}</p>

      <div className="flex flex-wrap gap-1.5 px-2">
        {techUsed?.map((tech) => (
          <span
            key={tech.stack}
            className="px-2.5 py-0.5 text-xs font-light text-foreground bg-white"
            style={{
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
