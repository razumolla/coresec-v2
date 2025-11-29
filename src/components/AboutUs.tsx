"use client";

import CustomLink from "./header/CustomLink";

export default function AboutUs() {
  return (
    <section className="py-10 text-foreground">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            We are <span className="text-primary">Coresec</span>
          </h2>

          <p className="mx-auto max-w-4xl text-base leading-relaxed text-muted-foreground">
            Coresec is a cybersecurity partner focused on practical protection
            and clear outcomes.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Our <strong className="text-primary">mission</strong> is to make
              strong security accessible to every business—by combining expert
              testing, continuous monitoring, and sound engineering at a
              sensible cost. When threats evolve, our clients stay confident in
              their security posture.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="mx-auto max-w-5xl">
            <h3 className="mb-12 text-center text-3xl font-bold">
              Our <span className="text-primary">Values</span>
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                "Deliver high-quality, reliable security services that reduce real risk.",
                "Provide value that clearly outweighs cost through measurable outcomes.",
                "Communicate with transparency—plain language, clear priorities, shared metrics.",
                "Build long-term relationships founded on trust, respect, and accountability.",
              ].map((value, idx) => (
                <div className="group" key={idx}>
                  <div className="flex items-start space-x-4 rounded-lg border border-border p-6 transition-all duration-300 hover:border-muted-foreground">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground transition-transform group-hover:scale-110">
                      {idx + 1}
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* optional CTA (if you want to reuse CustomLink) */}
        <div className="mt-8 text-center">
          <CustomLink path="/contact">
            <button className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-muted hover:text-foreground">
              Talk to our team
            </button>
          </CustomLink>
        </div>
      </div>
    </section>
  );
}
