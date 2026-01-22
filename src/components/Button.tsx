import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  text?: string;
  children?: React.ReactNode;
  variant?: "default" | "social";
  href?: string;
  className?: string;
  onClick?: () => void;
};

const customStyles: Record<string, string> = {
  "download resume": "outline outline-offset-2 outline-amber-400",
  "show calendar": "border-1 border-amber-400",
  "hide calendar": "border-1 border-amber-400",
};

export default function Button({ text, children, variant = "default", href, className = "", onClick }: ButtonProps) {
  const label = text || (typeof children === "string" ? children : "");
  const key = label.toLowerCase();

  const socialStyles =
    "flex justify-center items-center gap-2 font-sans text-xs bg-muted text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-sm outline-1 outline-border outline-offset-2";

  const defaultStyles =
    "inline text-xs px-2 py-1 shadow-[inset_0_-2px_4px_rgba(255,165,0,0.5)] rounded-md serif tracking-wide hover:shadow-[inset_0_0px_4px_rgba(255,165,0,0.5)]";

  const variantStyles = variant === "social" ? socialStyles : defaultStyles;
  const computedStyles = customStyles[key] || "";

  const content = children || text;

  const isDownload = key === "download resume";
  const isLink = !!href || isDownload;

  if (isLink) {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");

    if (isInternal && href) {
      return (
        <Link
          href={href}
          className={`${variantStyles} ${computedStyles} ${className}`}
          onClick={onClick}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        download={isDownload && !href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className={`${variantStyles} ${computedStyles} ${className}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${variantStyles} ${computedStyles} ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
