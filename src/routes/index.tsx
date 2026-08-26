import { createFileRoute } from "@tanstack/react-router";

import { Cases } from "@/components/landing/Cases";
import { ContactCta } from "@/components/landing/ContactCta";
import { Hero } from "@/components/landing/Hero";
import { Process } from "@/components/landing/Process";
import { Services } from "@/components/landing/Services";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";

const title = "Вайбкодинг: лендинги и простые веб-продукты";
const description =
  "Создаю лендинги, промо-страницы и простые веб-приложения для микробизнеса и стартапов. Прототип за 2–3 дня, запуск без лишнего шума.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Process />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}
