import Link from "next/link";
import blog1 from "../../blogs/blog1.json";

const blogs = [blog1];

export default function RecentBlog() {
  return (
    <div className="rounded-xl transition-shadow duration-200 mt-4">
      <p className="text-xl serif font-semibold">My Blogs</p>
      <div className="mt-4 flex flex-col max-w-2xl">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`/blogs/${blog.id}`}
            className="flex justify-between items-center py-4 border-b border-gray-200 hover:border-gray-400 transition-colors duration-200 cursor-pointer"
          >
            <p className="text-md">{blog.title}</p>
            <p className="text-sm text-gray-600">{blog.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
