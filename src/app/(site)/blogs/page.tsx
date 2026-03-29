import Link from 'next/link';
import blog1 from '../../../../blogs/blog1.json';
import Button from '@/components/Button';
import { MoveLeft } from 'lucide-react';

const blogs = [blog1];

export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 min-h-screen px-4">
      <div className="px-4">
        <Button variant="social" href="/" className="w-20 rounded-full">
          <MoveLeft size={14} />
          Back
        </Button>
      </div>

      <div className="px-4">
        <h1 className="font-serif text-3xl mb-2">My Blogs</h1>
        <p className="text-muted-foreground text-sm max-w-xl">
          Thoughts on development, design, and everything in between.
        </p>
      </div>

      <section className="w-full py-4">
        <div className="flex flex-col">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="flex justify-between items-center py-6 border-b border-muted transition-colors duration-200 cursor-pointer group hover:bg-muted/30 px-4 rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-serif group-hover:text-foreground transition-colors">
                  {blog.title}
                </p>
                <div className="flex gap-2">
                  {blog.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground bg-muted outline-1 outline-border outline-offset-1 px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{blog.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
