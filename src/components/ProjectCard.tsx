import { Project } from "@/types";
import Image from "next/image";

type CardProps = Omit<Project, "id">;

export default function ProjectCard(props: CardProps) {
  return (
    <div className="group flex flex-col gap-4 p-4 rounded-3xl bg-transparent border border-neutral-200 transition-all duration-300 hover:shadow-sm hover:border-neutral-300">
      <div className="w-full bg-neutral-100 rounded-2xl overflow-hidden">
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
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 whitespace-nowrap overflow-hidden">
          <span>{props.year}</span>
          <div className="w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
          <span>{props.field}</span>
          <div className="w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
          <span>{props.type}</span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-serif text-neutral-900 leading-tight">
            {props.title}
          </h3>
          <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
