"use client";

import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <h1 className="text-center text-4xl font-extrabold text-foreground md:text-5xl">
          Contact{" "}
          <span className="bg-linear-to-r from-primary to-sky-400 bg-clip-text text-transparent">
            Us
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-[65ch] text-center text-base leading-7 text-muted-foreground">
          Need help, a quote, or an urgent incident response? We&apos;re here.
          Tell us what you&apos;re facing and we&apos;ll respond quickly.
        </p>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* Left: intro + contact cards */}
          <div>
            <div className="rounded-2xl bg-card/80 p-6 ring-1 ring-border backdrop-blur">
              <h3 className="text-xl font-semibold text-foreground">
                Need help? We are just a click away!
              </h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                If you&apos;re facing issues or have questions, reach out. Our
                team can scope a security assessment, answer training queries,
                or assist with an active incident.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Phone */}
              <div className="flex items-start gap-3 rounded-2xl bg-card p-5 ring-1 ring-border backdrop-blur">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="mt-1 text-sm leading-6 text-muted-foreground">
                    +65 9089 1887
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 rounded-2xl bg-card p-5 ring-1 ring-border backdrop-blur">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Address</div>
                  <div className="mt-1 text-sm leading-6 text-muted-foreground">
                    27 Roberts lane, Singapore,
                    <br />
                    SG, Singapore 218306
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 rounded-2xl bg-card p-5 ring-1 ring-border backdrop-blur">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="mt-1 text-sm leading-6 text-muted-foreground">
                    service@coresec.com
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 rounded-2xl bg-card p-5 ring-1 ring-border backdrop-blur">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Hours</div>
                  <div className="mt-1 text-sm leading-6 text-muted-foreground">
                    9 AM - 6 PM (Sun - Thu)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map card */}
          <div className="rounded-3xl bg-linear-to-br from-primary/40 via-border/40 to-sky-400/40 p-px">
            <div className="overflow-hidden rounded-3xl bg-card/80 ring-1 ring-border backdrop-blur">
              <iframe
                width="100%"
                height="420"
                className="border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.29840171478426!2d103.85325692100892!3d1.3106855543289075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c6f820f2d7%3A0xc670f64854ff8b20!2s27%20Roberts%20Ln%2C%20Singapore%20218306!5e0!3m2!1sen!2sbd!4v1761526644208!5m2!1sen!2sbd"
                title="CoreSec location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
