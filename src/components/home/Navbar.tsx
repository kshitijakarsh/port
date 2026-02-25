"use client";

import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="relative w-full px-2 sm:px-4 md:px-4 lg:px-4 py-2 border border-border outline-1 outline-border outline-offset-2 rounded-sm">
      <div className="flex justify-between items-center">
        <h1 className="text-sm sm:text-3xl text-foreground font-serif">Kshitij Akarsh</h1>
        <div className="bg-muted flex gap-4 px-2 py-1 rounded-sm outline-1 outline-border outline-offset-2 items-center">
          <button
            className="font-sans text-xs bg-background p-1 rounded-sm shadow-sm border border-border/50"
            onClick={() => changeTheme()}
          >
            {theme === "light" ? <Moon size={12} /> : <Sun size={12} />}
          </button>
          <button className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => {
              router.push("/projects");
            }}>
            Projects
          </button>
          <button className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => {
              router.push("/designs");
            }}>
            Designs
          </button>
          <button
            className="flex gap-1 items-center justify-center font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Kshitij_Akarsh.pdf";
              link.download = "Kshitij_Akarsh_Resume.pdf";
              link.click();
            }}
          >
            <Download size={12} /> Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
