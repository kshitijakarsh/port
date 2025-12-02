import VideoCard from "@/components/VideoCard";
import { getAllDesigns } from "@/data/designs";

export default function DesignShowcase() {
  const designVideos = getAllDesigns();

  return (
    <div className="flex flex-col gap-6 mt-12 px-2 sm:px-4">
      <p className="text-lg sm:text-xl md:text-2xl serif font-semibold text-center">Design Showcase</p>

      <div className="flex justify-center flex-wrap gap-4 items-start">
        {designVideos.map((video) => (
          <VideoCard
            key={video.id}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
            toolsUsed={video.toolsUsed}
            videoType={video.videoType}
          />
        ))}
      </div>
    </div>
  );
}
