import { Project } from "@/types";
import Image from "next/image";
import Button from "./Button";
import { MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import MotionButton from "./MotionButton";

export default function ProjectCard(props: Project) {
  return (
    <div className="group flex flex-col gap-4 bg-transparent transition-all duration-300">
      <div className="w-full overflow-hidden">
        <Image
          src={props.image}
          alt={props.imageAlt || props.title}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      <div className="flex flex-col gap-3 px-1">
        <div className="flex flex-col gap-1 px-2">
          <div className="flex justify-between">
            <h3 className="font-serif text-xl leading-tight">{props.title}</h3>

            {/* <Button variant="social" href={`/projects/${props.id}`}>
              <MoveUpRight size={10} />
            </Button> */}

            <MotionButton />
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
