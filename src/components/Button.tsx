type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  const baseStyles =
    "text-xs outline outline-offset-2 outline-amber-400 px-2 py-1 shadow-[inset_0_-2px_4px_rgba(255,165,0,0.5)]  rounded-md serif tracking-wide hover:shadow-[inset_0_0px_4px_rgba(255,165,0,0.5)]";

  if (text.toLowerCase() === "download resume") {
    return (
      <a href="/Kshitij_Akarsh_Resume.pdf" download className={baseStyles}>
        {text}
      </a>
    );
  }

  return <button className={baseStyles}>{text}</button>;
}
