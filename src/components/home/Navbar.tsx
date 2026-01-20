"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 py-2 border border-border outline-1 outline-border outline-offset-2 rounded-sm">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-foreground font-serif">Kshitij Akarsh</h1>
        <div className="bg-muted flex gap-4 px-2 py-1 rounded-sm outline-1 outline-border outline-offset-2 items-center">
          <button
            className="font-sans text-xs bg-background p-1 rounded-sm shadow-sm border border-border/50"
            onClick={() => changeTheme()}
          >
            {theme === "light" ? <Moon size={12} /> : <Sun size={12} />}
          </button>
          <button className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">
            About
          </button>
          <button className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </button>
          <button className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">
            Design
          </button>
        </div>
      </div>
    </nav>
  );
}
