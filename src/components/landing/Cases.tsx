import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Кофейня у дома",
    niche: "Локальный бизнес",
    goal: "Собирать заявки на кейтеринг с одной страницы.",
    metrics: ["+35% конверсии", "CTR 4,2%"],
  },
  {
    title: "Онлайн-курс по Excel",
    niche: "Образование",
    goal: "Продавать поток без сложной платформы.",
    metrics: ["+28% заявок", "2 дня до запуска"],
  },
  {
    title: "Калькулятор ремонта",
    niche: "Услуги",
    goal: "Считать смету и сразу отправлять её в CRM.",
    metrics: ["-40% ручной работы", "CR 6,1%"],
  },
  {
    title: "Промо новой SaaS-фичи",
    niche: "Стартап",
    goal: "Прогреть базу и собрать early access.",
    metrics: ["+52% регистраций", "CTR 5,4%"],
  },
];

export function Cases() {
  return (
    <section id="cases" className="bg-card/60 py-11 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-2xl font-bold sm:text-4xl">Избранные проекты</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Демонстрационные прототипы с условными метриками — они показывают подход к
          структуре и логике страницы.
        </p>

        <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 md:mt-12 md:grid-cols-3 md:gap-6">
          {cases.map((c) => (
            <article
              key={c.title}
              className="flex w-[82vw] shrink-0 snap-start flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary sm:w-auto sm:p-8"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-mint-foreground">
                {c.niche}
              </span>
              <h3 className="mt-2 text-lg font-bold sm:text-xl">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.goal}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {c.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-lg bg-mint px-3 py-1.5 text-sm font-semibold text-mint-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Посмотреть прототип
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
