import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/AboutPage";
import { t } from "@/i18n/translations";

const tr = t("it").about;

export const Route = createFileRoute("/it/about")({
  head: () => ({
    meta: [
      { title: tr.metaTitle },
      { name: "description", content: tr.metaDesc },
      { property: "og:title", content: tr.metaTitle },
      { property: "og:description", content: tr.ogDesc },
    ],
  }),
  component: () => <AboutPage locale="it" />,
});
