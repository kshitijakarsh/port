import Link from 'next/link';
import blog1 from '../../../blogs/blog1.json';
import Button from '../Button';

const blogs = [blog1];

export default function RecentBlog() {
  return (
    <section className="w-full px-4 sm:px-4 py-6">
      <h1 className="font-serif text-xl pb-4">My Blogs</h1>
      <div className="flex gap-4">
        <div className="w-px bg-border my-2"></div>
        <div className="flex-1 flex flex-col gap-4">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="flex justify-between items-center py-4 border border-muted transition-colors duration-200 cursor-pointer group bg-muted/50 px-4 rounded-lg w-full"
            >
              <div className="flex flex-col gap-1">
                <p className="text-xl font-serif group-hover:text-foreground transition-colors">
                  {blog.title}
                </p>
                <div className="flex gap-2">
                  {blog.tags.slice(0, 2).map((tag: any) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground bg-muted outline-1 outline-border outline-offset-1 px-1.5 py-0.5 rounded-sm"
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
      </div>
      <div className="w-full flex justify-center pt-6">
        <Button variant="social" href="/blogs">
          See More
        </Button>
      </div>
    </section>
  );
}
