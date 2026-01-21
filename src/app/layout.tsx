import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Fragment_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";

const fragment = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-fragment",
  weight: ["400"],
})

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
        className={`${manrope.variable} ${instrumentSerif.variable} ${fragment.variable} bg-[repeating-linear-gradient(45deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_8px)] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] dark:bg-size-[16px_16px]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
