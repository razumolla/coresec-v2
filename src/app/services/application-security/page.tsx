import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Security Services | CORESEC",
  description:
    "Comprehensive application security services including threat modeling, secure code training, and DevSecOps integration for building secure software.",
};

type SecurityService = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type WhyChooseItem = {
  title: string;
  description: string;
};

type MethodologyStep = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  author: string;
};

const securityServices: SecurityService[] = [
  {
    title: "Application Security Strategy Assessment",
    description:
      "Find out how well your development process matches up with DevSecOps best practices. Identify areas for improvement and walk away with a clear roadmap to make developing secure software easier.",
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
          d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2Zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z"
        />
      </svg>
    ),
  },
  {
    title: "Cloud Security Assessment",
    description:
      "Cloud PaaS services make security easier, however designing secure architecture and setting secure configurations is key. Uncover hidden security gaps in your current setup. Measure twice, build once.",
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
          d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 1 0-9.78 2.096A4.001 4.001 0 0 0 3 15Z"
        />
      </svg>
    ),
  },
  {
    title: "Threat Modelling Training",
    description:
      "Demystify threat modelling. Our training breaks down complex concepts into actionable strategies and equips your engineers with the skills to identify vulnerabilities before any code is written.",
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Secure Code Training",
    description:
      "XXE, CORS, and SSRF aren't new trendy bands. Write more secure and resilient software by understanding security vulnerability classes. Know when a quick 'LGTM' is enough in a PR.",
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
    title: "Static Application Security Testing (SAST)",
    description:
      "Integrate security scanning directly into your development pipeline. Identify vulnerabilities in your source code before they reach production environments.",
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
    title: "Dynamic Application Security Testing (DAST)",
    description:
      "Test your running applications for security vulnerabilities from an attacker's perspective without access to source code.",
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
          d="M13 10V3L4 14h7v7l9-11h-7Z"
        />
      </svg>
    ),
  },
];

const whyChooseUs: WhyChooseItem[] = [
  {
    title: "We Can Write Code!",
    description:
      "We understand how the sausage is made. Having the skills to read and write code means we can spot security issues that others might miss, giving us an edge in keeping your software safe.",
  },
  {
    title: "Certified Consultants",
    description:
      "Our application security experts hold prestigious certifications such as GIAC's GCSA and Microsoft's AZ500, ensuring that our DevSecOps advice is practical and integrates seamlessly with your development lifecycle.",
  },
  {
    title: "Shift Left Approach",
    description:
      "Penetration testing isn't the only way to identify vulnerabilities! Embrace the 'shift left' approach, incorporating threat modelling and SAST early in the development cycle to catch issues before they become costly.",
  },
  {
    title: "Commitment to Innovation",
    description:
      "As attacker methodologies continuously evolve, staying ahead of the curve is paramount. CORESEC invests significantly in research and development to ensure our techniques and tools remain cutting edge.",
  },
  {
    title: "DevSecOps Integration",
    description:
      "We help you seamlessly integrate security into your existing DevOps workflows, ensuring security becomes an enabler rather than a blocker for your development teams.",
  },
  {
    title: "Practical Security Guidance",
    description:
      "Our recommendations are always practical and actionable. We understand business constraints and provide security solutions that work within your development realities.",
  },
];

const methodologySteps: MethodologyStep[] = [
  {
    title: "Assessment & Discovery",
    description:
      "Understand your current development processes, technology stack, and security maturity level to tailor our approach to your specific needs.",
  },
  {
    title: "Strategy Development",
    description:
      "Create a customized application security roadmap aligned with your business objectives and development velocity.",
  },
  {
    title: "Tool Integration",
    description:
      "Implement and configure security tools that integrate seamlessly with your existing development environment and CI/CD pipelines.",
  },
  {
    title: "Team Training & Enablement",
    description:
      "Equip your development teams with the knowledge and skills to build security into their daily workflows.",
  },
  {
    title: "Continuous Monitoring",
    description:
      "Establish processes for ongoing security monitoring, vulnerability management, and continuous improvement.",
  },
  {
    title: "Metrics & Reporting",
    description:
      "Provide clear metrics and reporting to demonstrate ROI and track progress against your security objectives.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "CORESEC's application security training transformed how our developers approach security. The practical, hands-on approach made complex concepts accessible to our entire team.",
    author: "Head of Engineering - FinTech Startup",
  },
  {
    quote:
      "The threat modeling workshop helped us identify critical design flaws before we even started coding. This proactive approach saved us significant time and resources down the line.",
    author: "CTO - SaaS Platform",
  },
];

export default function ApplicationSecurityPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary/10 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-foreground md:text-6xl">
              Application <span className="text-primary">Security</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
              Build secure software more easily by investing in your AppSec
              program. Find potential vulnerabilities before writing a single
              line of code by incorporating security early in the development
              lifecycle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                ENHANCE YOUR APPSEC STRATEGY
              </button>
              <Link
                href="/contact"
                className="rounded-lg border border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                GET EXPERT GUIDANCE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Our Application Security{" "}
              <span className="text-primary">Methodology</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We help you build security into every stage of your software
              development lifecycle, from design to deployment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {methodologySteps.map((step, index) => (
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

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Comprehensive Application{" "}
              <span className="text-primary">Security Services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Whether you need help with threat modeling, secure code review, or
              implementing security guardrails - we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityServices.map((service) => (
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

      {/* Why Choose CORESEC */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Why Choose <span className="text-primary">CORESEC?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We bring a unique combination of technical expertise and practical
              business understanding to your application security challenges.
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Client <span className="text-primary">Success Stories</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              See how we&apos;ve helped organizations build robust application
              security programs.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="rounded-xl bg-card/90 p-8 ring-1 ring-border transition-all hover:ring-primary/40"
              >
                <div className="mb-4 text-4xl text-primary">&quot;</div>
                <p className="mb-6 text-base italic text-foreground/90">
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

      {/* CTA */}
      <section className="bg-linear-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Ready to Build{" "}
            <span className="text-primary">Secure Software?</span>
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Let CORESEC help you integrate security into your development
            process and build applications that are secure by design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              START YOUR APPSEC JOURNEY
            </button>
            <Link
              href="/contact"
              className="rounded-lg border border-foreground/40 px-8 py-3 text-lg font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
