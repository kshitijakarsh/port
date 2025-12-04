type ButtonProps = {
  text: string;
};

const customStyles: Record<string, string> = {
  "download resume": "outline outline-offset-2 outline-amber-400",
};

export default function Button({ text }: ButtonProps) {
  const key = text.toLowerCase();

  // ONLY change: remove "hidden sm:inline"
  const baseStyles =
    "inline text-xs px-2 py-1 shadow-[inset_0_-2px_4px_rgba(255,165,0,0.5)] rounded-md serif tracking-wide hover:shadow-[inset_0_0px_4px_rgba(255,165,0,0.5)]";

  const computedStyles = customStyles[key] || "";

  const isDownload = key === "download resume";

  if (isDownload) {
    return (
      <a
        href="/Kshitij_Akarsh.pdf"
        download
        className={`${baseStyles} ${computedStyles}`}
      >
        {text}
      </a>
    );
  }

  return <button className={`${baseStyles} ${computedStyles}`}>{text}</button>;
}
