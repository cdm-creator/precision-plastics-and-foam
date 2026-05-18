import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Custom Foam Inserts", href: "/foam-inserts" },
      { label: "Plastic Machining", href: "/plastic-machining" }
    ]
  },
  {
    title: "Industries",
    links: [
      { label: "Aerospace & Defense", href: "/industries/aerospace-defense" },
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Medical Devices", href: "/industries/medical-devices" },
      { label: "Industrial Automation", href: "/industries/industrial-automation" },
      { label: "Energy & Power", href: "/industries/energy-power" },
      { label: "Custom Manufacturing & R&D", href: "/industries/custom-manufacturing-rd" }
    ]
  }
];

const socialLinks = [
  {
    label: "Precision Plastics & Foam on Twitter",
    href: "https://twitter.com",
    icon: Twitter
  },
  {
    label: "Precision Plastics & Foam on Facebook",
    href: "https://www.facebook.com",
    icon: Facebook
  },
  {
    label: "Precision Plastics & Foam on LinkedIn",
    href: "https://www.linkedin.com",
    icon: Linkedin
  },
  {
    label: "Precision Plastics & Foam on YouTube",
    href: "https://www.youtube.com",
    icon: Youtube
  }
];

export function Footer() {
  return (
    <footer id="contact" className={`dark-panel ${styles.footer}`}>
      <div className="container-width grid gap-10 py-20 md:grid-cols-2 lg:grid-cols-[1.35fr_2.25fr_1.1fr]">
        <div>
          <Link
            href="/"
            aria-label="Precision Plastics & Foam home"
            className="focus-ring inline-flex"
          >
            <Image
              src="/images/dark-bg-logo.webp"
              alt="Precision Plastics & Foam"
              width={280}
              height={75}
              className={styles.logo}
            />
          </Link>
          <p className="small-text dark-muted mt-4 max-w-sm">
            Custom industrial foam inserts and precision plastic machining for
            teams that need dependable fit, finish, and protection.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className={styles.heading}>{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`small-text focus-ring dark-muted ${styles.footerLink}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <p className={styles.heading}>Contact</p>
          <ul className="small-text dark-muted mt-4 space-y-4">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <span>(555) 014-8290</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-accent" />
              <span>quotes@precisionplasticsfoam.com</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>Industrial address placeholder</span>
            </li>
          </ul>
          <div className={styles.socials}>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className={`focus-ring ${styles.socialLink}`}
              >
                <Icon size={16} strokeWidth={2.2} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={`border-t border-white/10 ${styles.bottomBar}`}>
        <div className="container-width flex flex-col gap-3 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Precision Plastics & Foam. All rights reserved.</p>
          <p>
            Powered by{" "}
            <Link
              href="https://coozmoo.com/?utm_medium=client_website"
              className="focus-ring text-slate-200 transition hover:text-accent"
            >
              Coozmoo
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.bottomLine} aria-hidden="true" />
    </footer>
  );
}
