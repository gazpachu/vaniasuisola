import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
import { t } from "@/i18n/translations";

const tr = t("it").contact;

export const Route = createFileRoute("/it/contact")({
  head: () => ({
    meta: [
      { title: tr.metaTitle },
      { name: "description", content: tr.metaDesc },
      { property: "og:title", content: tr.metaTitle },
      { property: "og:description", content: tr.ogDesc },
    ],
  }),
  component: () => <ContactPage locale="it" />,
});
