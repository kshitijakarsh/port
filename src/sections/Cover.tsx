import Image from "next/image";

export const CoverSection = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <Image
        rel="preload"
        src="/cover.jpg"
        alt="cover image"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};
