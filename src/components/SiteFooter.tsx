import { Link } from "@tanstack/react-router";
import { useLocale, localizedPath } from "@/i18n/useLocale";

export function SiteFooter() {
  const { locale, t } = useLocale();
  const f = t.footer;
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="text-display text-2xl text-bone">
            Vania <span className="italic text-gold">Suisola</span>
          </p>
          <p className="text-[0.65rem] tracking-[0.32em] uppercase text-muted-foreground mt-2">
            {f.tagline}
          </p>
        </div>

        <div className="text-sm text-muted-foreground leading-relaxed">
          <p>{f.studioVisits}</p>
          <p className="mt-2">{f.cities}</p>
        </div>

        <div className="flex flex-col md:items-end gap-3 text-sm">
          <a
            href="https://www.instagram.com/vania.suisola"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors tracking-wider"
          >
            {f.instagram}
          </a>
          <Link
            to={localizedPath(locale, "/contact")}
            className="text-muted-foreground hover:text-gold transition-colors tracking-wider"
          >
            {f.getInTouch}
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-[0.65rem] tracking-[0.28em] uppercase text-muted-foreground">
          <span>
            {f.rights.replace("{year}", String(new Date().getFullYear()))}
          </span>
          <span>{f.worksIn}</span>
        </div>
      </div>
    </footer>
  );
}
