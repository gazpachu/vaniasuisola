import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { useLocale, localizedPath } from "../i18n/useLocale";

function NotFoundComponent() {
  const { locale, t } = useLocale();
  const nf = t.notFound;
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow mb-6">{nf.eyebrow}</p>
        <h1 className="text-display text-7xl text-bone">{nf.title}</h1>
        <h2 className="mt-4 text-xl text-bone/80">{nf.subtitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{nf.body}</p>
        <div className="mt-8">
          <Link
            to={localizedPath(locale, "/")}
            className="inline-flex items-center justify-center border border-gold px-6 py-3 text-[0.7rem] tracking-[0.32em] uppercase text-gold hover:bg-gold hover:text-background transition-colors"
          >
            {nf.home}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vania Suisola — Ceramic Sculpture" },
      {
        name: "description",
        content:
          "Portfolio of Vania Suisola, ceramic sculptor based between Florence and Alicante. Organic, hand-built forms in porcelain and stoneware.",
      },
      { name: "author", content: "Vania Suisola" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Vania Suisola — Ceramic Sculpture" },
      { name: "twitter:title", content: "Vania Suisola — Ceramic Sculpture" },
      { name: "description", content: "A ceramic artist's online portfolio showcasing her artistic journey and creations." },
      { property: "og:description", content: "A ceramic artist's online portfolio showcasing her artistic journey and creations." },
      { name: "twitter:description", content: "A ceramic artist's online portfolio showcasing her artistic journey and creations." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/35d8eea3-b2ae-4276-b088-43d4787fda27/id-preview-eed3a29a--ee3e6151-a443-40a6-9fad-8dcb52cc5a73.lovable.app-1776578260362.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/35d8eea3-b2ae-4276-b088-43d4787fda27/id-preview-eed3a29a--ee3e6151-a443-40a6-9fad-8dcb52cc5a73.lovable.app-1776578260362.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
