import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    id: "blog1",
    title: "How to Build Scalable Web Applications",
    description:
      "Learn the best practices for building scalable, high-performance web applications that can handle millions of users.",
    link: "/blog/how-to-build-scalable-web-applications",
    date: "April 15, 2025"
  },
  {
    id: "blog2",
    title: "Mastering TypeScript for Front-End Development",
    description:
      "Dive deep into TypeScript and understand how to leverage its powerful features to improve your JavaScript development workflow.",
    link: "/blog/mastering-typescript-for-front-end-development",
    date: "March 28, 2025"
  },
  {
    id: "blog3",
    title: "Building a React Application with Node.js Backend",
    description:
      "A step-by-step guide to building a modern web application using React for the front-end and Node.js for the back-end.",
    link: "/blog/building-a-react-application-with-nodejs-backend",
    date: "March 10, 2025"
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-0 ">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 md:mb-14 text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-heading mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mb-8">
            Stay updated with my latest blog posts on web development, design, and programming best practices.
          </p>
        </div>

        <div className="bg-white dark:bg-transparent dark:bg-opacity-30 dark:bg-gradient-to-r dark:from-black dark:to-gray-900 dark:backdrop-blur-md rounded-sm p-4 md:p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-1.5">
            <Calendar size={16} className="text-gray-800 dark:text-gray-200" />
            <span>Recent Articles</span>
          </h3>
          
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="relative pl-4 md:pl-6">
                <div className="absolute -left-1 top-1.5 h-2 w-2 rounded-full bg-gray-800 dark:bg-gray-200"></div>
                {index !== blogPosts.length - 1 && (
                  <div className="absolute -left-0 top-3 bottom-0 w-px bg-gray-300 dark:bg-gray-700" style={{ height: 'calc(100% - 12px)' }}></div>
                )}
                <div className="mb-1 text-xs text-gray-500 dark:text-gray-400">{post.date}</div>
                <h4 className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">{post.title}</h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 my-2">{post.description}</p>
                <Link
                  to={post.link}
                  className="text-xs inline-flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Read More
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