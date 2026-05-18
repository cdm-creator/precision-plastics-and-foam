"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TestimonialsSection } from "@/components/TestimonialsSection";
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
  ArrowRight,
  ChevronDown,
  ChevronUp,
  DraftingCompass,
  Gauge,
  Layers,
  Timer,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

const images = {
  foam:
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&fm=webp&q=82&w=1200",
  faq:
    "https://images.pexels.com/photos/32845690/pexels-photo-32845690.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200"
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



const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We support aerospace, oil & gas, medical devices, industrial automation, energy, and custom manufacturing with tailored plastic and foam solutions."
  },
  {
    question: "What types of products do you offer?",
    answer:
      "We offer precision-cut foam inserts, protective packaging, machined plastic components, fabricated plastic parts, and custom material solutions for industrial applications."
  },
  {
    question: "Can you customize products for our needs?",
    answer:
      "Yes. We design around your dimensions, material requirements, handling conditions, production volume, and application goals."
  },
  {
    question: "What materials do you use?",
    answer:
      "Our team works with industrial foams and plastics including polyethylene, EVA, polyurethane, acrylic, HDPE, PVC, nylon, polycarbonate, and application-specific materials."
  },
  {
    question: "How long does production take?",
    answer:
      "Timelines depend on complexity, material availability, and order volume. After reviewing your requirements, we provide a clear production estimate with your quote."
  },
  {
    question: "How can I request a quote?",
    answer:
      "Send us your drawings, dimensions, photos, material needs, or application details through the quote form and our team will follow up with next steps."
  }
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

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-us"
      className="bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.05),transparent_30rem),#f1f6fb] py-20 sm:py-24 lg:py-28"
      aria-labelledby="faq-title"
    >
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: reduceMotion ? 0 : 0.1
            }
          }
        }}
        className="container-width grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-start lg:gap-16"
      >
        <div>
          <motion.p variants={fadeUpVariants} className="eyebrow">
            Frequently Asked Questions
          </motion.p>
          <motion.h2 id="faq-title" variants={fadeUpVariants} className="h2 mt-4 max-w-xl">
            Have questions?
            <br />
            We&apos;ve got answers.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="body-large mt-5 max-w-xl">
            Find quick answers to the most common questions about our solutions, process, and support.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            transition={motionTimings.fadeUp}
            className="relative mt-10 max-w-[36rem] overflow-visible pb-8 pl-5 sm:mt-12 sm:pb-10 sm:pl-7"
          >
            <div className="absolute bottom-0 left-0 right-4 top-10 bg-[var(--color-precision-blue)] [clip-path:polygon(0_0,88%_0,100%_100%,12%_100%)] sm:right-5 sm:top-12" />
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...motionTimings.hero, duration: 0.8 }}
              className="relative ml-5 sm:ml-8"
            >
              <div className="relative aspect-[1.48/1] min-h-[12rem] sm:min-h-[17rem] overflow-hidden shadow-industrial [clip-path:polygon(0_0,88%_0,100%_100%,12%_100%)]">
                <Image
                  src={images.faq}
                  alt="Factory workers reviewing production details on a tablet"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.08,
                delayChildren: reduceMotion ? 0 : 0.08
              }
            }
          }}
          className="grid gap-5"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = isOpen ? ChevronUp : ChevronDown;

            return (
              <motion.article
                key={faq.question}
                variants={fadeUpVariants}
                transition={motionTimings.fadeUp}
                className="overflow-hidden rounded-industrial border border-system bg-white shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left focus-ring sm:px-8"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-heading text-[16px] font-semibold leading-snug text-[var(--color-industrial-navy)] sm:text-xl">
                    {faq.question}
                  </span>
                  <Icon className="h-6 w-6 shrink-0 text-[var(--color-precision-blue)]" strokeWidth={2.4} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-answer-${index}`}
                      key="content"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="body px-6 pb-7 pt-0 text-sm leading-7 sm:px-8 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

function MobileCapabilitySlider({ items }: { items: typeof capabilityStrip }) {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: false, dragFree: false });

  return (
    <div className="md:hidden py-6">
      <div className="overflow-hidden px-4" ref={emblaRef}>
        <div className="flex gap-3">
          {items.map(({ title, text, icon: Icon }) => (
            <div key={title} className="flex-none w-full">
              <article className="rounded-industrial border border-system bg-card p-4 shadow-card flex flex-col">
                <div className="flex items-start gap-3 flex-1">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-technical" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-[var(--color-industrial-navy)]">
                      {title}
                    </h3>
                    <p className="small-text mt-2">{text}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
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
          <div className="container-width">
            {/* Mobile slider */}
            <MobileCapabilitySlider items={capabilityStrip} />

            {/* Desktop / tablet grid */}
            <div className="hidden md:grid gap-px py-8 md:grid-cols-2 lg:grid-cols-4">
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
          </div>
        </section>

        <IndustrialShowcase />

        <CoreCapabilities />

        <section id="foam-inserts" className="bg-white pt-40 pb-12 lg:pb-14">
          <div className="container-width grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-stretch lg:gap-16">
            <FadeIn className="h-full">
              <div className="relative h-full min-h-[24rem] overflow-hidden rounded-industrial shadow-industrial">
                <div className="relative h-full min-h-[24rem]">
                  <Image
                    src={images.foam}
                    alt="Aerospace manufacturing team working with foam and plastic assemblies"
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-industrial bg-white p-5 shadow-industrial">
                  <p className="small-text relative pl-11 text-midnight">
                    <span className="absolute left-0 top-0 text-4xl font-heading font-semibold leading-none text-accent">
                      “
                    </span>
                    From prototype components to mission-ready equipment cases, we build protection around the exact shape, weight, and handling requirements of your program.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="flex h-full flex-col justify-center">
              <p className="eyebrow">Precision Support</p>
              <h2 className="h2 mt-4">The role of precision plastic and foam solutions in aerospace</h2>
              <p className="body mt-5">
                Aerospace and defense programs require repeatable protection, tight tolerances, and careful handling for sensitive components. Our team supports programs where every insert, machined plastic part, and transport system needs to perform reliably.
              </p>
              <div className="mt-9 grid gap-5">
                {[
                  "Precision-fit foam inserts for sensitive aerospace components.",
                  "Machined plastic parts built for repeatability and clean finishes.",
                  "Reusable packaging systems for field, lab, and contractor workflows."
                ].map((point) => (
                  <div key={point} className="flex items-center gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-control bg-[var(--color-industrial-orange)] text-white">
                      <ArrowRight size={17} />
                    </span>
                    <p className="body text-muted-strong">{point}</p>
                  </div>
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

        <FaqSection />

        <TestimonialsSection />

        <FinalCtaBanner />
      </main>
      <Footer />
    </>
  );
}
