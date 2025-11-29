import Link from "next/link";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Managed Security Services | CORESEC",
  description:
    "Comprehensive managed security services including MDR, SIEM management, vulnerability scanning, and security awareness training.",
};

type ManagedService = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type WhyChooseItem = {
  title: string;
  description: string;
};

type Benefit = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  author: string;
};

const managedServices: ManagedService[] = [
  {
    title: "Penetration Testing as a Service",
    description:
      "Regular penetration testing conducted by our expert security team to identify vulnerabilities in your systems and applications. Receive detailed reports with actionable recommendations to strengthen your security posture.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm10-10V7a4 4 0 0 0-8 0v4h8Z"
        />
      </svg>
    ),
  },
  {
    title: "Application Security as a Service",
    description:
      "Comprehensive application security services including code reviews, security testing, and continuous monitoring throughout your development lifecycle. Ensure your applications are secure from design to deployment.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20 14 4m4 4 4 4-4 4M6 16 2 12l4-4"
        />
      </svg>
    ),
  },
  {
    title: "Managed Vulnerability Scanning",
    description:
      "Managed vulnerability scanning, as prescribed by the ASD Essential Eight, provides continuous monitoring of your network to detect vulnerabilities. Identify security gaps promptly with regular reporting and actionable insights.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016Z"
        />
      </svg>
    ),
  },
  {
    title: "Managed SIEM",
    description:
      "Log management is prescribed for organisations of maturity level 2 or higher in the ASD Essential Eight. Ensure your SIEM is setup and configured correctly to detect intruders so you can react to incidents more quickly.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Zm2-10h6v6H9V9Z"
        />
      </svg>
    ),
  },
  {
    title: "Managed Security Awareness Training",
    description:
      "Educate employees about the latest cyber threats and best practices with expertly designed and regularly updated training modules. Ensure your workforce is equipped with the skills needed to identify and prevent potential cyber attacks.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14 21 9 12 4 3 9l9 5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m12 14 6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14Z"
        />
      </svg>
    ),
  },
  {
    title: "MDR for Microsoft Defender",
    description:
      "Fully leverage Microsoft Defender's capabilities and ensure you are getting value out of your existing security tooling. Leverage CORESEC for expert configuration, continuous monitoring, and proactive threat hunting.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016Z"
        />
      </svg>
    ),
  },
];

const whyChooseUs: WhyChooseItem[] = [
  {
    title: "Attention and Agility",
    description:
      "As a smaller, agile managed security service provider, our size allows us to be more responsive and adaptable to your unique needs without the bureaucracy often encountered with larger providers.",
  },
  {
    title: "The Attackers Mindset",
    description:
      "The best defence is a good offence, and that's the core of our cybersecurity philosophy. By understanding the tactics of attackers, we can craft more robust defences and countermeasures.",
  },
  {
    title: "Pragmatic Services",
    description:
      "We aren't here to replace your team; instead, we work alongside them to augment their capabilities. Our approach is to complement your existing security measures by filling in gaps and providing expertise where it's needed most.",
  },
  {
    title: "Commitment to Innovation",
    description:
      "Attacker methodologies continuously evolve, staying ahead of the curve is paramount. CORESEC invests significantly in research and development to ensure our techniques and tools remain cutting edge.",
  },
  {
    title: "24/7 Security Operations",
    description:
      "Our security operations center provides round-the-clock monitoring, threat detection, and incident response capabilities to protect your organization at all times.",
  },
  {
    title: "Compliance Expertise",
    description:
      "We help you meet regulatory requirements and industry standards including ASD Essential Eight, ISO 27001, and other compliance frameworks relevant to your business.",
  },
];

const benefits: Benefit[] = [
  {
    title: "Cost-Effective Security",
    description:
      "Reduce the need for expensive in-house security teams and infrastructure while maintaining enterprise-grade security capabilities.",
  },
  {
    title: "Expert Access",
    description:
      "Gain access to a team of certified security experts with diverse skills and experience across multiple industries and technologies.",
  },
  {
    title: "Proactive Protection",
    description:
      "Move from reactive security measures to proactive threat hunting and prevention with continuous monitoring and advanced analytics.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Our services scale with your business, providing the right level of security support as your organization grows and evolves.",
  },
  {
    title: "Reduced Complexity",
    description:
      "Simplify your security operations with a single provider managing multiple security functions and technologies.",
  },
  {
    title: "Measurable Results",
    description:
      "Receive regular reporting with clear metrics and KPIs that demonstrate the value and effectiveness of our security services.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "CORESEC's managed services have transformed our security posture. Their team acts as an extension of our own, providing expertise we couldn't afford to maintain in-house.",
    author: "CISO - Healthcare Organization",
  },
  {
    quote:
      "The 24/7 monitoring and rapid response capabilities gave us peace of mind. CORESEC identified and contained a threat before it could impact our operations.",
    author: "IT Director - Manufacturing Company",
  },
];

export default function ManagedSecurityServicesPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary/10 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-foreground md:text-6xl">
              Managed <span className="text-primary">Security Services</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
              CORESEC&apos;s managed security services work together with your
              team to operationalise your security tooling, enhance your
              security posture, and let you focus on your core business. Partner
              with us to ensure your security measures are always up-to-date and
              effective against the latest threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                GET PROTECTED
              </button>
              <Link
                href="/contact"
                className="rounded-lg border border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                SCHEDULE A CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Benefits of <span className="text-primary">Managed Security</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Why organizations choose CORESEC for their managed security needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="group">
                <div className="h-full rounded-xl bg-card/90 p-6 ring-1 ring-border transition-all group-hover:ring-primary/60">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Managed Security Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Our Managed{" "}
              <span className="text-primary">Security Services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive security services designed to protect your
              organization 24/7.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {managedServices.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl bg-card/90 p-6 ring-1 ring-border transition-all hover:ring-primary/60"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CORESEC? */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Why Choose <span className="text-primary">CORESEC?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              What sets our managed security services apart from the
              competition.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="group">
                <div className="h-full rounded-xl bg-card/90 p-6 ring-1 ring-border transition-all group-hover:ring-primary/60">
                  <h3 className="mb-3 flex items-center text-lg font-semibold text-foreground">
                    <span className="mr-3 h-6 w-1 rounded-full bg-primary" />
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Service <span className="text-primary">Tiers</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Flexible service options to meet your organization&apos;s specific
              security needs and budget.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {/* Essential */}
            <div className="rounded-xl bg-card/90 p-8 text-center ring-1 ring-border">
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Essential
              </h3>
              <div className="mb-6 text-3xl font-bold text-primary">
                $2,500
                <span className="text-lg font-normal text-muted-foreground">
                  /month
                </span>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>24/7 Basic Monitoring</li>
                <li>Weekly Vulnerability Scans</li>
                <li>Monthly Security Reports</li>
                <li>Email Support</li>
              </ul>
              <button className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                GET STARTED
              </button>
            </div>

            {/* Professional */}
            <div className="relative rounded-xl bg-card/90 p-8 text-center ring-2 ring-primary">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Professional
              </h3>
              <div className="mb-6 text-3xl font-bold text-primary">
                $5,000
                <span className="text-lg font-normal text-muted-foreground">
                  /month
                </span>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>24/7 Advanced Monitoring</li>
                <li>Daily Vulnerability Scans</li>
                <li>Weekly Security Reports</li>
                <li>SIEM Management</li>
                <li>Phone &amp; Email Support</li>
              </ul>
              <button className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                GET STARTED
              </button>
            </div>

            {/* Enterprise */}
            <div className="rounded-xl bg-card/90 p-8 text-center ring-1 ring-border">
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Enterprise
              </h3>
              <div className="mb-6 text-3xl font-bold text-primary">
                Custom
                <span className="text-lg font-normal text-muted-foreground">
                  {" "}
                  pricing
                </span>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>24/7 Premium Monitoring</li>
                <li>Real-time Vulnerability Management</li>
                <li>Custom Reporting &amp; Dashboards</li>
                <li>Dedicated Security Engineer</li>
                <li>24/7 Priority Support</li>
              </ul>
              <button className="mt-6 w-full rounded-lg border border-primary py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                CONTACT SALES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              See what our clients say about our managed security services.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="rounded-xl bg-card/90 p-8 ring-1 ring-border transition-all hover:ring-primary/40"
              >
                <div className="mb-4 text-4xl text-primary">&quot;</div>
                <p className="mb-6 text-lg italic text-foreground/90">
                  {testimonial.quote}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Ready to Enhance Your{" "}
            <span className="text-primary">Security Posture?</span>
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Let CORESEC manage your security operations so you can focus on
            growing your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              START YOUR FREE TRIAL
            </button>
            <Link
              href="/contact"
              className="rounded-lg border border-foreground/40 px-8 py-3 text-lg font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              REQUEST A DEMO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
