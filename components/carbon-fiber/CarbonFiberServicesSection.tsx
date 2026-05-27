"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Carbon Fiber Machining",
    description:
      "We provide precision machining of carbon fiber materials for industrial applications that require clean edges and repeatable performance across demanding production environments.",
    image: "/images/carbon-service-machining.webp",
    imageAlt: "CNC machining carbon fiber material",
    href: "/contact"
  },
  {
    title: "Carbon Fiber Batch Production",
    description:
      "Custom carbon fiber production solutions built for scalable manufacturing requirements, consistent part quality and efficient support from prototype validation through larger production runs.",
    image: "/images/carbon-service-batch-production.webp",
    imageAlt: "Stacked machined carbon fiber parts prepared for batch production",
    href: "/contact"
  },
  {
    title: "Carbon Fiber Tubes",
    description:
      "Precision carbon fiber tube solutions designed for lightweight strength, durable structural performance, clean cut finishes, and dependable fit for industrial, robotic, and engineered assemblies.",
    image: "/images/carbon-service-tubes.webp",
    imageAlt: "Rows of round carbon fiber tubes",
    href: "/contact"
  }
];

export function CarbonFiberServicesSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-width">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="eyebrow">Carbon Fiber Machining and Fabrication</p>
            <h2 className="h2 mt-3">
              Carbon Fiber Machining and Fabrication
            </h2>
          </div>
          <p className="body">
            We specialize in precision CNC machining and fabrication of
            high-performance carbon fiber components. From prototype to
            production, we deliver lightweight parts with tight tolerances. We
            help customers turn complex composite designs into durable,
            accurate components with quality and speed
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.title}
              className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_26px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-72 overflow-hidden rounded-t-xl bg-midnight">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                
                <h2 className="font-heading text-xl font-semibold leading-tight text-accent">
                  {service.title}
                </h2>
                <p className="mt-3 body leading-7 text-[#5f6368]">
                  {service.description}
                </p>
                <div className="mt-5 mb-3">
                  <Link
                    href={service.href}
                    className="btn-primary px-5 py-3 text-sm shadow-none"
                  >
                    Request a Quote
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
