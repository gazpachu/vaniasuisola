import type { Locale } from "@/i18n/translations";
import { t as translate } from "@/i18n/translations";
import { GoogleMap } from "@/components/GoogleMap";

export function ContactPage({ locale }: { locale: Locale }) {
  // Get translations
  const t = translate(locale).contact;

  return (
    <article className="pt-40 pb-32">
      <header className="mx-auto max-w-[1400px] px-6 md:px-10 mb-20">
        <p className="text-eyebrow">{t.eyebrow}</p>
        <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-bone mt-6 max-w-4xl leading-[0.95]">
          {t.h1a}
          <span className="italic text-gold">{t.h1b}</span>
        </h1>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5 space-y-12">
          <div>
            <p className="text-eyebrow">{t.studio}</p>
            <div className="hairline w-12 mt-3 mb-5" />
            <p className="text-display text-2xl text-bone">{t.studioPlace}</p>
            <p className="text-muted-foreground mt-2">{t.byAppointment}</p>
          </div>

          <div>
            <p className="text-eyebrow">{t.email}</p>
            <div className="hairline w-12 mt-3 mb-5" />
            <a
              href="mailto:hello@vaniasuisola.com"
              className="text-display text-2xl text-bone hover:text-gold transition-colors"
            >
              hello@vaniasuisola.com
            </a>
          </div>

          <div>
            <p className="text-eyebrow">{t.elsewhere}</p>
            <div className="hairline w-12 mt-3 mb-5" />
            <a
              href="https://www.instagram.com/vania.suisola"
              target="_blank"
              rel="noreferrer"
              className="text-display text-2xl text-bone hover:text-gold transition-colors"
            >
              Instagram ↗
            </a>
          </div>

          <div>
            <p className="text-eyebrow">{t.enquiriesAbout}</p>
            <div className="hairline w-12 mt-3 mb-5" />
            <ul className="space-y-2 text-muted-foreground">
              {t.enquiries.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="md:col-span-7 bg-card/60 border border-border">
          <div className="p-8 md:p-12">
            <p className="text-eyebrow">Studio Location</p>
            <div className="hairline w-12 mt-3 mb-8" />

            <div className="aspect-[4/3] mb-6">
              <GoogleMap height="100%" />
            </div>

            <div className="flex justify-center">
              <a
                href="https://maps.app.goo.gl/yvFL1m96mM29CEMs8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-gold px-6 py-3 text-[0.7rem] tracking-[0.32em] uppercase text-gold hover:bg-gold hover:text-background transition-colors duration-500"
              >
                Open in Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
