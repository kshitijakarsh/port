"use client";

import React from "react";

interface VideoCardProps {
  videoSrc: string;
  title: string;
  description: string;
  toolsUsed: string[];
}

export default function VideoCard({
  videoSrc,
  title,
  description,
  toolsUsed,
}: VideoCardProps) {
  return (
    <div
      className="max-w-xs w-full h-auto p-3 space-y-3 bg-[#F8F8F8] font-marvel"
      style={{
        border: "var(--thin-border)",
        borderRadius: "var(--outer-radius)",
      }}
    >
      <div style={{ borderRadius: "var(--inner-radius)" }}>
        <video
          controls
          className="rounded-md object-cover w-full"
          width={360}
          height={225}
          autoPlay
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="px-2">
        <h1 className="font-semibold text-lg text-foreground tracking-wide">
          {title}
        </h1>
      </div>

      <p className="text-xs text-foreground leading-relaxed px-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 px-2">
        {toolsUsed.map((tool) => (
          <span
            key={tool}
            className="px-2.5 py-0.5 text-xs font-light text-foreground bg-white"
            style={{
              borderRadius: "var(--outer-radius)",
              border: "var(--thin-border)",
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
