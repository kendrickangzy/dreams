import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
      className={cn("h-full", "antialiased", montserrat.variable, geistMono.variable, "font-sans", geist.variable)}
    >
    <header>
      <nav className="mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl text-gray-100 tracking-tight group-hover:text-gray-400 transition-colors">
            DREAMS
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-xl font-medium text-gray-100 tracking-tight">
          <li><a href="index.html" className="nav-link hover:text-brand-200 transition-colors" data-page="index">Home</a></li>
          <li><a href="about.html" className="nav-link hover:text-brand-200 transition-colors" data-page="about">About</a></li>
          <li><a href="testimonials.html" className="nav-link hover:text-brand-200 transition-colors" data-page="testimonials">Testimonials</a></li>
          <li><a href="resources.html" className="nav-link hover:text-brand-200 transition-colors" data-page="resources">Resources</a></li>
          <li><a href="contact.html" className="nav-link hover:text-brand-200 transition-colors" data-page="contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>

    <body className="min-h-full flex flex-col">{children}</body>

    <footer>

    </footer>
    </html>
  );
}
