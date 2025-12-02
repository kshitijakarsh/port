import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ErrorBoundary from "@/components/ErrorBoundary";

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
        className={`${manrope.variable} ${instrumentSerif.variable} bg-[repeating-linear-gradient(45deg,_#e5e7eb_0px,_#e5e7eb_1px,_transparent_1px,_transparent_8px)]`}
      >
        <ErrorBoundary>
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex">
              <Sidebar />
              <main className="flex-1 w-full bg-white">{children}</main>
            </div>
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
