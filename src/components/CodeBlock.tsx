"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-50 p-4 rounded-md overflow-x-auto text-sm text-gray-700 mb-6">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs px-2 py-1 rounded"
      >
        {copied ? "Copied!" : <Copy className="w-4 h-4"/>}
      </button>
      <pre className="whitespace-pre-wrap">
        <code>{content}</code>
      </pre>
    </div>
  );
}
