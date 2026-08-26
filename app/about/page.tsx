import Image from "next/image";
import Link from "next/link";
import heroImg from "./images/About_Hero.jpg";

export default function About() {
  return (
    <div className="flex flex-col bg-background font-sans">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={heroImg}
          alt="Hero Image"
          fill
          priority
          placeholder="blur"
          quality={70}
          className="object-cover"
        />
        <div className="absolute inset-0" />

        <div className="absolute bottom-4 left-4 flex max-w-3xl flex-col items-start gap-6 p-4">
          <h1 className="text-5xl font-bold tracking-tight text-background">
            About Us
          </h1>
        </div>
      </section>
    </div>
  );
}