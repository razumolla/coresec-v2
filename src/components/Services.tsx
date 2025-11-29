"use client";

import Link from "next/link";
import { ComponentType, SVGProps } from "react";

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M11 3a8 8 0 100 16 8 8 0 000-16z"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity=".35"
    />
    <path
      d="M21 21l-4.35-4.35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-primary"
    />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity=".35"
    />
    <path
      d="M7 12h10M12 7v10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-primary"
    />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4z"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity=".35"
    />
    <path
      d="M9.5 12.5l1.8 1.8 3.2-3.2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-primary"
    />
  </svg>
);

type ServiceItem = {
  name: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  slug: string;
};

const items: ServiceItem[] = [
  {
    name: "Penetration Testing",
    description:
      "Simulated real-world attacks across web, mobile, API, and network to uncover exploitable paths before adversaries do.",
    Icon: SearchIcon,
    slug: "penetration-testing",
  },
  {
    name: "Application Security",
    description:
      "Threat modeling, SAST/DAST, and secure SDLC reviews to reduce risk in web/mobile apps before and after release.",
    Icon: PlusIcon,
    slug: "application-security",
  },
  {
    name: "Managed Security Services",
    description:
      "24/7 monitoring, alert triage, and incident response playbooks so your team can stay focused on shipping.",
    Icon: ShieldCheckIcon,
    slug: "managed-security-services",
  },
];

export default function Services() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Our <span className="text-primary">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div className="group cursor-pointer rounded-2xl bg-card/80 p-6 ring-1 ring-border backdrop-blur transition-all duration-300 hover:bg-card">
                <div className="flex justify-center text-primary">
                  <div className="h-20 w-20 text-primary">
                    <service.Icon />
                  </div>
                </div>
                <h3 className="mt-4 text-center text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-center leading-7 text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4 text-center">
                  <span className="font-semibold text-primary group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
