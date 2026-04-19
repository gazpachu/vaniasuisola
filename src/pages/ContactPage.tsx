import { useState } from "react";
import type { Locale } from "@/i18n/translations";
import { t as translate } from "@/i18n/translations";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = translate(locale).contact;
  const [sent, setSent] = useState(false);

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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="md:col-span-7 bg-card/60 border border-border p-8 md:p-12"
        >
          <p className="text-eyebrow">{t.writeMessage}</p>
          <div className="hairline w-12 mt-3 mb-8" />

          {sent ? (
            <div className="py-12 text-center">
              <p className="text-display text-3xl text-bone italic">{t.thankYou}</p>
              <p className="text-muted-foreground mt-3">{t.received}</p>
            </div>
          ) : (
            <div className="space-y-7">
              <Field label={t.name} id="name" required />
              <Field label={t.emailLabel} id="email" type="email" required />
              <Field label={t.subject} id="subject" />
              <div>
                <label
                  htmlFor="message"
                  className="block text-[0.65rem] tracking-[0.32em] uppercase text-muted-foreground mb-3"
                >
                  {t.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-bone placeholder:text-muted-foreground/40 resize-none transition-colors"
                  placeholder={t.placeholder}
                />
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-3 border border-gold px-8 py-4 text-[0.7rem] tracking-[0.32em] uppercase text-gold hover:bg-gold hover:text-background transition-colors duration-500"
              >
                {t.send}
              </button>
            </div>
          )}
        </form>
      </section>
    </article>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[0.65rem] tracking-[0.32em] uppercase text-muted-foreground mb-3"
      >
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-bone placeholder:text-muted-foreground/40 transition-colors"
      />
    </div>
  );
}
