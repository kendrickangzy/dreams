import Image from "next/image";

const UNIVERSITIES = [
  { src: "/CambridgeUniversity_Building.webp", alt: "Cambridge University" },
  { src: "/ImperialCollegeLondon_Building.webp", alt: "Imperial College London" },
  { src: "/KingsCollegeLondon_Building.jpg", alt: "King's College London" },
  { src: "/OxfordUniversity_Building.jpg", alt: "Oxford University" },
];

// Placeholder copy — swap in your real process content.
const STEPS = [
  {
    number: "01",
    title: "Discovery",
    body: "We start with a conversation — your academic profile, your goals, and the universities and courses you're aiming for. Replace this with your real step 1 copy.",
    image: UNIVERSITIES[0],
  },
  {
    number: "02",
    title: "Strategy & Applications",
    body: "We build a tailored application strategy together: course selection, personal statement, and every supporting document, refined until it's ready. Replace this with your real step 2 copy.",
    image: UNIVERSITIES[1],
  },
  {
    number: "03",
    title: "Interview & Test Prep",
    body: "Mock interviews and admissions-test practice, built around what each university actually asks for. Replace this with your real step 3 copy.",
    image: UNIVERSITIES[2],
  },
  {
    number: "04",
    title: "Offers & Beyond",
    body: "From decisions to results day to enrolment, we stay with you through to the finish. Replace this with your real step 4 copy.",
    image: UNIVERSITIES[3],
  },
];

export default function Process() {
  return (
    <div className="flex flex-col bg-background font-sans">
      {/* Hero */}
      <section className="flex flex-col h-screen w-full px-32 items-center justify-center overflow-hidden bg-background text-foreground">

        <h1 className="py-8 text-center text-6xl font-bold tracking-tight sm:text-8xl">
          Our Process
        </h1>

        <h2 className="text-center text-xl">
          At DREAMS, we believe in tailoring our approach to fit the needs of every unique student.
          Our bespoke system allows us to craft each application based on that student’s strengths, background, and personality.
          A coherent application — one that tells a story — is always a strong one.
          Wherever you are in your journey, we’re here to help you build one. 
        </h2>
      </section>

      {/* Alternating sections */}
      {STEPS.map((step, i) => {
        const imageFirst = i % 2 === 1;
        return (
          <section
            key={step.number}
            className="flex w-full flex-col border-t border-border md:flex-row"
          >
            <div
              className={`relative h-72 w-full md:h-auto md:w-1/2 md:min-h-140 ${
                imageFirst ? "md:order-1" : "md:order-2"
              }`}
            >
              <Image
                src={step.image.src}
                alt={step.image.alt}
                fill
                className="object-cover"
              />
            </div>
            <div
              className={`flex w-full flex-col justify-center gap-4 px-8 py-16 md:w-1/2 md:px-16 ${
                imageFirst ? "md:order-2" : "md:order-1"
              }`}
            >
              <span className="font-mono text-sm text-accent">{step.number}</span>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {step.title}
              </h2>
              <p className="max-w-md text-lg leading-8 text-foreground/70">
                {step.body}
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
