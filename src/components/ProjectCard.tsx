import { Project } from "@/types";
import Image from "next/image";

type CardProps = Omit<Project, "id">;

export default function ProjectCard(props: CardProps) {
  return (
    <div className="group flex flex-col gap-4 bg-transparent transition-all duration-300 hover:shadow-sm">
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
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-serif leading-tight">
            {props.title}
          </h3>
          <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
