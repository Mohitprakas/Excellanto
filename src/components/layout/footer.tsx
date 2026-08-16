import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/data";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-secondary text-white">
      <div className="container-xl relative section-padding !pb-10 !pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo height={40} />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-slate-500" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-slate-500" />
                {siteConfig.phone}
              </a>
              <p className="flex items-start gap-2.5 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                {siteConfig.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                say hello
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-accent"
              >
                {siteConfig.email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} All Rights Reserved by Excellanto Ventures
          </p>
          <p className="text-xs text-slate-500">
            AI Software · Digital Marketing · Workflow Automation
          </p>
        </div>
      </div>
    </footer>
  );
}
