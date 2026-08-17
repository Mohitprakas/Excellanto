"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { useCms } from "@/lib/cms/provider";

export function Footer() {
  const { settings, services } = useCms();
  const footerServices = services.slice(0, 6).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.shortTitle,
  }));

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-secondary text-white">
      <div className="container-xl relative section-padding !pb-10 !pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo height={40} src={settings.logo?.src} alt={settings.logo?.alt} ariaLabel={settings.logoAriaLabel} />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              {settings.description}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${settings.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-slate-500" />
                {settings.email}
              </a>
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-slate-500" />
                {settings.phone}
              </a>
              <p className="flex items-start gap-2.5 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                {settings.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {settings.footerServicesTitle}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerServices.map((link) => (
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
                {settings.footerCompanyTitle}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {settings.footerCompanyLinks.map((link) => (
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
                {settings.footerResourcesTitle}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {settings.footerResourceLinks.map((link) => (
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
                href={`mailto:${settings.email}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-accent"
              >
                {settings.email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {settings.copyright}
          </p>
          <p className="text-xs text-slate-500">{settings.footerTagline}</p>
        </div>
      </div>
    </footer>
  );
}
