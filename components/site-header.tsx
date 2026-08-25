"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS } from "@/lib/nav-links";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex w-full items-center justify-between bg-transparent py-4 px-4 md:grid md:grid-cols-[1fr_auto_1fr] md:px-6">
        {/* Logo — left */}
        <Link href="/" className="group flex items-center gap-2 justify-self-start bg-foreground px-2">
          <span className="font-sans font-bold text-2xl text-gray-100 transition-colors group-hover:text-gray-300">
            DREAMS
          </span>
        </Link>

        {/* Nav links — centered, desktop only */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2 bg-background/40 px-4 py-1 rounded-full">
            {NAV_LINKS.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  render={<Link href={href} />}
                  active={pathname === href}
                  className="text-foreground font-semibold hover:bg-gray-200/80 data-active:bg-gray-200/80 hover:text-foreground data-active:text-foreground"
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Get Started + hamburger — right */}
        <div className="flex items-center justify-self-end gap-2">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2 font-mono text-sm tracking-tight text-background transition-colors hover:bg-accent/90"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-foreground/10 md:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-border/50 bg-foreground md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                    pathname === href
                      ? "bg-background text-foreground"
                      : "text-background hover:bg-background/10"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
