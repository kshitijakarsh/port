"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Users, BookOpen } from "lucide-react";
import Button from "../Button";
import Tooltip from "../Tooltip";
import Image from "next/image";

interface GitHubData {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
}

export default function About() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/kshitijakarsh")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setGithubData({
          avatar_url: data.avatar_url || "/profile.jpg",
          name: data.name || data.login || "Kshitij Akarsh",
          bio: data.bio || "Full Stack Developer building modern web applications.",
          public_repos: data.public_repos || 0,
          followers: data.followers || 0,
        });
      })
      .catch((err) => {
        console.error("Error fetching GitHub data:", err);
      });
  }, []);

  return (
    <div className="px-4">
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        Hey, I&apos;m Kshitij, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Tech stack isn&apos;t my concern, I&apos;m flexible with whatever the project needs, though I prefer modern frameworks and tools. I&apos;m always open for new opportunities to learn and grow.
      </p>

      <div className="flex gap-2.5 mt-4">
        <Tooltip
          side="bottom"
          content={
            <div className="w-64 bg-white dark:bg-zinc-950 border border-border/50 rounded-xl overflow-hidden shadow-xl">
              <div className="h-16 bg-[#0077b5] w-full relative">
              </div>
              <div className="px-4 pb-4 -mt-8 relative">
                <div className="w-16 h-16 rounded-full border-4 border-white dark:border-zinc-950 overflow-hidden bg-muted relative">
                  <Image src="/profile.jpg" alt="Kshitij" fill className="object-cover" />
                </div>
                <div className="mt-2">
                  <h3 className="font-bold text-sm text-foreground">Kshitij Akarsh</h3>
                  <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                </div>
                <div className="mt-3 flex gap-4 text-[10px] text-muted-foreground font-medium">
                  <span>500+ <span className="text-foreground/80 font-normal">connections</span></span>
                  <span>1.2k <span className="text-foreground/80 font-normal">followers</span></span>
                </div>
                <div className="mt-3 pt-3 border-t border-border/50 text-[10px] text-blue-500 font-medium">
                  View full profile
                </div>
              </div>
            </div>
          }
        >
          <Button variant="social" href="https://linkedin.com/in/kshitijakarsh">
            <Linkedin size={12} />
            LinkedIn
          </Button>
        </Tooltip>

        {/* GitHub Profile Card */}
        <Tooltip
          side="bottom"
          content={
            <div className="w-64 bg-white dark:bg-zinc-950 border border-border/50 rounded-xl overflow-hidden shadow-xl">
              <div className="h-16 bg-[#24292e] w-full relative flex items-center justify-end px-4">
                <Github className="text-white/20 w-12 h-12 -mb-4" />
              </div>
              <div className="px-4 pb-4 -mt-8 relative">
                <div className="w-16 h-16 rounded-full border-4 border-white dark:border-zinc-950 overflow-hidden bg-muted relative">
                  <Image
                    src={githubData?.avatar_url || "/profile.jpg"}
                    alt="GitHub Profile"
                    fill
                    className="object-cover transition-opacity duration-300"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="font-bold text-sm text-foreground">{githubData?.name || "kshitijakarsh"}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{githubData?.bio || "Building things for the web."}</p>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                  <div className="flex items-center gap-1.5 text-foreground">
                    <BookOpen size={12} className="text-muted-foreground" />
                    <span>{githubData?.public_repos ?? "..."} <span className="text-muted-foreground">Repositories</span></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-foreground">
                    <Users size={12} className="text-muted-foreground" />
                    <span>{githubData?.followers ?? "..."} <span className="text-muted-foreground">Followers</span></span>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <Button variant="social" href="https://github.com/kshitijakarsh">
            <Github size={12} />
            GitHub
          </Button>
        </Tooltip>

        {/* X Profile Card */}
        <Tooltip
          side="bottom"
          content={
            <div className="w-64 bg-white dark:bg-zinc-950 border border-border/50 rounded-xl overflow-hidden shadow-xl">
              <div className="h-16 bg-black w-full relative flex items-center justify-end px-4">
                <Twitter className="text-white/20 w-10 h-10" />
              </div>
              <div className="px-4 pb-4 -mt-8 relative">
                <div className="w-16 h-16 rounded-full border-4 border-white dark:border-zinc-950 overflow-hidden bg-muted relative">
                  <Image src="/profile.jpg" alt="Kshitij" fill className="object-cover" />
                </div>
                <div className="mt-2">
                  <h3 className="font-bold text-sm text-foreground">Kshitij</h3>
                  <p className="text-xs text-muted-foreground">@kshitijakarsh</p>
                </div>
                <div className="mt-3 flex gap-4 text-[10px] text-foreground font-bold">
                  <span>140 <span className="text-muted-foreground font-normal">Following</span></span>
                  <span>42 <span className="text-muted-foreground font-normal">Followers</span></span>
                </div>
              </div>
            </div>
          }
        >
          <Button variant="social" href="https://x.com/kshitijakarsh">
            <Twitter size={12} />
            X
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
