type VideoCardProps = {
  videoSrc: string;
  videoType: "mobile" | "web";
};

export default function VideoCard({ videoSrc, videoType }: VideoCardProps) {
  const aspectClass = videoType === "mobile" ? "aspect-[9/16]" : "aspect-video";

  const widthClass = videoType === "mobile" ? "max-w-xs" : "max-w-3xl";

  return (
    <article
      className={`w-full ${widthClass} flex flex-col`}
    >
      <div className={`w-full ${aspectClass} overflow-hidden`}>
        <video
          className="block w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </article>
  );
}
