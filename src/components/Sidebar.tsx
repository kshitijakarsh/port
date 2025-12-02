"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SIDEBAR_MOBILE_OFFSET,
} from "@/constants";
import { routes } from "@/data/routes";

/**
 * Sidebar Navigation Component
 *
 * Provides responsive navigation for both desktop and mobile viewports.
 * Features an animated indicator that highlights the current active route.
 *
 * Desktop: Vertical sidebar with icons, sticky positioned
 * Mobile: Horizontal bottom navigation bar with icons
 *
 * @returns Navigation sidebar with route indicators
 */
export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const mobileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorPos, setIndicatorPos] = useState<number>(0);

  const activeIndex = routes.findIndex((route) =>
    route.path === "/" ? pathname === "/" : pathname.startsWith(route.path)
  );

  useEffect(() => {
    if (mobileRefs.current[activeIndex]) {
      const el = mobileRefs.current[activeIndex];
      const box = el?.getBoundingClientRect();
      const parentBox = el?.parentElement?.getBoundingClientRect();
      if (box && parentBox) {
        const left = box.left - parentBox.left;
        setIndicatorPos(left + SIDEBAR_MOBILE_OFFSET);
      }
    }
  }, [activeIndex, pathname]);

  return (
    <>
      <nav
        className="hidden md:flex sticky top-122 flex-col items-center py-4 bg-gray-50 rounded-3xl min-w-14"
        aria-label="Main navigation"
        style={{
          boxShadow: "var(--shadow-sidebar)",
          width: "var(--sidebar-width)",
          height: "var(--sidebar-height)",
        }}
      >
        {activeIndex !== -1 && (
          <div
            className="absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-b transition-all shadow-[inset_0_-2px_4px_rgba(255,165,0,0.5)]"
            style={{
              top: `calc(${activeIndex} * var(--sidebar-icon-spacing) + var(--sidebar-base-offset))`,
              backgroundImage:
                "linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))",
              transitionDuration: "var(--transition-duration)",
              transitionTimingFunction: "var(--transition-timing)",
            }}
          />
        )}
        <div className="flex flex-col gap-3 z-10">
          {routes.map((route, index) => {
            const Icon = route.icon;
            return (
              <button
                key={route.id}
                onClick={() => router.push(route.path)}
                className="w-9 h-9 flex items-center justify-center transition hover:text-black"
                style={{
                  color:
                    activeIndex === index
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                }}
                aria-label={route.label}
                aria-current={activeIndex === index ? "page" : undefined}
                title={route.label}
              >
                <Icon size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} className="hover:scale-110"/>
              </button>
            );
          })}
        </div>
      </nav>

      <nav
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 "
        aria-label="Main navigation"
      >
        <div
          className="flex items-center py-2 px-4 bg-white rounded-3xl h-14 relative"
          style={{ boxShadow: "var(--shadow-sidebar)" }}
        >
          {activeIndex !== -1 && (
            <div
              className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full transition-all"
              style={{
                left: `${indicatorPos}px`,
                backgroundImage:
                  "linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))",
                boxShadow: "var(--shadow-sidebar-indicator)",
                transitionDuration: "var(--transition-duration)",
                transitionTimingFunction: "var(--transition-timing)",
              }}
            />
          )}
          <div className="flex gap-4 z-10">
            {routes.map((route, index) => {
              const Icon = route.icon;
              return (
                <button
                  key={route.id}
                  ref={(el) => {
                    mobileRefs.current[index] = el;
                  }}
                  onClick={() => router.push(route.path)}
                  className="w-9 h-9 flex items-center justify-center transition hover:text-black"
                  style={{
                    color:
                      activeIndex === index
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                  }}
                  aria-label={route.label}
                  aria-current={activeIndex === index ? "page" : undefined}
                  title={route.label}
                >
                  <Icon size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
