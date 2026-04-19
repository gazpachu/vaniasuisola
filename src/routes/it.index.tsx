import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { t } from "@/i18n/translations";

const tr = t("it").home;

export const Route = createFileRoute("/it/")({
  head: () => ({
    meta: [
      { title: tr.metaTitle },
      { name: "description", content: tr.metaDesc },
      { property: "og:title", content: tr.metaTitle },
      { property: "og:description", content: tr.ogDesc },
    ],
  }),
  component: () => <HomePage locale="it" />,
});
