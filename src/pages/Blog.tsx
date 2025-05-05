import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  ChevronRight,
  PenTool,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const Blog = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar show={showNavbar} />
      <main className="min-h-screen py-12 md:py-24 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <section className="py-12 dark:border-gray-800">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <PenTool size={20} className="text-gray-700 dark:text-gray-300" />
                <h2 className="text-2xl font-bold">Blog Posts</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                My thoughts, tutorials, and insights on web development
              </p>
            </div>

            <div className="bg-white dark:bg-transparent dark:bg-opacity-30 dark:bg-gradient-to-r dark:from-black dark:to-gray-900 dark:backdrop-blur-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              {blogPosts.length > 0 ? (
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

                      <h4 className="text-lg font-semibold">{post.title}</h4>

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
                        to={`/blogs/${post.id}`}
                        className="flex items-center text-sm font-medium text-orange-400 dark:text-orange-600 hover:text-orange-600 dark:hover:text-orange-300"
                      >
                        Read Full Article
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center">
                  <h3 className="text-xl mb-2 text-gray-800 dark:text-gray-200">
                    No Blog Posts Yet
                  </h3>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
