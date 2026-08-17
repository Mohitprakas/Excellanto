"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ServicesMegaMenu } from "@/components/layout/services-mega-menu";
import { Logo } from "@/components/ui/logo";
import { useCms } from "@/lib/cms/provider";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServices =
    pathname === "/services" || pathname.startsWith("/services/");
  const transparent = (isHome || isServices) && !scrolled && !megaOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const { settings, services, categories } = useCms();
  const navLinks = settings.navLinks;
  const servicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          transparent
            ? "border-b border-white/10 bg-transparent"
            : "border-b border-border/80 bg-white/95 shadow-[0_1px_0_rgb(15_23_42_/_0.04)] backdrop-blur-xl"
        )}
      >
        <div className="container-xl flex h-16 items-center justify-between md:h-[4.25rem]">
          <Logo dark={!transparent} height={34} priority src={settings.logo?.src} alt={settings.logo?.alt} ariaLabel={settings.logoAriaLabel} />

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label={settings.primaryNavAria}>
            {navLinks.map((link) => {
              if ("mega" in link && link.mega) {
                return (
                  <ServicesMegaMenu
                    key={link.href}
                    open={megaOpen}
                    onOpen={() => setMegaOpen(true)}
                    onClose={() => setMegaOpen(false)}
                    light={transparent}
                  />
                );
              }

              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-[13px] font-bold tracking-[-0.01em] transition-colors",
                    transparent
                      ? active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : active
                        ? "text-primary"
                        : "text-secondary/75 hover:text-secondary"
                  )}
                  onMouseEnter={() => setMegaOpen(false)}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={cn(
                        "absolute inset-0 -z-10 rounded-lg",
                        transparent ? "bg-white/15" : "bg-primary/[0.07]"
                      )}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className={cn(
                "flex items-center gap-2 text-[13px] font-bold transition-colors",
                transparent
                  ? "text-white/85 hover:text-white"
                  : "text-secondary/70 hover:text-primary"
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              {settings.phone}
            </a>
            <MagneticButton
              href={settings.headerCta.href}
              size="sm"
              strength={0.15}
              className={cn(
                transparent &&
                  "!bg-white !text-secondary hover:!bg-white/90 shadow-none"
              )}
            >
              {settings.headerCta.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </MagneticButton>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden",
              transparent
                ? "border-white/25 bg-white/10 text-white"
                : "border-border bg-white text-secondary"
            )}
            onClick={() => setOpen(true)}
            aria-label={settings.openMenu}
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {megaOpen && (
          <motion.div
            className="fixed inset-0 z-40 hidden bg-secondary/20 backdrop-blur-[2px] lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseEnter={() => setMegaOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-secondary/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute inset-0 flex flex-col overflow-y-auto bg-secondary text-white"
              initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              aria-label={settings.mobileNavAria}
            >
              <div className="container-xl flex h-16 shrink-0 items-center justify-between">
                <Logo height={32} href={false} src={settings.logo?.src} alt={settings.logo?.alt} />
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5"
                  onClick={() => setOpen(false)}
                  aria-label={settings.closeMenu}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="container-xl flex flex-1 flex-col gap-1 pb-16 pt-4">
                {navLinks.map((link, i) => {
                  if ("mega" in link && link.mega) {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.12 + i * 0.06 }}
                      >
                        <button
                          type="button"
                          className={cn(
                            "font-display flex w-full items-center justify-between py-3 text-left text-3xl font-extrabold tracking-tight transition-colors sm:text-4xl",
                            servicesActive || mobileServicesOpen
                              ? "text-accent"
                              : "text-white/90"
                          )}
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          aria-expanded={mobileServicesOpen}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "h-6 w-6 transition-transform",
                              mobileServicesOpen && "rotate-180"
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mb-4 space-y-5 rounded-3xl border border-white/10 bg-white/5 p-4">
                                {categories.map((category) => (
                                  <div key={category.id}>
                                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                                      {category.title}
                                    </p>
                                    <ul className="space-y-1">
                                      {services
                                        .filter((service) => service.category === category.id)
                                        .map((service) => {
                                          const Icon = service.icon;
                                          return (
                                            <li key={service.slug}>
                                              <Link
                                                href={`/services/${service.slug}`}
                                                className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-bold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                                                onClick={() => setOpen(false)}
                                              >
                                                <Icon className="h-4 w-4 shrink-0 text-accent" />
                                                {service.shortTitle}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </div>
                                ))}
                                <Link
                                  href="/services"
                                  className="inline-flex items-center gap-1.5 pt-1 text-sm font-bold text-accent"
                                  onClick={() => setOpen(false)}
                                >
                                  {settings.viewAllServices}
                                  <ArrowUpRight className="h-4 w-4" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        className="font-display block py-3 text-3xl font-extrabold tracking-tight text-white/90 transition-colors hover:text-accent sm:text-4xl"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <MagneticButton href={settings.headerCta.href} size="lg">
                    {settings.headerCta.label}
                    <ArrowUpRight className="h-5 w-5" />
                  </MagneticButton>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
