import Image from "next/image";
import { ProcessSteps } from "./process-steps";
import cambridgeImg from "./images/CambridgeUniversity_Building.webp";
import benjaminDaviesImg from "./images/benjamin-davies-Oja2ty_9ZLM-unsplash.jpg";
import viralLukeImg from "./images/viral-luke-TpFyNwGi7yM-unsplash.jpg";
import yanYouChenImg from "./images/yan-you-chen-ZRxgXvbpIhQ-unsplash.jpg";
import heroImg from "./images/_-cecile-XeJmFXu_jeU-unsplash.jpg";

const UNIVERSITIES = [
  { src: cambridgeImg, alt: "Cambridge University" },
  { src: benjaminDaviesImg, alt: "London Birds Eye View" },
  { src: viralLukeImg, alt: "University College London" },
  { src: yanYouChenImg, alt: "Durham University" },
];

// Placeholder copy — swap in your real process content.
const STEPS = [
  {
    number: "1",
    title: "Developing the Student",
    body: "The Personal Statement, Admissions Tests, and Interviews all ask for academic interest and ability. The best and most natural way for students to excel in them, then, is to develop these interests organically. Our tutors, guaranteed specialists in your subject, will fast-track you to meaningful exploration in your given subject: Readings, resources, consultations, and competitions.",
    image: UNIVERSITIES[0],
  },
  {
    number: "2",
    title: "The Personal Statement",
    body: "There’s no fixed template for a perfect personal statement. At the end of the day it has to be convincing. Our admissions experts rely on dozens of case studies to determine the optimal style of personal statement we recommend for each type of student. From start to finish, our expertise compounds your effort in ideation, research, writing, and drafting.",
    image: UNIVERSITIES[1],
  },
  {
    number: "3",
    title: "Admissions Tests",
    body: "Our resources, tutors, timelines, and guidance all work together to prepare and overprepare you for test day. At DREAMS, our goal is always to let our students score to their maximum potential. To that end, our admissions test services are managed by top scorers in their respective exams.",
    image: UNIVERSITIES[2],
  },
  {
    number: "4",
    title: "The Interview",
    body: "Most decent applicants get to this stage, but few get past it. DREAMS prides itself on students’ interview abilities and we coach them with our tried-and-tested approach. By breaking down and tackling the different parts of the skills required for the interview, we ensure that those under our coaching emerge ready to impress and charm Oxbridge professors.",
    image: UNIVERSITIES[3],
  },
];

export default function Process() {
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
          className="object-cover"
        />
        <div className="absolute inset-0" />

        <div className="absolute bottom-4 left-4 max-w-3xl p-4">
          <h1 className="text-5xl font-bold tracking-tight text-background">
            Our Process
          </h1>
          <p className="mt-6 text-lg leading-6 text-background/90">
            At DREAMS, we believe in tailoring our approach to fit the needs of every unique student.
            Our bespoke system allows us to craft each application based on that student’s strengths, background, and personality.
            A coherent application — one that tells a story — is always a strong one.
            Wherever you are in your journey, we’re here to help you build one.
          </p>
        </div>
      </section>

      <ProcessSteps steps={STEPS} />
    </div>
  );
}
