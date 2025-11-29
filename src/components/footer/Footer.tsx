"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const LOGO = "/logo.png";

type ContactRowProps = {
  icon: ReactNode;
  title: string;
  lines?: string[];
};

function ContactRow({ icon, title, lines = [] }: ContactRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground ring-1 ring-border/60">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-foreground">{title}</div>
        {lines.map((t, i) => (
          <div key={i} className="text-sm text-muted-foreground">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background">
      {/* thin glow line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 lg:px-8">
        {/* Top: brand + copy + socials */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={LOGO}
                alt="CoreSec logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg object-contain ring-1 ring-border"
              />
              <span className="text-2xl font-semibold tracking-wide text-foreground">
                CORESEC
              </span>
            </div>
            <p className="mt-4 leading-7 text-muted-foreground">
              We help organizations prevent breaches with VAPT, SOC monitoring,
              incident response, and compliance readiness—delivering actionable
              fixes, not just reports.
            </p>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-2">
              <a
                href="https://www.facebook.com/coresec"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted ring-1 ring-border text-foreground hover:bg-muted/80"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8.1V12h2.3V9.8c0-2.2 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.2h-1.1c-1.1 0-1.4.68-1.4 1.37V12h2.38l-.38 2.9h-2v7A10 10 0 0 0 22 12Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/coresec/posts/?feedView=all"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted ring-1 ring-border text-foreground hover:bg-muted/80"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h3.96V21H3V8.98Zm6.48 0H14v1.64h.06c.68-1.2 2.33-2.46 4.79-2.46 5.13 0 6.08 3.37 6.08 7.75V21h-3.96v-4.97c0-1.19-.02-2.72-1.66-2.72-1.67 0-1.92 1.3-1.92 2.64V21h-3.96V8.98Z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@coresec"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted ring-1 ring-border text-foreground hover:bg-muted/80"
                aria-label="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1C4.4 20.5 12 20.5 12 20.5s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="mb-3 font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/trainings" className="hover:text-foreground">
                  Trainings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <h4 className="mb-1 font-semibold text-foreground">Contact</h4>
            <ContactRow
              title="Phone"
              lines={["+65 9089 1887"]}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 4.06 2h3A2 2 0 0 1 9 3.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92Z" />
                </svg>
              }
            />
            <ContactRow
              title="Email"
              lines={["service@coresec.com"]}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              }
            />
            <ContactRow
              title="Location"
              lines={["27 Roberts lane, Singapore, SG, Singapore 218306"]}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom bar */}
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            © 2025 CoreSec. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
