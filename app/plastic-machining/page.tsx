"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBottomDivider } from "@/components/HeroBottomDivider";
import { TopBar } from "@/components/layout/top-bar";
import { fadeUpVariants, heroMediaVariants, motionTimings } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Box,
  ClipboardCheck,
  Cog,
  Gauge,
  Layers3,
  PackageCheck,
  PenTool,
  ShieldCheck,
  Timer
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./plastic-machining-page.module.css";

const capabilities = [
  {
    title: "High Precision",
    text: "Tight tolerances and consistent quality.",
    icon: Gauge
  },
  {
    title: "Wide Material Range",
    text: "Work with a variety of engineering plastics.",
    icon: Layers3
  },
  {
    title: "Fast Turnaround",
    text: "Efficient processes for quick delivery.",
    icon: Timer
  },
  {
    title: "Quality Assured",
    text: "Rigorous inspection for reliable components.",
    icon: ShieldCheck
  }
];

const services = [
  {
    number: "01",
    title: "Cut-to-Size",
    text: "Custom cutting of sheets, rods, and tubes with high accuracy.",
    image: "/images/plastic-service-cut-to-size.webp",
    imageAlt: "Plastic film and sheet material being converted on industrial rollers"
  },
  {
    number: "02",
    title: "3D Printing",
    text: "SLA and SLS 3D printing for prototypes and functional components.",
    image: "/images/plastic-service-3d-printing.webp",
    imageAlt: "3D printer head producing a functional prototype component"
  },
  {
    number: "03",
    title: "CNC Routing & Machining",
    text: "Complex machining for intricate parts and large production runs.",
    image: "/images/plastic-service-cnc.webp",
    imageAlt: "CNC machining plastic material with precision tooling"
  },
  {
    number: "04",
    title: "Custom Fabrication",
    text: "On-site custom design, cutting, drilling, and fabrication tailored to your requirements.",
    image: "/images/plastic-service-custom-fabrication.webp",
    imageAlt: "Industrial fabrication machine shaping plastic material"
  },
  {
    number: "05",
    title: "Film Conversion",
    text: "Precision slitting, rewinding, and cutting of plastic films for various industries.",
    image: "/images/plastic-service-film-conversion.webp",
    imageAlt: "Plastic film conversion machine with glossy roll material"
  }
];

const processSteps = [
  {
    title: "Material Preparation",
    text: "We select the right engineering plastics based on your application and performance requirements.",
    icon: Box
  },
  {
    title: "Design & Planning",
    text: "Our team reviews drawings and 3D models to plan the most efficient machining approach.",
    icon: PenTool
  },
  {
    title: "Precision Machining",
    text: "Advanced CNC machines deliver accurate parts with tight tolerances and excellent finishes.",
    icon: Cog
  },
  {
    title: "Quality Inspection",
    text: "Every part is inspected for dimensional accuracy and overall quality before moving forward.",
    icon: ClipboardCheck
  }
];

const machiningHighlights = [
  {
    eyebrow: "PRECISION MACHINING",
    title: "Machined plastic parts built around real application needs",
    text: "From complex routed profiles to close-tolerance production parts, our machining approach is planned around material behavior, part geometry, surface finish, and end-use performance.",
    image:
      "https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1400",
    imageAlt: "Close-up of CNC machine tooling in an industrial setting"
  },
  {
    eyebrow: "MATERIAL SUPPORT",
    title: "Engineering plastic expertise from prototype through production",
    text: "We help match the right plastic stock, machining method, and finishing path to your requirements so parts are reliable, repeatable, and ready for demanding industrial use.",
    image:
      "https://images.pexels.com/photos/11048741/pexels-photo-11048741.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1400",
    imageAlt: "Industrial factory with plastic processing tanks and equipment"
  }
];

function Reveal({
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

function SectionHeader({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.sectionHeader}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2 mt-3">{title}</h2>
      <p className="body mt-4">{text}</p>
    </div>
  );
}

export default function PlasticMachiningPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <TopBar />
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="plastic-machining-title">
          <motion.div
            className={styles.heroImage}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={heroMediaVariants}
            transition={{ ...motionTimings.hero, duration: 1.1 }}
          >
            <Image
              src="/images/plastic-machining-hero.webp"
              alt="CNC machine cutting a white engineered plastic component"
              fill
              priority
              sizes="100vw"
              className={styles.image}
            />
          </motion.div>
          <div className={styles.heroOverlay} />
          <div className={styles.heroVignette} />
          <HeroBottomDivider />

          <div className="container-width">
            <motion.div
              className={styles.heroContent}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: reduceMotion ? 0 : 0.1
                  }
                }
              }}
            >
              <motion.nav variants={fadeUpVariants} className={`small-text ${styles.breadcrumb}`} aria-label="Breadcrumb">
                <Link href="/" className={styles.breadcrumbLink}>
                  Home
                </Link>
                <span>/</span>
                <span>Plastic Machining</span>
              </motion.nav>
              <motion.h1 id="plastic-machining-title" variants={fadeUpVariants} className={`h1 ${styles.heroTitle}`}>
                Plastic Machining
              </motion.h1>
              <motion.p variants={fadeUpVariants} className={`body-large ${styles.heroText}`}>
                High-precision machining solutions for engineering plastics. From
                prototypes to production, we deliver accuracy, consistency, and
                performance you can rely on.
              </motion.p>
              <motion.div variants={fadeUpVariants} className={styles.heroActions}>
                <Link href="/plastic-machining#services" className="btn-primary">
                  Explore Our Services
                </Link>
                <Link href="/contact" className={`btn-outline ${styles.darkOutline}`}>
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className={styles.capabilityStrip} aria-label="Plastic machining capabilities">
          <div className={`container-width ${styles.capabilityGrid}`}>
            {capabilities.map(({ title, text, icon: Icon }) => (
              <Reveal key={title} className={styles.capabilityItem}>
                <Icon className={styles.capabilityIcon} size={26} strokeWidth={1.8} />
                <div>
                  <h2 className="h4">{title}</h2>
                  <p className="small-text mt-2">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="services" className={`${styles.section} ${styles.services}`}>
          <div className="container-width">
            <Reveal>
              <SectionHeader
                eyebrow="OUR SERVICES"
                title="Precision. Quality. Custom Solutions."
                text="We offer a wide range of plastic machining services to meet the diverse needs of industries across the globe."
              />
            </Reveal>
            <motion.div
              className={styles.servicesGrid}
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
            >
              {services.map(({ number, title, text, image, imageAlt }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUpVariants}
                  transition={motionTimings.fadeUp}
                  className={`${styles.serviceCard} ${index > 2 ? styles.serviceWide : ""}`}
                >
                  <div className={styles.serviceImage}>
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes={index > 2 ? "(min-width: 1024px) 42vw, 100vw" : "(min-width: 1024px) 28vw, (min-width: 768px) 50vw, 100vw"}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceNumber}>{number}</span>
                    <span className={styles.serviceLine} aria-hidden="true" />
                    <h3 className={`h3 ${styles.serviceTitle}`}>{title}</h3>
                    <p className={`small-text ${styles.serviceText}`}>{text}</p>
                    <span className={styles.serviceArrow} aria-hidden="true">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.processSection}`}>
          <div className="container-width">
            <Reveal>
              <SectionHeader
                eyebrow="OUR PROCESS"
                title="From Concept to Completion"
                text="A streamlined process that ensures precision, quality, and on-time delivery every time."
              />
            </Reveal>
            <motion.div
              className={styles.processTimeline}
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
            >
              {processSteps.map(({ title, text, icon: Icon }) => (
                <motion.article key={title} variants={fadeUpVariants} className={styles.processStep}>
                  <span className={styles.processIcon} aria-hidden="true">
                    <Icon size={28} strokeWidth={1.7} />
                  </span>
                  <h3 className={`h4 ${styles.processTitle}`}>{title}</h3>
                  <p className={`small-text ${styles.processText}`}>{text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.detailSection}`}>
          <div className={`container-width ${styles.detailRows}`}>
            {machiningHighlights.map(({ eyebrow, title, text, image, imageAlt }, index) => (
              <Reveal
                key={title}
                className={`${styles.detailRow} ${index % 2 === 1 ? styles.detailRowReverse : ""}`}
              >
                <div className={styles.detailImage}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.detailCopy}>
                  <p className="eyebrow">{eyebrow}</p>
                  <h2 className="h2 mt-3">{title}</h2>
                  <p className="body mt-4">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.cta}>
          <div className={styles.ctaImage}>
            <Image
              src="https://images.pexels.com/photos/36522027/pexels-photo-36522027.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1800"
              alt="Advanced industrial CNC machine close-up in a manufacturing setting"
              fill
              sizes="100vw"
              className={styles.image}
            />
          </div>
          <div className={styles.ctaOverlay} />
          <Reveal>
            <div className={`container-width ${styles.ctaPanel}`}>
              <div>
                <p className="eyebrow">REQUEST SUPPORT</p>
                <h2 className={`h2 mt-3 ${styles.ctaTitle}`}>
                  Let&apos;s Build Something Precise
                </h2>
                <p className={`body ${styles.ctaText}`}>
                  Share your requirements and our experts will get back to you
                  with the best solution, from material selection and machining
                  strategy to delivery-ready plastic components.
                </p>
              </div>
              <Link href="/contact" className={`btn-primary ${styles.ctaAction}`}>
                Request a Quote
                <PackageCheck size={17} />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
