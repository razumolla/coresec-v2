"use client";

import CustomLink from "./header/CustomLink";
import GlobeCanvas from "./hero/GlobeVisual";
import WordByWord from "./hero/WordByWord";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      {/* background gradient + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* base */}
        <div className="absolute inset-0 bg-background" />
        {/* cyber gradients using primary-ish colors */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 12% 10%, rgba(10,132,255,0.18) 0%, rgba(10,132,255,0.06) 38%, transparent 62%), radial-gradient(60% 60% at 90% 18%, rgba(0,229,255,0.14) 0%, rgba(0,229,255,0.05) 42%, transparent 68%)",
          }}
        />
        {/* grid overlay */}
        <svg aria-hidden className="absolute inset-0 opacity-[0.06]">
          <defs>
            <pattern
              id="grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M32 0H0V32"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-muted-foreground md:text-lg">
                Protect • Detect • Respond
              </span>
              <span className="hidden h-px w-24 bg-border lg:block" />
            </div>

            <h1 className="mt-4 text-2xl font-extrabold leading-[1.15] text-foreground md:text-5xl md:leading-[1.3]">
              We Think Like Attackers, So You Don&apos;t Have to!
            </h1>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] text-primary md:text-4xl md:leading-[1.3]">
              <WordByWord />
            </h2>

            {/* View Services */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <CustomLink path="/services">
                <button className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground/90 backdrop-blur transition hover:bg-muted hover:text-foreground">
                  View Services
                </button>
              </CustomLink>
            </div>
          </div>

          {/* RIGHT: Globe */}
          <div className="w-full lg:w-[660px] lg:justify-self-end">
            <div className="relative h-80 sm:h-[460px]">
              <GlobeCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
