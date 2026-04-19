import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/pages/WorkPage";
import { t } from "@/i18n/translations";

const tr = t("es").work;

export const Route = createFileRoute("/es/work")({
  head: () => ({
    meta: [
      { title: tr.metaTitle },
      { name: "description", content: tr.metaDesc },
      { property: "og:title", content: tr.metaTitle },
      { property: "og:description", content: tr.ogDesc },
    ],
  }),
  component: () => <WorkPage locale="es" />,
});
