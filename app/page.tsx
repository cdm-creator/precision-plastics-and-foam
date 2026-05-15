"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ApplicationsSlider } from "@/components/home/applications-slider";
import { CoreCapabilities } from "@/components/home/core-capabilities";
import { FinalCtaBanner } from "@/components/home/final-cta-banner";
import { HeroSlider } from "@/components/home/hero-slider";
import { IndustrialShowcase } from "@/components/home/industrial-showcase";
import { MaterialsCapabilities } from "@/components/home/materials-capabilities";
import { ProcessSection } from "@/components/home/process-section";
import { ServiceCapabilities } from "@/components/home/service-capabilities";
import { ServicesSlider } from "@/components/home/services-slider";
import { TopBar } from "@/components/layout/top-bar";
import {
  fadeUpVariants,
  motionTimings
} from "@/lib/motion";
import {
  DraftingCompass,
  Gauge,
  Layers,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const images = {
  foam:
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&fm=webp&q=82&w=1200",
  cad:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&fm=webp&q=82&w=1200"
};

const capabilityStrip = [
  {
    title: "Precision Cutting",
    text: "Clean profiles, tight cavities, and repeatable component fit.",
    icon: Gauge
  },
  {
    title: "CAD Guided Design",
    text: "Layouts planned around parts, tools, and handling requirements.",
    icon: DraftingCompass
  },
  {
    title: "Industrial Materials",
    text: "Foam and plastic stock selected for the application.",
    icon: Layers
  },
  {
    title: "Fast Turnaround",
    text: "Quote support from prototype through production runs.",
    icon: Timer
  }
];



const reasons = [
  "Precision manufacturing",
  "Industrial-grade materials",
  "Custom-fit solutions",
  "Fast quote support",
  "Prototype to production",
  "Reliable fabrication"
];

function FadeIn({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpVariants}
      transition={motionTimings.fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">
        {eyebrow}
      </p>
      <h2 className={`h2 mt-3 ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {text ? (
        <p className={`body mt-4 ${light ? "dark-muted" : ""}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="home">
        <HeroSlider />

        <section className="border-y border-system bg-card">
          <div className="container-width grid gap-px py-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilityStrip.map(({ title, text, icon: Icon }) => (
              <FadeIn
                key={title}
                className="capability-item flex gap-4 border-system bg-card py-5 md:px-4 lg:border-r"
              >
                <Icon className="capability-item__icon h-6 w-6 shrink-0 text-technical" />
                <div>
                  <h2 className="h4 capability-item__title">
                    {title}
                  </h2>
                  <p className="small-text mt-2">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <IndustrialShowcase />

        <CoreCapabilities />

        <section id="foam-inserts" className="section-padding pt-40">
          <div className="container-width grid gap-12 lg:grid-cols-[0.9fr_1fr]">
            <FadeIn className="image-frame">
              <Image
                src={images.foam}
                alt="Custom layered foam insert layout"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-industrial border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
                <p className="small-text font-semibold text-white">
                  Layered foam layouts for protection, presentation, and fast
                  inventory control.
                </p>
              </div>
            </FadeIn>
            <FadeIn className="flex flex-col justify-center">
              <SectionHeading
                eyebrow="Foam inserts"
                title="Engineered Foam Inserts for Protection & Organization"
                text="Custom cavities, layered assemblies, and case-ready layouts protect sensitive equipment while giving teams a cleaner way to store, ship, and manage high-value products."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Shock Protection",
                  "Tool Control",
                  "Case Ready",
                  "Precision Fit",
                  "Custom Layouts"
                ].map((chip) => (
                  <span
                    key={chip}
                    className="chip-outline"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <ServicesSlider />

        <ServiceCapabilities />

        <ProcessSection />

        <MaterialsCapabilities />

        <ApplicationsSlider />

        <section id="why-us" className="section-padding bg-secondary">
          <div className="container-width grid gap-12 lg:grid-cols-[1fr_0.9fr]">
            <FadeIn>
              <SectionHeading
                eyebrow="Why choose us"
                title="Precision engineering discipline with practical manufacturing support"
                text="Precision Plastics & Foam helps B2B teams move from rough requirement to dependable fabricated solution without losing sight of cost, fit, and real-world handling."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="feature-card flex items-center gap-3 bg-secondary p-4"
                  >
                    <ShieldCheck className="h-5 w-5 text-technical" />
                    <span className="small-text font-semibold text-muted-strong">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn className="image-frame">
              <Image
                src={images.cad}
                alt="CAD planning and industrial design review"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" />
            </FadeIn>
          </div>
        </section>

        <FinalCtaBanner />
      </main>
      <Footer />
    </>
  );
}
