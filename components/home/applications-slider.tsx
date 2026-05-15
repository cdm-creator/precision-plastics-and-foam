"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./applications-slider.module.css";

const applications = [
  {
    title: "Foam Caps",
    description:
      "Protective foam caps designed to secure and cushion exposed edges, corners, and sensitive surfaces.",
    image:
      "https://images.pexels.com/photos/18372333/pexels-photo-18372333.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Protective foam material used for industrial cushioning"
  },
  {
    title: "Foam Assemblies",
    description:
      "Multi-layer foam assemblies built for structured protection, spacing, and product support.",
    image:
      "https://images.pexels.com/photos/34955385/pexels-photo-34955385.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Layered custom foam insert assembly"
  },
  {
    title: "Plain Pads",
    description:
      "Custom foam pads used for cushioning, blocking, bracing, and impact protection.",
    image:
      "https://images.pexels.com/photos/18372333/pexels-photo-18372333.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Cut foam pads and protective insert material"
  },
  {
    title: "Case Inserts",
    description:
      "Precision-cut case inserts for tools, cameras, instruments, electronics, and field equipment.",
    image:
      "https://images.pexels.com/photos/14526291/pexels-photo-14526291.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Precision foam case insert for tools and equipment"
  },
  {
    title: "Die-Cut Pads",
    description:
      "Die-cut foam pads shaped for repeatable fit, clean presentation, and reliable protection.",
    image:
      "https://images.pexels.com/photos/34955385/pexels-photo-34955385.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Die-cut foam cavities for repeatable protection"
  },
  {
    title: "Custom Packaging",
    description:
      "Protective packaging solutions designed around product size, weight, sensitivity, and handling needs.",
    image:
      "https://images.pexels.com/photos/35708479/pexels-photo-35708479.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Industrial foam packaging and cushioning system"
  },
  {
    title: "Military & Defense",
    description:
      "Durable foam protection for mission-critical equipment, kits, cases, and field-use products.",
    image:
      "https://images.pexels.com/photos/9607054/pexels-photo-9607054.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Industrial field environment for durable equipment protection"
  },
  {
    title: "Entertainment",
    description:
      "Custom foam inserts for microphones, cameras, audio equipment, and production gear.",
    image:
      "https://images.pexels.com/photos/34929081/pexels-photo-34929081.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Equipment planning workspace for custom production gear inserts"
  },
  {
    title: "Medical Devices",
    description:
      "Protective foam inserts for medical instruments, devices, and sensitive healthcare equipment.",
    image:
      "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Precision planning for sensitive device protection"
  },
  {
    title: "Electronics Packaging",
    description:
      "Anti-static and protective foam solutions for delicate electronic components and devices.",
    image:
      "https://images.pexels.com/photos/26510355/pexels-photo-26510355.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1200",
    imageAlt: "Precision technical component protected for industrial handling"
  }
];

export function ApplicationsSlider() {
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    duration: 40
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi || reduceMotion || isPaused) {
      return;
    }

    const autoplay = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 7200);

    return () => window.clearInterval(autoplay);
  }, [emblaApi, isPaused, reduceMotion]);

  return (
    <section id="applications" className={styles.section} aria-labelledby="applications-title">
      <div className={`container-width ${styles.inner}`}>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.09
              }
            }
          }}
          className={styles.header}
        >
          <div className={styles.copy}>
            <motion.p variants={fadeUpVariants} className="eyebrow">
              Applications
            </motion.p>
            <motion.h2 id="applications-title" variants={fadeUpVariants} className={`h2 ${styles.title}`}>
              Engineered foam assemblies, inserts, and cushioning systems
            </motion.h2>
            <motion.p variants={fadeUpVariants} className={`body ${styles.intro}`}>
              Custom foam solutions are built for protection, organization,
              presentation, and secure handling across industrial, medical,
              electronics, military, and manufacturing applications.
            </motion.p>
          </div>

          <motion.div variants={fadeUpVariants} className={styles.controls}>
            <button
              type="button"
              className={styles.arrowButton}
              aria-label="Previous application"
              onClick={scrollPrev}
            >
              <ArrowLeft size={19} />
            </button>
            <button
              type="button"
              className={styles.arrowButton}
              aria-label="Next application"
              onClick={scrollNext}
            >
              <ArrowRight size={19} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          transition={motionTimings.fadeUp}
          className={styles.viewport}
          ref={emblaRef}
          tabIndex={0}
          role="region"
          aria-label="Applications slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              scrollNext();
            }

            if (event.key === "ArrowLeft") {
              event.preventDefault();
              scrollPrev();
            }
          }}
        >
          <div className={styles.track}>
            {applications.map(({ title, description, image, imageAlt }) => (
              <div className={styles.slide} key={title}>
                <motion.article
                  className={styles.card}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={motionTimings.luxuryHover}
                >
                  <div className={styles.imageWrap}>
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="(min-width: 1440px) 18vw, (min-width: 1024px) 24vw, (min-width: 768px) 48vw, 100vw"
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.titleRow}>
                      <h3 className={`h4 ${styles.cardTitle}`}>{title}</h3>
                      <span className={styles.arrow} aria-hidden="true">
                        <ArrowRight size={17} />
                      </span>
                    </div>
                    <p className={`small-text ${styles.description}`}>{description}</p>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
