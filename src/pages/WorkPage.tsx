import { Link } from "@tanstack/react-router";
import img1 from "@/assets/sculpture-hero.jpeg";
import img2 from "@/assets/sculpture-2.jpeg";
import img3 from "@/assets/sculpture-3.jpeg";
import img4 from "@/assets/sculpture-4.jpeg";
import imgDetail from "@/assets/sculpture-detail.jpeg";
import type { Locale } from "@/i18n/translations";
import { t as translate } from "@/i18n/translations";
import { localizedPath } from "@/i18n/useLocale";

export function WorkPage({ locale }: { locale: Locale }) {
  const t = translate(locale).work;

  const works = [
    {
      n: "01",
      title: "Respiro",
      year: "2024",
      material: t.materials.porcelain,
      size: "32 × 28 × 24 cm",
      img: img1,
      span: "md:col-span-8",
      aspect: "aspect-[4/5]",
    },
    {
      n: "02",
      title: "Cavità",
      year: "2024",
      material: t.materials.stoneware,
      size: "26 × 24 × 22 cm",
      img: img2,
      span: "md:col-span-4",
      aspect: "aspect-[3/4]",
    },
    {
      n: "03",
      title: "Soglia",
      year: "2024",
      material: t.materials.porcelain,
      size: "30 × 26 × 22 cm",
      img: img3,
      span: "md:col-span-5",
      aspect: "aspect-[3/4]",
    },
    {
      n: "04",
      title: "Polmone",
      year: "2023",
      material: t.materials.porcelain,
      size: "34 × 30 × 26 cm",
      img: img4,
      span: "md:col-span-7",
      aspect: "aspect-[4/5]",
    },
    {
      n: "05",
      title: "Soglia (detail)",
      year: "2024",
      material: t.materials.porcelain,
      size: "—",
      img: imgDetail,
      span: "md:col-span-12",
      aspect: "aspect-[16/9]",
    },
  ];

  return (
    <article className="pt-40 pb-24">
      <header className="mx-auto max-w-[1400px] px-6 md:px-10 mb-20 md:mb-28">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <p className="text-eyebrow">{t.eyebrow}</p>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-bone mt-6 leading-[0.95]">
              {t.h1a}
              <span className="italic text-gold">{t.h1b}</span>
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-6">
            <div className="hairline w-24 mb-6" />
            <p className="text-muted-foreground leading-relaxed">{t.intro}</p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          {works.map((w, i) => (
            <figure key={w.n} className={`group ${w.span} bg-card overflow-hidden`}>
              <div className={`overflow-hidden ${w.aspect}`}>
                <img
                  src={w.img}
                  alt={`${w.title} — ceramic sculpture by Vania Suisola`}
                  className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-[0.65rem] tracking-[0.32em] uppercase text-gold">
                      № {w.n} · {w.year}
                    </p>
                    <h2 className="text-display text-3xl md:text-4xl text-bone italic mt-2">
                      {w.title}
                    </h2>
                  </div>
                  <div className="text-right text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
                    <p>{w.material}</p>
                    <p className="mt-1">{w.size}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm md:text-base text-muted-foreground/90 max-w-xl leading-relaxed">
                  {t.items[i]?.note}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 mt-32">
        <div className="border-t border-border pt-16 grid md:grid-cols-2 gap-10 items-end">
          <div>
            <p className="text-eyebrow">{t.ctaEyebrow}</p>
            <h3 className="text-display text-3xl md:text-5xl text-bone mt-4 leading-tight">
              {t.ctaA}
              <span className="italic text-gold">{t.ctaB}</span>
            </h3>
          </div>
          <div className="flex md:justify-end">
            <Link
              to={localizedPath(locale, "/contact")}
              className="inline-flex items-center gap-3 border border-gold px-8 py-4 text-[0.7rem] tracking-[0.32em] uppercase text-gold hover:bg-gold hover:text-background transition-colors duration-500"
            >
              {t.enquire}
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
