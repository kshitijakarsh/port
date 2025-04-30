import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { useState, useRef, ReactElement } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  id,
  title,
  description,
  imageSrc,
  tags,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps): ReactElement {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col overflow-hidden rounded-lg
        transition-all duration-300 hover:shadow-xl 
        ${featured ? "md:col-span-2" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`absolute inset-0 rounded-lg ${isHovering ? 'animate-border-beam' : 'border border-gray-200 dark:border-gray-800'} z-0`} />
      
      <div className="relative flex flex-col h-full z-10 m-0.5 rounded-lg bg-white dark:bg-gray-900 overflow-hidden">
        {isHovering && (
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none z-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, 
                var(--gradient-color), transparent)`,
            }}
          />
        )}
        
        <div className="w-full relative pt-[56.25%]">
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5 flex flex-col justify-between flex-1 relative z-10">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-2 font-heading text-gray-900 dark:text-white transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <a
              href={`/projects/${id}`}
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 flex items-center gap-1 group"
            >
              View details
              <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label="GitHub repository"
                >
                  <Github size={18} />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label="Live preview"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes border-beam {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-border-beam {
            background: linear-gradient(
              90deg, 
              #f97316 0%, 
              #ec4899 25%, 
              #f59e0b 50%, 
              #ec4899 75%, 
              #f97316 100%
            );
            background-size: 200% 200%;
            animation: border-beam 3s linear infinite;
          }
          
          :root {
            --gradient-color: rgba(249, 115, 22, 0.6);
          }

          .dark {
            --gradient-color: rgba(249, 115, 22, 0.5);
          }
        `}
      </style>
    </div>
  );
}