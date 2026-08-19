import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DREAMS Admissions",
  description: "Don’t leave it to chance. Let us over at DREAMS help guide you to success.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", montserrat.variable, geistMono.variable)}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
