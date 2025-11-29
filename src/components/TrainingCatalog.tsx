"use client";

type Course = {
  id: string;
  title: string;
  blurb: string;
  meta: string[];
  syllabus: string[];
};

const COURSES: Course[] = [
  {
    id: "web-vapt",
    title: "Web App Pentesting Bootcamp",
    blurb:
      "Hands-on OWASP Top 10 + business-logic testing with practical labs.",
    meta: ["Level: Intermediate", "Duration: 120 days", "Format: Live online"],
    syllabus: [
      "Threat modeling and scoping",
      "Auth, session & access control testing",
      "Injection (SQLi/NoSQLi, command)",
      "XXE, SSRF, deserialization",
      "Advanced recon & chaining",
      "Reporting + PoC writing",
    ],
  },
  {
    id: "soc-foundations",
    title: "SOC Analyst (Blue Team) Foundations",
    blurb:
      "Detection engineering basics, alert triage, IR playbooks, and case mgmt.",
    meta: [
      "Level: Beginner–Intermediate",
      "Duration: 60 days",
      "Format: Live online",
    ],
    syllabus: [
      "Log sources & SIEM fundamentals",
      "Use cases & detections",
      "Malware triage & memory basics",
      "Threat intel & enrichment",
      "Incident response workflows",
    ],
  },
  {
    id: "cloud-sec",
    title: "Cloud Security Essentials (AWS/Azure)",
    blurb:
      "Secure cloud architectures, IAM, misconfig detection, and guardrails.",
    meta: ["Level: Intermediate", "Duration: 90 days", "Format: Live online"],
    syllabus: [
      "Shared responsibility & threat landscape",
      "IAM architecture & least privilege",
      "Network segmentation & perimeter",
      "Secrets, KMS, encryption at rest/flight",
      "CIS benchmarks & IaC checks",
    ],
  },
];

export default function TrainingCatalog() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Trainings
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Practical, instructor-led security courses
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {COURSES.map((course) => (
            <article
              key={course.id}
              className="flex h-full flex-col justify-between rounded-2xl bg-card/80 p-6 ring-1 ring-border shadow-md backdrop-blur transition hover:bg-card"
            >
              <div>
                <h3 className="text-xl font-semibold tracking-wide text-foreground">
                  {course.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-muted-foreground">
                  {course.blurb}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  {course.meta.map((meta) => (
                    <span
                      key={meta}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {meta}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                  {course.syllabus.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
