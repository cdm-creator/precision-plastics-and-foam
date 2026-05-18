"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, heroMediaVariants, motionTimings } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contactCards = [
  {
    title: "Phone",
    value: "+1 (555) 123-4567",
    detail: "Mon - Fri: 8:00 AM - 5:00 PM",
    icon: Phone
  },
  {
    title: "Email",
    value: "info@precisionplastics.com",
    detail: "We reply within 24 hours",
    icon: Mail
  },
  {
    title: "Address",
    value: "123 Precision Drive",
    detail: "Elkhart, IN 46516, USA",
    icon: MapPin
  },
  {
    title: "Working Hours",
    value: "Mon - Fri: 8:00 AM - 5:00 PM",
    detail: "Sat - Sun: Closed",
    icon: Clock
  }
];

const fields = [
  { label: "Full Name *", type: "text", name: "name" },
  { label: "Email Address *", type: "email", name: "email" },
  { label: "Phone Number *", type: "tel", name: "phone" },
  { label: "Subject *", type: "text", name: "subject" }
];

const socials = [
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com" },
  { label: "Email", icon: Mail, href: "mailto:info@precisionplastics.com" }
];

function FadeIn({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpVariants}
      transition={{ ...motionTimings.fadeUp, delay: reduceMotion ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-primary text-white">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={heroMediaVariants}
            transition={{ ...motionTimings.hero, duration: 1 }}
            className="absolute inset-0 -z-30"
          >
            <Image
              src="/images/contact-hero.webp"
              alt="Precision Plastics & Foam reception and office"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(6,21,44,0.9)_0%,rgba(6,21,44,0.62)_42%,rgba(6,21,44,0.12)_76%,transparent_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,10,22,0.08),rgba(3,10,22,0.68))]" />
          <HeroBottomDivider />

          <div className="container-width grid min-h-[34rem] items-center pt-24 pb-40">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } }
              }}
              className="max-w-2xl"
            >
              <motion.nav variants={fadeUpVariants} aria-label="Breadcrumb" className="small-text flex items-center gap-2 text-white/75">
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white">Contact Us</span>
              </motion.nav>
              <motion.h1 variants={fadeUpVariants} className="h1 mt-5 text-white">
                Contact Us
              </motion.h1>
              <motion.p variants={fadeUpVariants} className="body-large mt-5 max-w-xl text-white/85">
                Have a question, need a quote, or want to discuss your project?
                We&apos;re here to help.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="bg-secondary py-14">
          <motion.div
            className="container-width grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } }
            }}
          >
            {contactCards.map(({ title, value, detail, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeUpVariants}
                transition={motionTimings.fadeUp}
                className="industrial-card p-6"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-steel text-white">
                  <Icon size={22} />
                </span>
                <h2 className="h4">{title}</h2>
                <p className="mt-3 font-semibold text-midnight">{value}</p>
                <p className="small-text mt-1">{detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="bg-steel/5 py-20">
          <div className="container-width">
            <FadeIn className="mx-auto mb-10 max-w-3xl text-center">
              <p className="eyebrow">Get in touch</p>
              <h2 className="h2 mt-3">Let&apos;s Discuss Your Project</h2>
              <p className="body mx-auto mt-4 max-w-2xl">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
            </FadeIn>

            <div className="grid items-stretch gap-8 lg:grid-cols-[1.06fr_0.94fr]">
            <FadeIn className="industrial-card flex h-full flex-col bg-card p-6 sm:p-8 lg:p-10">
              <form className="grid flex-1 gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <label key={field.name} className="grid gap-2">
                      <span className="small-text font-semibold text-muted-strong">
                        {field.label}
                      </span>
                      <input
                        type={field.type}
                        name={field.name}
                        className="focus-ring h-12 rounded-control border border-system bg-white px-4 text-muted-strong outline-none transition focus:border-steel"
                      />
                    </label>
                  ))}
                </div>
                <label className="grid gap-2">
                  <span className="small-text font-semibold text-muted-strong">
                    Message *
                  </span>
                  <textarea
                    name="message"
                    rows={7}
                    className="focus-ring min-h-44 resize-y rounded-control border border-system bg-white px-4 py-3 text-muted-strong outline-none transition focus:border-steel"
                  />
                </label>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button type="submit" className="btn-primary w-fit whitespace-nowrap">
                    Send Message
                    <Send size={17} />
                  </button>
                  <p className="small-text flex items-center gap-2">
                    <Lock size={16} className="text-technical" />
                    Your information is secure and will never be shared.
                  </p>
                </div>
              </form>
            </FadeIn>

            <FadeIn delay={0.08} className="grid h-full grid-rows-[1fr_auto] gap-6">
              <div className="industrial-card overflow-hidden bg-card">
                <iframe
                  title="Precision Plastics & Foam map"
                  src="https://www.google.com/maps?q=Elkhart,%20IN%2046516,%20USA&output=embed"
                  className="h-full min-h-[330px] w-full border-0 sm:min-h-[350px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="industrial-card bg-card p-6">
                <h2 className="h4">Connect With Us</h2>
                <p className="small-text mt-2">
                  Follow our work, ask a question, or send your project details
                  directly.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socials.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-system bg-secondary text-muted-strong transition hover:border-steel hover:bg-steel hover:text-white"
                    >
                      <Icon size={19} />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="relative isolate overflow-hidden bg-primary py-12 text-white">
            <Image
              src="https://images.pexels.com/photos/37335825/pexels-photo-37335825.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1800"
              alt="Close-up CNC machine head in a factory machining environment"
              fill
              sizes="100vw"
              className="-z-30 object-cover object-center"
            />
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.8)_48%,rgba(15,23,42,0.9)_100%)]" />
            <div className="container-width flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="h2 text-white">
                  Browse services for your goals.
                </h2>
                <p className="body mt-3 text-white/75">
                  From precision machining to custom plastic fabrication,
                  we&apos;ve got you covered.
                </p>
              </div>
              <Link href="/plastic-machining" className="btn-primary w-fit shrink-0 whitespace-nowrap">
                View Our Services
                <ArrowRight size={17} />
              </Link>
            </div>
          </section>
        </FadeIn>

        <section className="section-padding bg-steel/5">
          <div className="container-width grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14">
            <FadeIn className="border-system lg:border-r lg:pr-12">
              <div className="flex items-center gap-3">
                <span className="bullet-dot" />
                <p className="eyebrow">Who we are</p>
              </div>
              <p className="mt-8 font-heading text-[clamp(2.35rem,4.1vw,4.15rem)] font-semibold leading-none text-technical">
                10 Years
              </p>
              <p className="body mt-5 max-w-sm">
                We&apos;ve delivered trusted, exceptional services for over 13
                years.
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h2 className="h2">What We&apos;re About</h2>
              <div className="body mt-6 grid gap-5">
                <p>
                  Precision Plastics & Foam is located in Elkhart, IN and
                  specializes in precision plastic machining and custom foam
                  solutions for a wide range of industries. Our process ensures
                  we deliver high-quality parts with accuracy, consistency, and
                  on-time results.
                </p>
                <p>
                  From prototype to production, we focus on clear communication,
                  advanced equipment, and strict quality control to bring your
                  ideas to life.
                </p>
                <p>
                  No project is too big or too small. Contact us today for a
                  free quote!
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="relative isolate overflow-hidden bg-primary py-24 text-white">
            <Image
              src="/images/final-cta-bg.webp"
              alt="Dark CNC machining and precision fabrication environment"
              fill
              sizes="100vw"
              className="-z-30 object-cover"
            />
            <div className="absolute inset-0 -z-20 bg-midnight/90" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.14),transparent_26rem)] opacity-80" />
            <motion.div
              className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:24px_24px] opacity-14"
              animate={reduceMotion ? undefined : { backgroundPosition: ["0px 0px", "24px 24px"] }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            />
            <div className="container-width text-center">
              <p className="eyebrow">Ready to get started?</p>
              <h2 className="h2 mt-4 text-white">Have a Project in Mind?</h2>
              <p className="body mx-auto mt-5 max-w-2xl text-white/75">
                Contact us today for a free consultation and quote. Let&apos;s
                turn your ideas into precision solutions.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary whitespace-nowrap">
                  Request a Quote
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-light-pill whitespace-nowrap"
                >
                  <Phone size={17} />
                  Call Us Now
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
