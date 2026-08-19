"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Our Process" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border/50">
      <nav className="mx-auto flex items-center justify-between px-6 py-4 bg-foreground">

        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono text-2xl tracking-wider text-gray-100 transition-colors group-hover:text-gray-300">
            DREAMS
          </span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  render={<Link href={href} />}
                  active={pathname === href}
                  className="text-background hover:bg-background data-active:bg-background hover:text-foreground data-active:text-foreground"
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>

          <Link
            href="/contact"
            className="rounded-full bg-accent ml-2 px-4 py-2 font-mono text-sm tracking-tight text-background transition-colors hover:bg-accent/90"
          >
            Get Started
          </Link>
        </NavigationMenu>

        

      </nav>
    </header>
  );
}
