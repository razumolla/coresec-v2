"use client";

import { useEffect, useState } from "react";
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

const brand = "CORESEC";
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

  // close drawer when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const baseLink =
    "px-4 py-2 rounded-full text-sm text-white/75 hover:text-white hover:bg-white/10 transition";
  const pillActive =
    "text-white font-semibold bg-white/10 border border-[#0A84FF]/40 shadow-[0_8px_30px_-12px_rgba(10,132,255,0.7)]";

  return (
    <nav
      className="fixed top-0 z-50 h-20 w-full"
      aria-label="Main"
      role="banner"
    >
      {/* hairline glow */}
      <div className="w-full bg-linear-to-r from-transparent via-[#0A84FF]/50 to-transparent" />

      {/* glass bar */}
      <div className="border-b border-white/10 bg-[#21242B]/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 py-4">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
                priority
                className="h-10 w-10 rounded-md object-contain ring-1 ring-white/10"
              />
              <span className="hidden bg-linear-to-r from-white via-white to-[#0A84FF] bg-clip-text text-2xl font-semibold tracking-wide text-transparent md:inline lg:inline">
                {brand}
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
            </div>

            {/* Mobile toggle */}
            <div className="ml-auto md:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                    className="text-white hover:bg-white/10"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] border-l border-white/10 bg-[#0B0F17] text-white"
                >
                  <SheetHeader className="flex flex-row items-center justify-between gap-2">
                    <SheetTitle className="text-left">{brand}</SheetTitle>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/10"
                      >
                        ✕
                      </Button>
                    </SheetClose>
                  </SheetHeader>

                  <nav className="mt-6 flex flex-col gap-1">
                    {primary.map((item) => (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={item.path}
                          className={`rounded-lg px-3 py-2.5 text-base text-white/80 transition hover:bg-white/10 hover:text-white ${
                            isActive(item.path)
                              ? "border border-[#0A84FF]/40 bg-white/10 text-white"
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
