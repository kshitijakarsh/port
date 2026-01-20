"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../Button";

export const CoverSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="relative w-full h-64 bg-muted animate-pulse" />;
  }

  return (
    <div className="relative w-full h-64 flex items-center justify-center mb-8 sm:mb-12">
      <Image
        src={
          resolvedTheme === "dark"
            ? "/cover_dark.png"
            : "https://cdn.jsdelivr.net/gh/kshitijakarsh/port@assets/public/cover.jpg"
        }
        alt="cover image"
        fill
        className="object-cover"
        preload
      />

      <div className="absolute -bottom-16 left-6 sm:left-10 h-32 w-32 rounded-2xl border-4 border-muted shadow-xl overflow-hidden">
        <Image
          src={
            resolvedTheme === "dark"
              ? "/profile.jpg"
              : "/profile_light.jpg"
          }
          alt="profile picture"
          fill
          className="object-cover"
          preload
        />
      </div>
    </div>
  );
};
