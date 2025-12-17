import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kshitij Akarsh",
  description: "portfolio web",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${instrumentSerif.variable} bg-[repeating-linear-gradient(45deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_8px)]`}
      >
        <ErrorBoundary>
          <div className="max-w-4xl mx-auto w-full mb-22 sm:mb-0">
            <div className="flex">
              <Sidebar />
              <main className="flex-1 w-full bg-white">
                {children}
              </main>
            </div>
          </div>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
