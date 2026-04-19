import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLocale, localizedPath } from "@/i18n/useLocale";
import { LOCALES, type Locale } from "@/i18n/translations";

export function SiteHeader() {
  const { locale, t, basePath } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: localizedPath(locale, "/about"), label: t.nav.about },
    { to: localizedPath(locale, "/work"), label: t.nav.work },
    { to: localizedPath(locale, "/contact"), label: t.nav.contact },
  ];

  const switchTo = (target: Locale) => localizedPath(target, basePath);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Link
          to={localizedPath(locale, "/")}
          className="group flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="text-display text-xl md:text-2xl text-bone">
            Vania <span className="italic text-gold">Suisola</span>
          </span>
          <span className="text-[0.6rem] tracking-[0.32em] uppercase text-muted-foreground mt-1">
            {t.tagline}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[0.72rem] tracking-[0.28em] uppercase text-muted-foreground hover:text-bone transition-colors duration-300"
                activeProps={{ className: "!text-gold" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop language switcher */}
          <div className="relative" onMouseLeave={() => setLangOpen(false)}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              onMouseEnter={() => setLangOpen(true)}
              className="text-[0.72rem] tracking-[0.28em] uppercase text-muted-foreground hover:text-gold transition-colors flex items-center gap-2"
              aria-label="Change language"
            >
              <span className="text-gold">
                {LOCALES.find((l) => l.code === locale)?.short}
              </span>
              <span className="text-muted-foreground">▾</span>
            </button>
            <div
              className={`absolute right-0 top-full pt-3 transition-all duration-200 ${
                langOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="bg-background/95 backdrop-blur-md border border-border min-w-[140px] py-2">
                {LOCALES.map((l) => (
                  <Link
                    key={l.code}
                    to={switchTo(l.code)}
                    onClick={() => setLangOpen(false)}
                    className={`block px-4 py-2 text-[0.7rem] tracking-[0.28em] uppercase transition-colors ${
                      l.code === locale
                        ? "text-gold"
                        : "text-muted-foreground hover:text-bone"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-bone transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-bone transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-bone transition-transform duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-md ${
          open ? "max-h-[600px] border-b border-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-display text-3xl text-bone hover:text-gold transition-colors"
              activeProps={{ className: "!text-gold italic" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}

          <div className="border-t border-border pt-5 mt-3">
            <p className="text-[0.6rem] tracking-[0.32em] uppercase text-muted-foreground mb-4">
              Language
            </p>
            <div className="flex gap-5">
              {LOCALES.map((l) => (
                <Link
                  key={l.code}
                  to={switchTo(l.code)}
                  onClick={() => setOpen(false)}
                  className={`text-[0.8rem] tracking-[0.28em] uppercase transition-colors ${
                    l.code === locale
                      ? "text-gold"
                      : "text-muted-foreground hover:text-bone"
                  }`}
                >
                  {l.short}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
