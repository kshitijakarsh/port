import { projects } from "@/data/projects";
import { MoveLeft, Github, Globe } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/Button";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="h-screen bg-background text-foreground relative overflow-hidden font-sans selection:bg-foreground py-16 px-4 md:px-8">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"></div>

            <div className="relative z-10 w-full h-full">
                <Button
                    variant="social"
                    href="/"
                    className="fixed top-8 left-8 z-50 rounded-full"
                >
                    <MoveLeft size={14} />
                    Back
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start h-full">
                    <div className="lg:col-span-3 flex flex-col justify-between h-full py-12">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold uppercase tracking-tighter leading-none font-fragment">
                                    {project.title}
                                </h1>
                                <p className="text-md md:text-lg font-medium leading-relaxed tracking-tight text-foreground/80 font-fragment max-w-lg">
                                    {project.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-w-sm">
                                <div className="space-y-1.5">
                                    <p className="text-[10px] uppercase tracking-tighter font-bold text-muted-foreground/40 font-fragment">Year</p>
                                    <p className="text-sm font-medium tracking-tight uppercase">{project.year}</p>
                                </div>

                                <div className="space-y-1.5">
                                    <p className="text-[10px] uppercase tracking-tighter font-bold text-muted-foreground/40 font-fragment">Field</p>
                                    <p className="text-xs font-medium uppercase tracking-tighter font-fragment text-emerald-400">[{project.field}]</p>
                                </div>

                                <div className="space-y-1.5 col-span-2">
                                    <p className="text-[10px] tracking-tighter font-bold text-muted-foreground/40 font-fragment uppercase">Technologies</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                                        {project.techUsed.map((tech) => (
                                            <span key={tech.id} className="text-sm font-medium uppercase tracking-tight">{tech.stack}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-8">
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/40 font-fragment">Connections</p>
                            <div className="flex gap-4">
                                <Button variant="social" href={project.githubUrl}>
                                    <Github size={20} />
                                </Button>
                                <Button variant="social" href={project.liveUrl}>
                                    <Globe size={20} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="lg:col-span-9 h-full flex items-center justify-center p-4 lg:p-0">
                        <div className="relative h-[80vh] w-full">
                            <Image
                                src={project.image}
                                alt={project.imageAlt || project.title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}