import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import img1 from "@/assets/sculpture-hero.jpeg";
import img2 from "@/assets/sculpture-2.jpeg";
import img3 from "@/assets/sculpture-3.jpeg";
import img4 from "@/assets/sculpture-4.jpeg";
import imgDetail from "@/assets/sculpture-detail.jpeg";

import imgLoop1 from "@/assets/loop.jpg";
import imgLoop2 from "@/assets/loop2.jpg";
import imgLoop3 from "@/assets/loop3.jpg";
import imgLoop4 from "@/assets/loop4.jpg";
import imgLoop5 from "@/assets/loop5.jpg";

import imgMarea1 from "@/assets/marea1.jpg";
import imgMarea2 from "@/assets/marea2.jpg";
import imgMarea3 from "@/assets/marea3.jpg";
import imgMarea4 from "@/assets/marea4.jpg";

import imgOla1 from "@/assets/ola-silenciosa1.jpg";
import imgOla2 from "@/assets/ola-silenciosa2.jpg";
import imgOla3 from "@/assets/ola-silenciosa3.jpg";

import imgShark1 from "@/assets/shark1.jpg";
import imgShark2 from "@/assets/shark2.jpg";
import imgShark3 from "@/assets/shark3.jpg";
import imgShark4 from "@/assets/shark4.jpg";
import imgShark5 from "@/assets/shark5.jpg";

import imgSuspension1 from "@/assets/suspension-del-instante1.jpg";
import imgSuspension2 from "@/assets/suspension-del-instante2.jpg";
import imgSuspension3 from "@/assets/suspension-del-instante3.jpg";
import imgSuspension4 from "@/assets/suspension-del-instante4.jpg";
import imgSuspension5 from "@/assets/suspension-del-instante5.jpg";

import imgSoglia1 from "@/assets/soglia-1.jpg";
import imgSoglia2 from "@/assets/soglia-2.jpg";
import imgSoglia3 from "@/assets/soglia-3.jpg";
import imgSoglia4 from "@/assets/soglia-4.jpg";

import type { Locale } from "@/i18n/translations";
import { t as translate } from "@/i18n/translations";
import { localizedPath } from "@/i18n/useLocale";

interface Artwork {
  n: string;
  title: string;
  year: string;
  material: string;
  size: string;
  images: string[];
  span: string;
  aspect: string;
}

function ArtworkCard({ w, note }: { w: Artwork; note: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [swiped, setSwiped] = useState(false);

  useEffect(() => {
    if (!lightboxImg) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImg]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIdx((prev) => (prev + 1) % w.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIdx((prev) => (prev - 1 + w.images.length) % w.images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setSwiped(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      setCurrentIdx((prev) => (prev + 1) % w.images.length);
      setSwiped(true);
    } else if (distance < -minSwipeDistance) {
      setCurrentIdx((prev) => (prev - 1 + w.images.length) % w.images.length);
      setSwiped(true);
    }
  };

  const handleCardClick = () => {
    if (swiped) {
      setSwiped(false);
      return;
    }
    setLightboxImg(w.images[currentIdx]);
  };

  return (
    <>
      <figure className={`group/card ${w.span} bg-card overflow-hidden flex flex-col`}>
        <div
          className={`relative overflow-hidden ${w.aspect} select-none cursor-zoom-in`}
          onClick={handleCardClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Images slider */}
          {w.images.map((imgSrc, imgI) => (
            <img
              key={imgSrc}
              src={imgSrc}
              alt={`${w.title} (view ${imgI + 1}) — ceramic sculpture by Vania Suisola`}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${imgI === currentIdx ? "opacity-100 scale-100 z-10" : "opacity-0 scale-[1.02] z-0 pointer-events-none"
                }`}
            />
          ))}

          {/* Carousel controls - visible on hover or mobile */}
          {w.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full border border-bone/20 bg-background/40 hover:bg-background/80 hover:border-gold text-bone flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full border border-bone/20 bg-background/40 hover:bg-background/80 hover:border-gold text-bone flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Indicator dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 opacity-100 md:opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-300">
                {w.images.map((_, imgI) => (
                  <button
                    key={imgI}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setCurrentIdx(imgI);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${imgI === currentIdx ? "bg-gold w-3" : "bg-bone/40 hover:bg-bone"
                      }`}
                    aria-label={`Go to slide ${imgI + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <figcaption className="p-6 md:p-8 flex-grow flex flex-col justify-between">
          <div>
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
              {note}
            </p>
          </div>
        </figcaption>
      </figure>

      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center cursor-zoom-out animate-fade-in"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-bone/60 hover:text-bone text-2xl transition-colors p-2"
            onClick={() => setLightboxImg(null)}
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightboxImg}
            alt={`${w.title} — original view`}
            className="max-h-[90vh] max-w-[95vw] object-contain select-none cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export function WorkPage({ locale }: { locale: Locale }) {
  const t = translate(locale).work;

  const works: Artwork[] = [
    {
      n: "01",
      title: "Metamorphosis",
      year: "2025",
      material: t.materials.earthenware,
      size: "29 × 28 × 23 cm",
      images: [img1, img2, img3, img4, imgDetail],
      span: "md:col-span-8",
      aspect: "aspect-[4/5]",
    },
    {
      n: "02",
      title: "Loop",
      year: "2024",
      material: t.materials.blackStoneware,
      size: "39 × 29 × 16.5 cm",
      images: [imgLoop1, imgLoop2, imgLoop3, imgLoop4, imgLoop5],
      span: "md:col-span-4",
      aspect: "aspect-[3/4]",
    },
    {
      n: "03",
      title: "Marea",
      year: "2022",
      material: t.materials.earthenware,
      size: "26 × 24 × 14 cm",
      images: [imgMarea1, imgMarea2, imgMarea3, imgMarea4],
      span: "md:col-span-5",
      aspect: "aspect-[3/4]",
    },
    {
      n: "04",
      title: "Ola silenciosa",
      year: "2025",
      material: t.materials.earthenware,
      size: "25.5 × 27 × 16.5 cm",
      images: [imgOla1, imgOla2, imgOla3],
      span: "md:col-span-7",
      aspect: "aspect-[4/5]",
    },
    {
      n: "05",
      title: "Shark",
      year: "2024",
      material: t.materials.blackStoneware,
      size: "—",
      images: [imgShark1, imgShark2, imgShark3, imgShark4, imgShark5],
      span: "md:col-span-12",
      aspect: "aspect-[16/9]",
    },
    {
      n: "06",
      title: "Suspension del instante",
      year: "2026",
      material: t.materials.earthenware,
      size: "20 × 42.5 × 20 cm",
      images: [imgSuspension1, imgSuspension2, imgSuspension3, imgSuspension4, imgSuspension5],
      span: "md:col-span-12",
      aspect: "aspect-[16/9]",
    },
    {
      n: "07",
      title: "Soglia",
      year: "2026",
      material: t.materials.earthenware,
      size: "48.5 × 19.5 × 18 cm",
      images: [imgSoglia1, imgSoglia2, imgSoglia3, imgSoglia4],
      span: "md:col-span-8",
      aspect: "aspect-[3/4]",
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
            <ArtworkCard key={w.n} w={w} note={t.items[i]?.note || ""} />
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
