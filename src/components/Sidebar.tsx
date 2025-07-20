"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Info, BookOpen, PencilRuler } from "lucide-react";

const icons = [Home, Info, BookOpen, PencilRuler];
const routes = ["/", "/about", "/projects", "/designs"];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const mobileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorPos, setIndicatorPos] = useState<number>(0);

  const activeIndex = routes.findIndex((route) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route)
  );

  useEffect(() => {
    if (mobileRefs.current[activeIndex]) {
      const el = mobileRefs.current[activeIndex];
      const box = el?.getBoundingClientRect();
      const parentBox = el?.parentElement?.getBoundingClientRect();
      if (box && parentBox) {
        const left = box.left - parentBox.left;
        setIndicatorPos(left + 15);
      }
    }
  }, [activeIndex, pathname]);

  const iconSpacing = 48;
  const baseOffset = 16;

  return (
    <>
      <div className="hidden md:flex sticky top-28 flex-col items-center py-4 px-2 bg-white rounded-3xl shadow-xl w-14 h-[220px] min-w-[56px]">
        {activeIndex !== -1 && (
          <div
            className="absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-b from-[#F9F3F3]/40 to-[#FBFAFA]/10 transition-all duration-300 ease-in-out"
            style={{
              top: `${activeIndex * iconSpacing + baseOffset}px`,
              boxShadow: `
                2px 2px 4px rgba(0, 0, 0, 0.2),
                -2px -2px 4px rgba(255, 255, 255, 0.3),
                0px -3px 5px rgba(0, 0, 0, 0.15)
              `,
            }}
          />
        )}
        <div className="flex flex-col gap-3 z-10">
          {icons.map((Icon, index) => (
            <button
              key={index}
              onClick={() => router.push(routes[index])}
              className={`w-9 h-9 flex items-center justify-center transition ${
                activeIndex === index ? "text-black" : "text-gray-600"
              } hover:text-black`}
              title={routes[index] === "/" ? "Home" : routes[index].slice(1)}
            >
              <Icon size={18} strokeWidth={2} />
            </button>
          ))}
        </div>
      </div>

      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center py-2 px-4 bg-white rounded-3xl shadow-xl h-14 relative">
          {activeIndex !== -1 && (
            <div
              className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-b from-[#F9F3F3]/40 to-[#FBFAFA]/10 transition-all duration-300 ease-in-out"
              style={{
                left: `${indicatorPos}px`,
                boxShadow: `
                  2px 2px 4px rgba(0, 0, 0, 0.2),
                  -2px -2px 4px rgba(255, 255, 255, 0.3),
                  0px -3px 5px rgba(0, 0, 0, 0.15)
                `,
              }}
            />
          )}
          <div className="flex gap-4 z-10">
            {icons.map((Icon, index) => (
              <button
                key={index}
                ref={(el) => {
                  mobileRefs.current[index] = el;
                }}
                onClick={() => router.push(routes[index])}
                className={`w-9 h-9 flex items-center justify-center transition ${
                  activeIndex === index ? "text-black" : "text-gray-600"
                } hover:text-black`}
                title={routes[index] === "/" ? "Home" : routes[index].slice(1)}
              >
                <Icon size={18} strokeWidth={2} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
