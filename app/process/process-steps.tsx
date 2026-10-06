"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";

interface Step {
  number: string;
  title: string;
  body: string;
  image: { src: StaticImageData; alt: string };
}

// Lazy-loads an image once it's within `bufferPx` of the viewport, rather
// than waiting for the browser's own (uncontrollable) native lazy-load
// threshold. Loading a bit early like this means the fetch has a head
// start, so by the time it actually scrolls into view it's already there —
// the "instant" feeling is really just a generous buffer.
function LazyStepImage({
  src,
  alt,
  sizes,
  bufferPx = 800,
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  bufferPx?: number;
}) {
  const [shouldLoad, setShouldLoad] = useState(false);

  const setRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el || shouldLoad) return;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) setShouldLoad(true);
        },
        { rootMargin: `${bufferPx}px 0px` }
      );
      observer.observe(el);
      return () => observer.disconnect();
    },
    [bufferPx, shouldLoad]
  );

  return (
    <div ref={setRef} className="absolute inset-0">
      {shouldLoad && (
        <Image
          src={src}
          alt={alt}
          fill
          loading="eager"
          placeholder="blur"
          quality={70}
          className="object-cover"
          sizes={sizes}
        />
      )}
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: Step[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      // A thin detection line across the vertical center of the viewport —
      // whichever image crosses it becomes the active step.
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    const els = sectionRefs.current;
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <>
      {/* Mobile/tablet view */}
      <div className="flex flex-col py-16 gap-16 md:hidden">
        {steps.map((step, i) => {
          const imageFirst = i % 2 === 1;
          return (
            <section key={step.number} className="flex w-full flex-col md:flex-row">
              <div
                className={`relative h-144 w-full md:h-auto md:w-1/2 ${
                  imageFirst ? "md:order-1" : "md:order-2"
                }`}
              >
                <LazyStepImage
                  src={step.image.src}
                  alt={step.image.alt}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div
                className={`flex w-full flex-col justify-center gap-4 px-8 py-16 md:w-1/2 md:px-16 ${
                  imageFirst ? "md:order-2" : "md:order-1"
                }`}
              >
                <span className="font-mono font-semibold text-6xl text-accent/50 tracking-tighter">{step.number}</span>
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {step.title}
                </h2>
                <p className="text-lg leading-8 text-foreground/70">{step.body}</p>
              </div>
            </section>
          );
        })}
      </div>

      {/* Desktop view */}
      <div className="relative hidden py-32 md:grid md:grid-cols-2">
        <div className="sticky top-0 -mt-[25vh] -mb-[25vh] flex h-screen items-center py-32 px-16 lg:-mt-[15vh] lg:-mb-[15vh]">
          <div className="relative min-h-80 w-full max-w-md">
            {steps.map((step, i) => (
              <div
                key={step.number}
                aria-hidden={i !== activeIndex}
                className={`absolute inset-0 flex flex-col justify-center gap-4 transition-opacity duration-700 ease-in-out ${
                  i === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <span className="absolute -top-32 -left-6 font-mono font-semibold text-[12rem] text-accent/50 tracking-tighter -z-1">{step.number}</span>
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {step.title}
                </h2>
                <p className="text-md leading-6 text-foreground/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:gap-32">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
              className="relative h-[50vh] lg:h-[70vh] w-full"
            >
              <LazyStepImage src={step.image.src} alt={step.image.alt} sizes="50vw" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
