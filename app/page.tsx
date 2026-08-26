import Image from "next/image";
import Link from "next/link";
import heroImg from "./images/paulina-b-BRuMXOIvMhs-unsplash.jpg";

export default function Home() {
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
            Join us at DREAMS
          </h1>
          <p className="text-2xl font-semibold leading-6 text-background">
            The Premier Counsellor for International Admissions
          </p>

          <div className="flex flex-row gap-4">
            <Link
              href="/about"
              className="rounded-full bg-foreground/70 px-4 py-2 font-sans text-sm tracking-tight text-background transition-colors hover:bg-foreground"
            >
              About Us
            </Link>
            <Link
              href="/process"
              className="rounded-full bg-foreground/70 px-4 py-2 font-sans text-sm tracking-tight text-background transition-colors hover:bg-foreground"
            >
              Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}