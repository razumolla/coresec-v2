import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <AboutUs />
      <Services />
      <FAQ />
    </main>
  );
}
