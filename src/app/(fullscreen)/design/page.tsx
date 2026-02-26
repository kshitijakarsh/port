"use client";

import Button from "@/components/Button";
import Fin from "@/components/Fin";
import VideoCard from "@/components/VideoCard";
import { getAllDesigns } from "@/data/designs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveLeft } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function DesignPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const secondaryContainerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLHeadingElement>(null);
    const designsRef = useRef<(HTMLDivElement | null)[]>([]);
    const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
    const detailsRefs = useRef<(HTMLDivElement | null)[]>([]);

    const designs = getAllDesigns();

    const [showFin, setShowFin] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const getScrollWidth = () => containerRef.current?.scrollWidth || 0;
            const getWindowWidth = () => window.innerWidth;

            // 1. Entrance animation (Immediate)
            gsap.fromTo(headingRef.current,
                { y: 150, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
            );

            // 2. Scroll-based Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: () => `+=${(designs.length + 2) * getWindowWidth()}`, // Adjusted end distance to cover all sections including Fin
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                }
            });

            // Stage A: Heading moves from center to LEFT half
            tl.to(headingRef.current, {
                x: "-20vw",
                duration: 1.5,
                ease: "power2.inOut"
            }, 0);

            // Stage B: "scroll." revealed on the RIGHT half
            tl.fromTo(scrollRef.current,
                { y: 150, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                ">" // Wait for heading move to finish
            );

            // Move to first design slide (Wait for scroll. reveal)
            tl.to(containerRef.current, {
                x: "-100vw",
                duration: 2,
                ease: "power2.inOut"
            }, ">+0.5");

            // For each design project, perform internal Primary/Secondary sequence
            designs.forEach((design, i) => {
                const video = videoRefs.current[i];
                const details = detailsRefs.current[i];
                if (!video || !details) return;

                // Set initial scale for the "Zoomed In" effect
                gsap.set(video, { scale: 1.5 });

                // 1. Video ZOOMS OUT and moves LEFT
                tl.to(video, {
                    x: "-20vw",
                    scale: 1,
                    duration: 2,
                    ease: "power2.inOut"
                }, `>+0.5`);

                // 2. Details reveal RIGHT
                tl.fromTo(details,
                    { y: 300, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
                    ">" // Wait for video zoom out to finish
                );

                // 3. Move to next slide (Wait for user to see the state)
                tl.to(containerRef.current, {
                    x: `-${(i + 2) * 100}vw`,
                    duration: 3,
                    ease: "power2.inOut"
                }, ">+1.5");
            });

            // Stage 4: Trigger mount when Fin section is reached
            tl.call(() => setShowFin(true), [], ">");

        });

        return () => ctx.revert();
    }, [designs.length]);

    return (
        <main className="overflow-x-hidden">
            <Button
                variant="social"
                href="/"
                className="fixed top-4 left-4 z-50"
            >
                <MoveLeft size={14} />
                Back
            </Button>
            <section ref={triggerRef} className="h-screen overflow-hidden bg-background">
                <div
                    ref={containerRef}
                    className="flex h-full w-fit flex-row items-center"
                >
                    {/* Section One: The Complex Sequence */}
                    <div className="relative flex h-screen w-screen shrink-0 items-center justify-center border-r border-border">
                        {/* Heading - Center then LEFT */}
                        <h1
                            ref={headingRef}
                            className="absolute z-20 text-8xl font-bold tracking-tighter text-foreground"
                        >
                            Design.
                        </h1>

                        {/* Secondary Div - RIGHT Reveal */}
                        <div
                            ref={secondaryContainerRef}
                            style={{ left: '75%', transform: 'translateX(-50%) translateY(4%)', transformBox: 'fill-box' }}
                            className="absolute z-10 flex h-full max-w-xl flex-col justify-center px-8 text-left"
                        >
                            <h1 ref={scrollRef} className="text-xl font-bold text-foreground">scroll.</h1>
                        </div>
                    </div>

                    {/* Design Projects Sections */}
                    {designs.map((design, index) => (
                        <div
                            key={design.id}
                            ref={el => { designsRef.current[index] = el }}
                            className="relative flex h-screen w-screen shrink-0 items-center justify-center border-r border-border bg-background"
                        >
                            {/* Primary: Video */}
                            <div
                                ref={el => { videoRefs.current[index] = el }}
                                className="z-10 w-full px-4"
                                style={{
                                    maxWidth: design.videoType === 'mobile' ? '320px' : '850px'
                                }}
                            >
                                <VideoCard
                                    videoSrc={design.videoSrc}
                                    videoType={design.videoType}
                                />
                            </div>

                            {/* Secondary: Details */}
                            <div
                                ref={el => { detailsRefs.current[index] = el }}
                                className="absolute z-20 h-full max-w-lg flex flex-col justify-center px-8 text-left"
                                style={{ left: '75%', transform: 'translateX(-50%)' }}
                            >
                                <h2 className="text-4xl font-serif tracking-tight text-foreground mb-4">
                                    {design.title}
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {design.description}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {design.toolsUsed?.map(tool => (
                                        <span key={tool} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex h-screen w-screen shrink-0 items-center justify-center bg-background">
                        {showFin && <Fin />}
                    </div>
                </div>
            </section>
        </main>
    );
}