import { Link } from "react-router-dom";
import { Calendar, ChevronRight, Clock } from "lucide-react";

// Your original blog posts data from Blog.tsx
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "A beginner’s guide to understanding the Next.js framework.",
    date: "May 5, 2025",
    readTime: "6 min read",
    tags: ["Next.js", "React", "Web Development"],
  },
  // More blog posts can be added here
];

const BlogSection = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 md:mb-14 text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-heading mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mb-8">
            Stay updated with my latest blog posts on web development, design,
            and programming best practices.
          </p>
        </div>

        <div className="bg-white dark:bg-transparent dark:bg-opacity-30 dark:bg-gradient-to-r dark:from-black dark:to-gray-900 dark:backdrop-blur-md rounded-sm p-4 md:p-6">

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="relative pl-6">
                <div className="absolute -left-1 top-1.5 h-3 w-3 rounded-full bg-gray-700 dark:bg-gray-500"></div>
                <div className="mb-1 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                  <span className="mx-2">•</span>
                  <Clock size={14} />
                  {post.readTime}
                </div>

                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {post.title}
                </h4>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {post.excerpt}
                </p>

                <div className="space-y-1 mb-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-1 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></div>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/blogs/${post.id}`} // Linking to the full post
                  className="flex items-center text-sm font-medium text-orange-400 dark:text-orange-600 hover:text-orange-600 dark:hover:text-orange-300"
                >
                  Read Full Article
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
