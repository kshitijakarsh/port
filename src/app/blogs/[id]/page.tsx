import { notFound } from "next/navigation";
import blog1 from "../../../../blogs/blog1.json";
import CodeBlock from "../../../components/CodeBlock";
import Sidebar from "@/components/Sidebar";

const blogs = [blog1];

export async function generateStaticParams() {
  return blogs.map((blog) => ({ id: blog.id.toString() }));
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id.toString() === params.id);

  if (!blog) return notFound();

  return (
    <div className="flex justify-center mx-auto py-6 px-4 max-w-2xl">
      <article>
        <h1 className="text-xl font-semibold py-4 text-gray-900 serif">
          {blog.title}
        </h1>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {blog.sections.map((section, index) => {
          if (section.type === "code") {
            return <CodeBlock key={index} content={section.content} />;
          }

          if (section.type === "heading") {
            return (
              <h2 key={index} className="text-xl font-medium mb-4 serif">
                {section.content}
              </h2>
            );
          }

          if (section.type === "paragraph") {
            return (
              <p
                key={index}
                className="text-sm leading-7 mb-6 whitespace-pre-line"
              >
                {section.content}
              </p>
            );
          }

          return null;
        })}
      </article>
    </div>
  );
}
