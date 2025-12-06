import Image from "next/image";

export default function Skills() {
  return (
    <div className="p-4">
      <h2 className="text-lg sm:text-xl serif font-semibold mb-4">Skills</h2>

      <div
        className="
    grid 
    grid-cols-2 
    sm:grid-cols-3 
    md:grid-cols-4 
    lg:grid-cols-5
    gap-4
  "
      >
        {/* LANGUAGES */}
        <SkillCard
          icon="https://www.svgrepo.com/show/373703/js.svg"
          name="JavaScript"
        />
        <SkillCard
          icon="https://www.svgrepo.com/show/374146/typescript-official.svg"
          name="TypeScript"
        />
        <SkillCard
          icon="https://www.svgrepo.com/show/452091/python.svg"
          name="Python"
        />

        <SkillCard
          icon="https://www.svgrepo.com/show/452210/git.svg"
          name="Git"
        />
        <SkillCard
          icon="https://www.svgrepo.com/show/475654/github-color.svg"
          name="GitHub"
        />
        <SkillCard
          icon="https://www.svgrepo.com/show/374171/vscode.svg"
          name="VS Code"
        />
        <SkillCard
          icon="https://www.svgrepo.com/show/354202/postman-icon.svg"
          name="Postman"
        />
        <SkillCard
          icon="https://www.svgrepo.com/show/452202/figma.svg"
          name="Figma"
        />

        {/* FRONTEND FRAMEWORKS */}
        <SkillCard
          icon="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
          name="React"
        />
        <SkillCard
          icon="https://www.svgrepo.com/show/374118/tailwind.svg"
          name="Tailwind"
        />

        {/* BACKEND */}
        <SkillCard
          icon="https://www.svgrepo.com/show/354119/nodejs-icon.svg"
          name="NodeJs"
        />

        {/* DATABASE */}
        <SkillCard
          icon="https://www.svgrepo.com/show/331488/mongodb.svg"
          name="MongoDB"
        />
        {/* <SkillCard
          icon="https://www.svgrepo.com/show/394552/supabase.svg"
          name="Supabase"
        /> */}

        {/* CLOUD & DEVOPS */}
        {/* <SkillCard
          icon="https://www.svgrepo.com/show/353707/cloudinary.svg"
          name="Cloudinary"
        /> */}
        <SkillCard
          icon="https://www.svgrepo.com/show/378475/vercel-fill.svg"
          name="Vercel"
        />
        {/* <SkillCard
          icon="https://www.svgrepo.com/show/361661/render.svg"
          name="Render"
        /> */}
      </div>
    </div>
  );
}

export interface SkillProps {
  icon: string | React.ReactNode;
  name?: string;
}

export function SkillCard({ icon, name }: SkillProps) {
  return (
    <div
      className="
      flex items-center gap-3 h-12
      rounded-lg px-4 py-2
      bg-linear-to-r from-amber-50 via-orange-50 to-orange-100
      border border-orange-200
      transition-all duration-300
      cursor-pointer
      grayscale hover:grayscale-0
    "
    >
      <div className="shrink-0">
        {typeof icon === "string" ? (
          <Image src={icon} alt={name || "Skill Icon"} width={28} height={28} />
        ) : (
          <div className="transition-all duration-300">{icon}</div>
        )}
      </div>

      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
}
