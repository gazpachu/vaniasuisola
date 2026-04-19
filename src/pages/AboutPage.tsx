import { Link } from "@tanstack/react-router";
import portrait from "@/assets/sculpture-4.jpeg";
import type { Locale } from "@/i18n/translations";
import { t as translate } from "@/i18n/translations";
import { localizedPath } from "@/i18n/useLocale";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = translate(locale).about;
  return (
    <article className="pt-40 pb-24">
      <header className="mx-auto max-w-[1400px] px-6 md:px-10 mb-20 md:mb-28">
        <p className="text-eyebrow">{t.eyebrow}</p>
        <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-bone mt-6 max-w-4xl leading-[0.95]">
          {t.h1a}
          <span className="italic text-gold">{t.h1b}</span>
        </h1>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 mb-32">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-card">
            <img
              src={portrait}
              alt="Vania Suisola handling one of her ceramic sculptures"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-[0.65rem] tracking-[0.28em] uppercase text-muted-foreground mt-4">
            {t.studioCaption}
          </p>
        </div>

        <div className="md:col-span-7 md:pt-12">
          <p className="text-display text-2xl md:text-3xl text-bone leading-snug">
            {t.leadA}
            <span className="italic">{t.leadFlorence}</span>
            {t.leadAnd}
            <span className="italic">{t.leadAlicante}</span>
            {t.leadEnd}
          </p>

          <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            <p>
              {t.p1} <span className="text-bone">{t.easda}</span>.
            </p>
            <p>{t.p2}</p>
            <p>
              {t.p3a}
              <span className="text-bone">{t.bienalAbout}</span>
              {t.p3b}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 mb-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-eyebrow">{t.trajectoryEyebrow}</p>
            <h2 className="text-display text-4xl md:text-5xl text-bone mt-4">
              {t.milestonesA}
              <br />
              <span className="italic text-gold">{t.milestonesB}</span>
            </h2>
          </div>

          <ol className="md:col-span-8 relative border-l border-border">
            {t.timeline.map((item) => (
              <li key={item.title} className="relative pl-10 pb-12 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold" />
                <p className="text-[0.65rem] tracking-[0.32em] uppercase text-gold">
                  {item.year}
                </p>
                <h3 className="text-display text-2xl md:text-3xl text-bone mt-2">
                  {item.title}
                </h3>
                <p className="text-sm tracking-wide text-muted-foreground mt-1">
                  {item.place}
                </p>
                <p className="text-base text-muted-foreground/80 mt-3 max-w-lg leading-relaxed">
                  {item.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-eyebrow">{t.materialsEyebrow}</p>
            <p className="text-display text-3xl md:text-4xl text-bone mt-4 leading-tight">
              {t.materialsA}
              <br />
              <span className="italic text-gold">{t.materialsB}</span>
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.materialsBody}
            </p>
          </div>
          <div>
            <p className="text-eyebrow">{t.processEyebrow}</p>
            <p className="text-display text-3xl md:text-4xl text-bone mt-4 leading-tight">
              {t.processA}
              <br />
              <span className="italic text-gold">{t.processB}</span>
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.processBody}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mt-24 flex flex-wrap gap-4">
        <Link
          to={localizedPath(locale, "/work")}
          className="inline-flex items-center gap-3 border border-gold px-8 py-4 text-[0.7rem] tracking-[0.32em] uppercase text-gold hover:bg-gold hover:text-background transition-colors duration-500"
        >
          {t.seeWork}
        </Link>
        <Link
          to={localizedPath(locale, "/contact")}
          className="inline-flex items-center gap-3 px-8 py-4 text-[0.7rem] tracking-[0.32em] uppercase text-bone/70 hover:text-bone transition-colors"
        >
          {t.getInTouch}
        </Link>
      </div>
    </article>
  );
}
