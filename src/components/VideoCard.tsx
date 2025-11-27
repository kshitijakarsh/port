"use client";

import React from "react";
import { Design } from "@/types";

type VideoCardProps = Omit<Design, "id">;

export default function VideoCard({
  videoSrc,
  title,
  description,
  toolsUsed,
}: VideoCardProps) {
  return (
    <div
      className="max-w-xs w-full h-auto p-3 space-y-3 font-marvel"
      style={{
        backgroundColor: "var(--bg-card)",
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
            className="px-2.5 py-0.5 text-xs font-light"
            style={{
              color: "var(--text-primary)",
              backgroundColor: "var(--bg-button)",
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
