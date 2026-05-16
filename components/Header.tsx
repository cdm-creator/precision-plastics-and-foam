"use client";

import { drawerVariants, motionTimings } from "@/lib/motion";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Foam Inserts", href: "/foam-inserts" },
  { label: "Plastic Machining", href: "/plastic-machining" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => setScrolled(latest > 12));
  }, [scrollY]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-system bg-white/95 shadow-card backdrop-blur"
          : "border-transparent bg-white/80 backdrop-blur"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="container-width flex min-h-24 items-center justify-between py-4"
      >
        <Link
          href="#home"
          aria-label="Precision Plastics & Foam home"
          className="focus-ring flex items-center"
        >
          <Image
            src="/images/logo.webp"
            alt="Precision Plastics & Foam"
            width={260}
            height={65}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-text focus-ring transition hover:text-technical"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="btn-primary"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-control border border-system bg-card text-midnight transition hover:border-steel hover:text-technical lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            transition={motionTimings.drawer}
            className="border-t border-system bg-card px-5 pb-6 shadow-elevated lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="nav-text focus-ring border-b border-system py-4 transition hover:text-technical"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-5"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
