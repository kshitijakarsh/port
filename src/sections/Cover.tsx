import Image from "next/image";

export const CoverSection = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <Image
        src="/cover.jpg"
        alt="cover image"
        fill
        className="object-cover"
        preload
      />
    </div>
  );
};
