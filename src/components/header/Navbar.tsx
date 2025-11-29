"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "../theme/theme-toggle";

const logo = "/logo.png";

type NavItem = {
  label: string;
  path: string;
};

const primary: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Trainings", path: "/trainings" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const baseLink =
    "px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition";
  const pillActive =
    "text-foreground font-semibold bg-muted border border-primary/40 shadow-[0_8px_30px_-12px_oklch(var(--primary)_/_0.7)]";

  return (
    <nav
      className="fixed top-0 z-50 h-20 w-full"
      aria-label="Main"
      role="banner"
    >
      {/* hairline glow using primary */}
      <div className="w-full bg-linear-to-r from-transparent via-primary/60 to-transparent" />

      {/* glass bar */}
      <div className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 py-4">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="CORESEC logo"
                width={40}
                height={40}
                priority
                className="h-10 w-10 rounded-md object-contain ring-1 ring-border"
              />
              <span className="hidden bg-linear-to-r from-foreground via-foreground to-primary bg-clip-text text-2xl font-semibold tracking-wide text-transparent md:inline">
                CORESEC
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="ml-auto hidden items-center gap-1 md:flex">
              {primary.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className={`${baseLink} ${
                    isActive(item.path) ? pillActive : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Theme toggle desktop */}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile toggle + theme */}
            <div className="ml-auto flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                    className="text-foreground hover:bg-muted"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] border-l border-border bg-background text-foreground"
                >
                  <SheetHeader className="flex flex-row items-center justify-between gap-2">
                    <SheetTitle className="text-left">CORESEC</SheetTitle>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        ✕
                      </Button>
                    </SheetClose>
                  </SheetHeader>

                  <nav className="mt-6 flex flex-col gap-1">
                    {primary.map((item) => (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={item.path}
                          className={`rounded-lg px-3 py-2.5 text-base text-muted-foreground transition hover:bg-muted hover:text-foreground ${
                            isActive(item.path)
                              ? "border border-primary/40 bg-muted text-foreground"
                              : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
