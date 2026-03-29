import Image from 'next/image';

export const CoverSection = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center mb-8 sm:mb-12">
      <Image
        src="https://cdn.jsdelivr.net/gh/kshitijakarsh/port@assets/public/cover.jpg"
        alt="cover image"
        fill
        className="object-cover dark:hidden"
        priority
      />
      <Image
        src="https://cdn.jsdelivr.net/gh/kshitijakarsh/port@assets/public/cover_dark.png"
        alt="cover image"
        fill
        className="object-cover hidden dark:block"
        priority
      />

      <div className="absolute -bottom-16 left-6 sm:left-10 h-32 w-32 rounded-2xl border-4 border-muted shadow-xl overflow-hidden bg-muted">
        <Image
          src="https://cdn.jsdelivr.net/gh/kshitijakarsh/port@assets/public/profile_light.jpg"
          alt="profile picture"
          fill
          className="object-cover dark:hidden"
          priority
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/kshitijakarsh/port@assets/public/profile.jpg"
          alt="profile picture"
          fill
          className="object-cover hidden dark:block"
          priority
        />
      </div>
    </div>
  );
};
