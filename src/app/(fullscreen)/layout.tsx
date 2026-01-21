export default function FullscreenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground uppercase">
            {children}
        </div>
    );
}
