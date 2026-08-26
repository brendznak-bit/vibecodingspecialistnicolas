import { Blocks, Calculator, Plug, Target } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Лендинги",
    text: "Страницы под конверсию: понятная структура и один сильный CTA.",
  },
  {
    icon: Blocks,
    title: "Промо-страницы",
    text: "Микролендинги под акцию, запуск или отдельный оффер.",
  },
  {
    icon: Calculator,
    title: "Веб-приложения",
    text: "Простые формы, калькуляторы и мини-сервисы под задачу.",
  },
  {
    icon: Plug,
    title: "Интеграции",
    text: "CRM, платёжки и приём заявок — данные не теряются.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-9 sm:px-8 md:py-14">
      <h2 className="text-2xl font-bold sm:text-4xl">Что я делаю</h2>
      <p className="mt-3 max-w-lg text-muted-foreground">
        Небольшой набор услуг, который закрывает путь от идеи до работающей страницы.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 md:gap-6">
        {services.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] sm:p-8"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-mint text-primary/80 transition-colors group-hover:text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold sm:text-xl">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
