"use client";

import { Copy } from "lucide-react";
import { useState } from "react";
import { COPY_FEEDBACK_DURATION } from "@/constants";

export default function CodeBlock({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION);
  };

  return (
    <div
      className="relative p-4 overflow-x-auto text-sm mb-6 bg-muted text-muted-foreground rounded-md"
    >
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs px-2 py-1 rounded"
        aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
        title={copied ? "Copied!" : "Copy code"}
      >
        {copied ? "Copied!" : <Copy className="w-4 h-4" aria-hidden="true" />}
      </button>
      <pre className="whitespace-pre-wrap">
        <code>{content}</code>
      </pre>
    </div>
  );
}
