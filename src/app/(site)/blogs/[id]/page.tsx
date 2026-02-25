import { notFound } from "next/navigation";
import CodeBlock from "@/components/CodeBlock";
import blog1 from "../../../../../blogs/blog1.json";
import { MoveLeft } from "lucide-react";
import Button from "@/components/Button";

async function getBlogById(id: string) {
  const blogs = [blog1];
  return blogs.find((b) => b.id.toString() === id) || null;
}

export async function generateStaticParams() {
  const blogs = [blog1];
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) return notFound();

  return (
    <div className="flex flex-col gap-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 min-h-screen px-4 max-w-3xl mx-auto">
      <div className="px-4">
        <Button
          variant="social"
          href="/blogs"
          className="w-20 rounded-full"
        >
          <MoveLeft size={14} />
          Back
        </Button>
      </div>

      <article className="w-full px-4">
        <h1 className="text-3xl font-serif font-semibold py-4 text-foreground">
          {blog.title}
        </h1>

        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-muted-foreground bg-muted outline-1 outline-border outline-offset-1 px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {blog.sections.map((section, index) => {
            if (section.type === "code") {
              return <CodeBlock key={index} content={section.content} />;
            }

            if (section.type === "heading") {
              return (
                <h2 key={index} className="text-xl font-serif font-medium mt-4">
                  {section.content}
                </h2>
              );
            }

            if (section.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line"
                >
                  {section.content}
                </p>
              );
            }

            return null;
          })}
        </div>
      </article>
    </div>
  );
}
