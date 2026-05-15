"use client";

import { fadeUpVariants, motionTimings } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Custom Foam Inserts",
    description:
      "Precision-cut foam protection solutions designed for industrial equipment, electronics, medical devices, and tools.",
    image: "/images/showcase-foam-inserts.webp?v=2",
    href: "#foam-inserts"
  },
  {
    title: "Plastic Machining",
    description:
      "Custom CNC-machined plastic components built for industrial, aerospace, and manufacturing applications.",
    image: "/images/showcase-plastic-machining.webp?v=2",
    href: "#plastic-machining"
  },
  {
    title: "Engineering & Planning",
    description:
      "Collaborative design, CAD planning, and fabrication workflows focused on precision and production quality.",
    image: "/images/showcase-engineering-planning.webp?v=2",
    href: "#process"
  }
];

export function IndustrialShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="industrial-showcase">
      <div className="container-width">
        <div className="industrial-showcase__header">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariants}
            transition={motionTimings.fadeUp}
          >
            <p className="eyebrow">Precision Engineered Solutions</p>
            <h2 className="h2 industrial-showcase__title">
              High standards of <strong>manufacturing</strong> and{" "}
              <strong>precision fabrication</strong>
            </h2>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariants}
            transition={{ ...motionTimings.fadeUp, delay: 0.08 }}
            className="body industrial-showcase__intro"
          >
            We deliver custom foam inserts and plastic machining solutions with
            high attention to detail, industrial-grade materials, and dependable
            production quality.
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.12
              }
            }
          }}
          className="industrial-showcase__grid"
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUpVariants}
              transition={motionTimings.fadeUp}
              className="showcase-card group"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="showcase-card__image"
              />
              <div className="showcase-card__overlay" />
              <div className="showcase-card__content">
                <h3 className="showcase-card__title">{card.title}</h3>
                <p className="showcase-card__description">
                  {card.description}
                </p>
                <Link href={card.href} className="showcase-card__link">
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
