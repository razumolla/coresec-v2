"use client";

import { useState } from "react";

const QA: readonly [string, string][] = [
  [
    "Do you include retesting?",
    "Yes. We include a free retest window and an attestation letter after you remediate the findings.",
  ],
  [
    "How do you handle credentials?",
    "Secrets are handled with strict least-privilege. Access is time-boxed, stored securely, and revoked at the end of the engagement.",
  ],
  [
    "What's the typical pentest timeline?",
    "Scoping (1-2 days), testing (3-10 days depending on scope), reporting (2-4 days), then a free retest window.",
  ],
  [
    "Which scopes do you cover?",
    "Web, mobile, APIs, network/internal, and cloud configurations (AWS/Azure/GCP) including IAM and posture reviews.",
  ],
  [
    "Do you test cloud (AWS/Azure/GCP)?",
    "Yes. We review IAM, networking, storage, secrets, logging, and guardrails against benchmarks and real-world attacks.",
  ],
  [
    "What deliverables do we receive?",
    "Risk-ranked report with PoC, business impact, reproduction steps, and prioritized remediation guidance.",
  ],
];

type IconProps = {
  expanded: boolean;
};

const Icon = ({ expanded }: IconProps) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 transition-transform duration-300"
    style={{ transform: expanded ? "rotate(45deg)" : "rotate(0deg)" }}
  >
    <path
      d="M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-primary"
    />
    <path
      d="M12 5v14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-primary"
    />
  </svg>
);

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Title and Subtitle */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Get answers to common questions about our penetration testing
            services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {QA.map(([q, a], i) => {
            const expanded = open === i;
            return (
              <div
                key={q}
                className={`overflow-hidden rounded-lg border transition-colors duration-300 ${
                  expanded
                    ? "border-primary"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                <button
                  onClick={() => setOpen(expanded ? -1 : i)}
                  className="group flex w-full items-center justify-between gap-3 p-6 text-left"
                  aria-expanded={expanded}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-semibold text-foreground transition-colors duration-300">
                    {q}
                  </span>
                  <Icon expanded={expanded} />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
