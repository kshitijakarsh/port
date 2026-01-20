import Image from "next/image";

export const CoverSection = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <Image
        src="https://cdn.jsdelivr.net/gh/kshitijakarsh/port@assets/public/cover.jpg"
        alt="cover image"
        fill
        className="object-cover"
        preload
      />
      <div className="absolute -bottom-5 left-5">
        <Image
          src="/codesblue.svg"
          alt="logo"
          width={128}
          height={128}
          className="relative z-10"
        />
      </div>
    </div>
  );
};
