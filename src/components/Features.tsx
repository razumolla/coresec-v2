// src/components/Features.tsx
"use client";

import type { LucideIcon } from "lucide-react";
import { Award, CheckCircle, Shield } from "lucide-react";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const items: FeatureItem[] = [
  {
    icon: Shield,
    title: "Real Industry Experts",
    description:
      "Offensive security backgrounds with hands-on experience—no hobbyists.",
  },
  {
    icon: Award,
    title: "Certified & Trusted",
    description:
      "OSCP, eJPT, CEH Master—credentials that validate skills and build trust.",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description:
      "Cloud, network, and app security with detailed, actionable findings—every time.",
  },
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl bg-card/80 p-6 ring-1 ring-border backdrop-blur transition hover:bg-card"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <it.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-center text-lg font-semibold text-foreground">
                {it.title}
              </h3>
              <p className="mt-2 text-center leading-7 text-muted-foreground">
                {it.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
