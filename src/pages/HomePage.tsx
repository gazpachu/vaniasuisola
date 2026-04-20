import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/sculpture-hero.jpeg";
import img2 from "@/assets/sculpture-2.jpeg";
import img3 from "@/assets/sculpture-3.jpeg";
import detailImg from "@/assets/sculpture-detail.jpeg";
import type { Locale } from "@/i18n/translations";
import { t as translate } from "@/i18n/translations";
import { localizedPath } from "@/i18n/useLocale";

export function HomePage({ locale }: { locale: Locale }) {
  const t = translate(locale).home;
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Organic white ceramic sculpture by Vania Suisola"
            className="h-full w-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-10 pb-20 md:pb-32 pt-40">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-eyebrow mb-8">{t.eyebrow}</p>
            <h1 className="text-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-bone leading-[0.9]">
              {t.h1a}
              <br />
              <span className="italic text-gold">{t.h1b}</span> {t.h1c}
            </h1>
            <p className="mt-10 max-w-xl text-lg md:text-xl text-bone/75 leading-relaxed font-light">
              {t.introName} <span className="text-bone">Vania Suisola</span>{" "}
              {t.intro}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to={localizedPath(locale, "/work")}
                className="inline-flex items-center gap-3 border border-gold px-8 py-4 text-[0.7rem] tracking-[0.32em] uppercase text-gold hover:bg-gold hover:text-background transition-colors duration-500"
              >
                {t.cta1} <span className="text-base">→</span>
              </Link>
              <Link
                to={localizedPath(locale, "/about")}
                className="inline-flex items-center gap-3 px-8 py-4 text-[0.7rem] tracking-[0.32em] uppercase text-bone/70 hover:text-bone transition-colors"
              >
                {t.cta2}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-6 md:right-10 bottom-10 z-10 hidden md:flex flex-col items-end gap-2 animate-fade-in">
          <div className="hairline w-24" />
          <p className="text-[0.65rem] tracking-[0.32em] uppercase text-muted-foreground">
            {t.cornerNote}
          </p>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-eyebrow">{t.statementLabel}</p>
            <div className="hairline w-16 mt-4" />
          </div>
          <div className="md:col-span-8">
            <p className="text-display text-3xl md:text-5xl lg:text-6xl text-bone leading-[1.1]">
              {t.statementA}
              <span className="italic text-gold">{t.statementB}</span>
            </p>
            <p className="mt-10 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t.statementBody}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED WORKS GRID */}
      <section className="pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="text-eyebrow">{t.selectedWorks}</p>
              <h2 className="text-display text-4xl md:text-6xl text-bone mt-4">
                {t.recentPieces}{" "}
                <span className="italic text-gold">{t.recentEm}</span>
              </h2>
            </div>
            <Link
              to={localizedPath(locale, "/work")}
              className="hidden md:inline-flex text-[0.7rem] tracking-[0.32em] uppercase text-muted-foreground hover:text-gold transition-colors"
            >
              {t.allWork}
            </Link>
          </div>

          <div className="grid gap-6 md:gap-10 md:grid-cols-12">
            <figure className="md:col-span-7 group overflow-hidden bg-card">
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={img2}
                  alt="Ceramic sculpture — Respiro series"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
              </div>
              <figcaption className="p-6 md:p-8 flex justify-between items-end">
                <div>
                  <p className="text-display text-2xl md:text-3xl text-bone italic">
                    Respiro I
                  </p>
                  <p className="text-[0.65rem] tracking-[0.28em] uppercase text-muted-foreground mt-2">
                    {t.earthenware}
                  </p>
                </div>
                <span className="text-gold/60 text-sm">01</span>
              </figcaption>
            </figure>

            <div className="md:col-span-5 flex flex-col gap-6 md:gap-10">
              <figure className="group overflow-hidden bg-card flex-1">
                <div className="overflow-hidden aspect-[4/5]">
                  <img
                    src={img3}
                    alt="Ceramic sculpture detail — Cavità"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-6 flex justify-between items-end">
                  <div>
                    <p className="text-display text-xl md:text-2xl text-bone italic">
                      Cavità
                    </p>
                    <p className="text-[0.65rem] tracking-[0.28em] uppercase text-muted-foreground mt-2">
                      {t.earthenware2}
                    </p>
                  </div>
                  <span className="text-gold/60 text-sm">02</span>
                </figcaption>
              </figure>

              <figure className="group overflow-hidden bg-card flex-1">
                <div className="overflow-hidden aspect-[4/5]">
                  <img
                    src={detailImg}
                    alt="Ceramic sculpture close-up — Soglia detail"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-6 flex justify-between items-end">
                  <div>
                    <p className="text-display text-xl md:text-2xl text-bone italic">
                      Soglia (detail)
                    </p>
                    <p className="text-[0.65rem] tracking-[0.28em] uppercase text-muted-foreground mt-2">
                      {t.earthenware}
                    </p>
                  </div>
                  <span className="text-gold/60 text-sm">03</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mt-12 md:hidden">
            <Link
              to={localizedPath(locale, "/work")}
              className="inline-flex border border-gold px-6 py-3 text-[0.7rem] tracking-[0.32em] uppercase text-gold"
            >
              {t.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* RECOGNITION STRIP */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-eyebrow">{t.recogSelected}</p>
            <p className="text-display text-2xl md:text-3xl text-bone mt-4 leading-tight">
              {t.bienal}
              <br />
              <span className="italic text-gold">{t.manises}</span>
            </p>
          </div>
          <div>
            <p className="text-eyebrow">{t.recogTrained}</p>
            <p className="text-display text-2xl md:text-3xl text-bone mt-4 leading-tight">
              EASDA
              <br />
              <span className="italic text-gold">{t.easdaLoc}</span>
            </p>
          </div>
          <div>
            <p className="text-eyebrow">{t.recogOrigin}</p>
            <p className="text-display text-2xl md:text-3xl text-bone mt-4 leading-tight">
              {t.florence}
              <br />
              <span className="italic text-gold">{t.workingSpain}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
