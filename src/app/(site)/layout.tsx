import Sidebar from "@/components/Sidebar";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <div className="max-w-4xl mx-auto w-full mb-22 sm:mb-0">
        <div className="flex">
          {/* <Sidebar /> */}
          <main className="flex-1 w-full bg-white">{children}</main>
        </div>
      </div>
    </ErrorBoundary>
  );
}
