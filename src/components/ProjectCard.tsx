'use client'

import { Project } from "@/types";
import Image from "next/image";
import Button from "./Button";
import { MoveUpRight } from "lucide-react";
import { useRouter } from "next/navigation";


export default function ProjectCard(props: Project ) {
  const router = useRouter();
  return (
    <div className="group flex flex-col gap-4 bg-transparent transition-all duration-300">
      <div className="w-full overflow-hidden">
        <Image
          src={props.image}
          alt={props.imageAlt || props.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain"
        />


      </div>

      <div className="flex flex-col gap-3 px-1">
        <div className="flex flex-col gap-1 px-2">
          <div className="flex justify-between">
            <h3 className="text-xl font-serif leading-tight">
              {props.title}
            </h3>

            <Button variant="social" onClick={() => {
              router.push(`/projects/${props.id}`);
            }}><MoveUpRight size={10} /></Button>
          </div>
          <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
