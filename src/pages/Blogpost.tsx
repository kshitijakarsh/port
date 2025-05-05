import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogPost = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/blogs");
  };

  const post = {
    id: "1",
    title: "NextJs Starter",
    author: "Blog Author",
    date: "May 5, 2025",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    sections: [
      {
        type: "paragraph",
        content:
          'After working with React for a while, I decided to explore what the hype around Next.js was all about. I kept hearing terms like "server-side rendering," "file-based routing," and "zero-config," and figured it was time to try it out for myself.',
      },
      {
        type: "paragraph",
        content:
          "At first glance, Next.js felt familiar — it's built on top of React after all — but the developer experience is quite different. Some of its features made immediate sense, while others took a bit of digging (and breaking things) to fully understand.",
      },
      {
        type: "paragraph",
        content:
          "This post is a beginner's take on getting started with Next.js — getting started with making a small project like a login and signup page, along with how redirection works in Next.js and understanding the file structure.",
      },
      {
        type: "heading",
        level: 2,
        content: "Installation :",
      },
      {
        type: "code",
        content: "npx create-next-app@latest appname",
        language: "bash",
      },
      {
        type: "paragraph",
        content: "after running this command, a project is setup :",
      },
      {
        type: "code",
        content: `$ cd appname
$ ls
eslint.config.mjs  node_modules  postcss.config.mjs  src
next-env.d.ts      package-lock.json  public  tsconfig.json
next.config.ts      package.json       README.md`,
        language: "bash",
      },
      {
        type: "paragraph",
        content:
          'we write our code, design the pages and take care of the routing in the "src" folder.',
      },
      {
        type: "code",
        content: `src/
└── app/
    └── page.tsx
    └── layout.tsx
    └── global.css`,
        language: "plaintext",
      },
      {
        type: "inlineCode",
        content:
          'page.tsx : It\'s always the contents inside the page.tsx, that gets rendered. Here since it is inside the app folder that means it will get rendered on route ("/").',
      },
      {
        type: "inlineCode",
        content:
          "layout.tsx : This works exactly the same way as Layout.tsx / Layout.jsx does in React, to wrap all the contents and give them one consistent styling.",
      },
      {
        type: "inlineCode",
        content:
          "global.css : This works as Index.css to provide a consistent styling to all the pages.",
      },
      {
        type: "heading",
        level: 2,
        content: "Creating a New Component for the /login Route",
      },
      {
        type: "paragraph",
        content: "File Structure for the new page will look like this:",
      },
      {
        type: "code",
        content: `src/
└── app/
    └── login
        └── page.tsx
    └── page.tsx
    └── layout.tsx
    └── global.css`,
        language: "plaintext",
      },
      {
        type: "paragraph",
        content:
          "Next.js uses the App Router, which makes routing super simple. The files and folders inside the app/ directory define your routes automatically.",
      },
      {
        type: "paragraph",
        content:
          "Inside the page.tsx which is present inside the login folder we will write the contents of our login page:",
      },
      {
        type: "code",
        content: `import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Assuming login is successful, redirect to home
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;`,
        language: "typescript",
      },
      {
        type: "heading",
        level: 2,
        content: "Creating a Signup Page",
      },
      {
        type: "paragraph",
        content:
          "Now that we've got a basic login page ready, let's create the signup page. The way to do it is pretty much the same, create new folder named signup and a file page.tsx inside it.",
      },
      {
        type: "code",
        content: `src/
└── app/
    └── signup/
        └── page.tsx`,
        language: "plaintext",
      },
      {
        type: "paragraph",
        content:
          "Now since the page.tsx is ready let's write the code inside it.",
      },
      {
        type: "code",
        content: `import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;`,
        language: "typescript",
      },
      {
        type: "heading",
        level: 2,
        content: "Dynamic Routing in Next.js",
      },
      {
        type: "paragraph",
        content:
          "Now let's talk about dynamic routing. Next.js makes dynamic routing super easy with its file-based routing system.",
      },
      {
        type: "paragraph",
        content:
          "To demonstrate this, we'll create a simple dynamic route to display a user's profile page.",
      },
      {
        type: "code",
        content: `src/
 └── app/
      └── profile/
           └── [id]/
                └── page.tsx`,
        language: "plaintext",
      },
      {
        type: "paragraph",
        content:
          "Notice how we create the [id] folder, it's wrapped inside bracket [], that is how routes are made dynamic. So when you visit /profile/123, it will display contents related to that page.",
      },
      {
        type: "code",
        content: `import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query; // this grabs the dynamic id from the URL

  return (
    <div>
      <h2>User Profile</h2>
      <p>Displaying profile for user: {id}</p>
    </div>
  );
};

export default Profile;`,
        language: "typescript",
      },
      {
        type: "heading",
        level: 2,
        content: "Bringing it All Together",
      },
      {
        type: "paragraph",
        content:
          "Now we have two main features: login and signup pages, along with dynamic routing for a user profile page. Here's a quick summary of the file structure:",
      },
      {
        type: "code",
        content: `src/
 └── app/
      └── login/
           └── page.tsx
      └── signup/
           └── page.tsx
      └── profile/
           └── [id]/
                └── page.tsx
      └── page.tsx
      └── layout.tsx
      └── global.css`,
        language: "plaintext",
      },
      {
        type: "paragraph",
        content:
          "This structure allows us to handle routing and display different pages based on dynamic parameters with ease. With the power of Next.js, you can build dynamic, scalable web apps with just a few simple files !",
      },
    ],
  };

  // Component to render different section types
  const renderSection = (section, index) => {
    switch (section.type) {
      case "heading":
        const HeadingTag = `h${section.level}`;
        return (
          <HeadingTag
            key={index}
            className={`font-bold mb-6 ${
              section.level === 2 ? "text-2xl" : "text-xl"
            } text-gray-900 dark:text-white`}
          >
            {section.content}
          </HeadingTag>
        );
      case "paragraph":
        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 my-4">
            {section.content}
          </p>
        );
      case "code":
        // Split code into lines for line numbering
        const lines = section.content.split("\n");
        return (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6"
          >
            <pre className="text-gray-700 dark:text-gray-300 font-mono text-sm">
              {lines.map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  <span className="text-gray-500 dark:text-gray-400">
                    {lineIndex + 1}
                  </span>{" "}
                  {line}
                  {lineIndex < lines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </pre>
          </div>
        );
      case "inlineCode":
        // Handle paragraphs with inline code formatting
        const parts = section.content.split(/`([^`]+)`/);
        const content = parts.map((part, i) =>
          i % 2 === 0 ? (
            <span key={i}>{part}</span>
          ) : (
            <span
              key={i}
              className="font-mono bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm text-gray-900 dark:text-white"
            >
              {part}
            </span>
          )
        );

        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 my-4">
            {content}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 font-sans">
      <div
        onClick={handleGoBack}
        className="flex items-center gap-1 text-gray-500 dark:text-gray-300 mb-8 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 cursor-pointer"
      >
        <ChevronLeft size={16} />
        <span className="text-sm">Back</span>
      </div>

      <article>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex gap-2 mt-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">{post.sections.map(renderSection)}</div>
      </article>
    </div>
  );
};

export default BlogPost;
