import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#why-us" },
      { label: "Process", href: "#process" },
      { label: "Applications", href: "#applications" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Custom Foam Inserts", href: "#foam-inserts" },
      { label: "Plastic Machining", href: "#plastic-machining" },
      { label: "Protective Packaging", href: "#services" }
    ]
  },
  {
    title: "Industries",
    links: [
      { label: "Aerospace", href: "#industries" },
      { label: "Medical", href: "#industries" },
      { label: "Electronics", href: "#industries" }
    ]
  }
];

export function Footer() {
  return (
    <footer id="contact" className="dark-panel">
      <div className="container-width grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_2fr_1.1fr]">
        <div>
          <p className="h4 text-white">Precision Plastics & Foam</p>
          <p className="small-text dark-muted mt-4 max-w-sm">
            Custom industrial foam inserts and precision plastic machining for
            teams that need dependable fit, finish, and protection.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="small-text font-semibold text-white">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="small-text focus-ring dark-muted transition hover:text-white"
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
          <p className="small-text font-semibold text-white">Contact</p>
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
          <Link
            href="https://www.linkedin.com"
            aria-label="Precision Plastics & Foam on LinkedIn"
            className="focus-ring mt-6 inline-flex h-10 w-10 items-center justify-center rounded-control border border-white/15 text-slate-200 transition hover:border-steel hover:bg-steel"
          >
            <Linkedin size={18} />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-width flex flex-col gap-3 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Precision Plastics & Foam. All rights reserved.</p>
          <p>Built for precision manufacturing and protective fabrication.</p>
        </div>
      </div>
    </footer>
  );
}
