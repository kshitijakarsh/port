import VideoCard from "@/components/VideoCard";
import { getAllDesigns } from "@/data/designs";

export default function DesignShowcase() {
  const designVideos = getAllDesigns();

  return (
    <div className="flex justify-center mt-12">
      <div className="flex flex-col gap-6 max-w-3xl w-full">
        <p className="text-xl serif font-semibold text-center">
          Design Showcase
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          {designVideos.map((video) => (
            <VideoCard
              key={video.id}
              videoSrc={video.videoSrc}
              title={video.title}
              description={video.description}
              toolsUsed={video.toolsUsed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
