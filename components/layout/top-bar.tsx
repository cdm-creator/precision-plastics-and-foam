"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter
} from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    label: "(+1) 212-946-2707",
    href: "tel:+12129462707",
    icon: Phone
  },
  {
    label: "info@precisionplasticsfoam.com",
    href: "mailto:info@precisionplasticsfoam.com",
    icon: Mail
  },
  {
    label: "112 W 34th St, New York",
    href: "https://maps.google.com/?q=112%20W%2034th%20St%2C%20New%20York",
    icon: MapPin,
    hideOnMobile: true
  }
];

const socialItems = [
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "Twitter X", href: "https://www.x.com", icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram }
];

export function TopBar() {
  return (
    <motion.aside
      aria-label="Company contact information"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="top-bar"
    >
      <div className="container-width flex min-h-11 items-center justify-between gap-4">
        <ul className="flex min-w-0 items-center gap-3 md:gap-4">
          {contactItems.map(({ label, href, icon: Icon, hideOnMobile }, index) => (
            <li
              key={label}
              className={`flex items-center gap-3 ${
                hideOnMobile ? "hidden md:flex" : ""
              }`}
            >
              {index > 0 ? <span className="top-bar-separator hidden sm:block" /> : null}
              <Link href={href} className="top-bar-link whitespace-nowrap">
                <Icon className="top-bar-icon h-4 w-4 shrink-0" />
                <span className={label.includes("@") ? "hidden sm:inline" : ""}>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex shrink-0 items-center gap-1" aria-label="Social links">
          {socialItems.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                aria-label={label}
                className="top-bar-social"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
}
