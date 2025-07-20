import VideoCard from "@/components/VideoCard";

export default function DesignShowcase() {
  const designVideos = [
    {
      videoSrc: "./des1.mp4",
      title: "A Music Player",
      description:
        "A minimal music player app design for phones, featuring album art, playback controls, and smooth animations.",
      toolsUsed: ["Figma"],
    },
    {
      videoSrc: "./des2.mp4",
      title: "Landing Page for a Domain Registry",
      description:
        "A sleek landing page design showcasing domain search, pricing, and extensions with a modern, intuitive layout.",
      toolsUsed: ["Figma"],
    },
  ];

  return (
    <div className="flex justify-center mt-12">
      <div className="flex flex-col gap-6 max-w-3xl w-full">
        <p className="text-xl serif font-semibold text-center">
          Design Showcase
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          {designVideos.map((video, index) => (
            <VideoCard
              key={index}
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
