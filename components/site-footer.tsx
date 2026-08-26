import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav-links";

// Placeholder contact details — replace with your real email/phone.
const CONTACT_EMAIL = "hello@dreamsadmissions.example";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:px-16">
        <div>
          <span className="font-sans text-2xl font-bold tracking-wider">DREAMS</span>
          <p className="mt-4 max-w-sm text-background/70">
            Don’t leave it to chance. Let us help guide you to success.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block w-fit text-sm transition-colors hover:text-accent"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="md:justify-self-end">
          <span className="font-mono text-sm tracking-wider text-background/50 uppercase">
            Pages
          </span>
          <ul className="mt-4 flex flex-col gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} prefetch={false} className="transition-colors hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 px-6 py-6 text-center text-xs text-background/50">
        © {new Date().getFullYear()} DREAMS Admissions. All rights reserved.
      </div>
    </footer>
  );
}
