import Link from "next/link";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Penetration Testing Services | CORESEC",
  description:
    "Comprehensive penetration testing services including web application, network, and mobile security testing by certified cybersecurity experts.",
};

type TestingService = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type WhyChooseItem = {
  title: string;
  description: string;
};

type ApproachStep = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  author: string;
};

const testingServices: TestingService[] = [
  {
    title: "Web Application/API Testing",
    description:
      "Web application testing scrutinises your application's code to identify security flaws, helping to prevent attackers from exploiting them. Identify complex flaws like business logic, injection, or privilege escalation vectors.",
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
    title: "Internal Network Testing",
    description:
      "Internal network testing probes for weaknesses from within your organisation, mirroring insider threats. Assume breach and ensure that even if perimeter defences fail, your internal safeguards are robust enough to protect your critical assets.",
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
          d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "External Network Testing",
    description:
      "External network testing simulates cyber attacks on your network from outside your network to uncover vulnerabilities before hackers can exploit them. We'll test your perimeter defences.",
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
          d="m17.657 16.657-4.243 4.243a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Wireless Network Testing",
    description:
      "Wireless testing identifies security issues in your Wi-Fi networks, preventing unauthorised users from sneaking onto your internal network. Make sure your neighbours aren't snooping on you.",
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
          d="M8.111 16.404a5.5 5.5 0 0 1 7.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      </svg>
    ),
  },
  {
    title: "Mobile Application Testing",
    description:
      "Mobile application testing prioritises data privacy by identifying potential vulnerabilities that could expose sensitive user information. Ensure data is handled and protected against unauthorised access.",
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
          d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
        />
      </svg>
    ),
  },
  {
    title: "Social Engineering",
    description:
      "People form an important part of every organisation's security posture. Social engineering exploits human trust to gain access to sensitive information or systems. Assess your team's awareness.",
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
          d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        />
      </svg>
    ),
  },
];

const whyChooseUs: WhyChooseItem[] = [
  {
    title: "SME Friendly Pricing",
    description:
      "We understand the challenges faced by small and medium-sized enterprises (SMEs). Our pricing is designed to be SME-friendly, ensuring that high-quality cybersecurity services are accessible and affordable for every Australian business, without compromising on expertise or results.",
  },
  {
    title: "Industry Accredited",
    description:
      "CORESEC follows industry best practices and standards in penetration testing. Our commitment to excellence ensures that by working with certified experts who follow ethical frameworks, you can be confident in the quality and integrity of our security assessments.",
  },
  {
    title: "Certified Security Experts",
    description:
      "CORESEC consultants hold industry-recognised cybersecurity certifications including OSCP, CEH, and CISSP, so you and your customers can rest assured that testing is being performed to the highest standards by qualified professionals.",
  },
  {
    title: "Local Australian Team",
    description:
      "All penetration testing is performed by our consultants based in Australia. Your data stays securely within the country, and we're readily available whenever you need us. Our team operates nationwide from Sydney, Melbourne, and Brisbane.",
  },
  {
    title: "Proven Methodology, Tangible Results",
    description:
      "A pentest isn't just a vulnerability scan! Our penetration testing methodology is rooted in industry best practices, including comprehensive references to OWASP Top 10, SANS CWE Top 25, and NIST frameworks for thorough security assessment.",
  },
  {
    title: "Advanced Threat Identification",
    description:
      "As attacker methodologies continuously evolve, staying ahead of threats is paramount. CORESEC invests in ongoing research and development to identify sophisticated vulnerabilities that could impact your organization's security posture.",
  },
];

const approachSteps: ApproachStep[] = [
  {
    title: "Planning & Scoping",
    description:
      "We begin by understanding your unique environment, defining testing boundaries, and establishing clear objectives for the engagement.",
  },
  {
    title: "Reconnaissance & Enumeration",
    description:
      "Comprehensive information gathering to identify potential attack vectors and understand your system's footprint.",
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Systematic identification and analysis of security weaknesses across your applications, networks, and infrastructure.",
  },
  {
    title: "Exploitation & Validation",
    description:
      "Controlled exploitation of identified vulnerabilities to demonstrate real-world impact and validate security risks.",
  },
  {
    title: "Post-Exploitation Analysis",
    description:
      "Assessing the extent of access gained and potential business impact of successful attacks.",
  },
  {
    title: "Reporting & Remediation",
    description:
      "Detailed reporting with actionable recommendations and expert guidance for effective vulnerability remediation.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "CORESEC demonstrated exceptional expertise in identifying critical vulnerabilities that other providers had missed. Their thorough approach gave us confidence in our security posture.",
    author: "IT Director - Financial Services",
  },
  {
    quote:
      "The penetration testing engagement with CORESEC was professional from start to finish. Their consultants provided clear explanations and practical remediation guidance that our team could immediately implement.",
    author: "CISO - Technology Company",
  },
  {
    quote:
      "The penetration testing engagement with CORESEC was professional from start to finish. Their consultants provided clear explanations and practical remediation guidance that our team could immediately implement.",
    author: "CEO - Shawon Mir It",
  },
];

export default function PenetrationTestingPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary/10 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-foreground md:text-6xl">
              Penetration <span className="text-primary">Testing</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
              Simulate real-world cyber attacks on your organisation&apos;s IT
              systems, applications, and networks. Identify security gaps before
              attackers can exploit them with our team of certified
              cybersecurity experts based in Australia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                GET A FREE CONSULTATION
              </button>
              <Link
                href="/contact"
                className="rounded-lg border border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                CONTACT OUR EXPERTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Our Testing <span className="text-primary">Methodology</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We combine automated tools with manual testing expertise to
              deliver comprehensive security assessments that go beyond simple
              vulnerability scanning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {approachSteps.map((step, index) => (
              <div key={step.title} className="group">
                <div className="h-full rounded-xl bg-card/90 p-6 ring-1 ring-border transition-all group-hover:ring-primary/60">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Penetration Testing Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Comprehensive Testing{" "}
              <span className="text-primary">Services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Tailored security testing services designed to protect your
              digital assets from evolving cyber threats.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testingServices.map((service) => (
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              See what our clients say about our penetration testing services
              and expertise.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="rounded-xl bg-card/90 p-8 ring-1 ring-border transition-all hover:ring-primary/40"
              >
                <div className="mb-4 text-4xl text-primary">&quot; </div>
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
            Ready to Strengthen Your{" "}
            <span className="text-primary">Security Posture?</span>
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Contact CORESEC today for a comprehensive penetration testing
            assessment tailored to your organization&apos;s specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              SCHEDULE YOUR ASSESSMENT
            </button>
            <Link
              href="/contact"
              className="rounded-lg border border-foreground/40 px-8 py-3 text-lg font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              SPEAK WITH AN EXPERT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
