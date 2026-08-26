import { useState } from "react";
import { ClipboardList, LayoutTemplate, Palette, Rocket, Wrench } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Бриф",
    text: "Разбираем цель, аудиторию и оффер.",
    time: "1 день",
  },
  {
    icon: LayoutTemplate,
    title: "Прототип",
    text: "Структура экранов и путь к целевому действию.",
    time: "2–3 дня",
  },
  {
    icon: Palette,
    title: "Дизайн",
    text: "Визуальный стиль, типографика, мобильная версия.",
    time: "2–4 дня",
  },
  {
    icon: Wrench,
    title: "Сборка",
    text: "Вёрстка, формы, интеграции и аналитика.",
    time: "3–5 дней",
  },
  {
    icon: Rocket,
    title: "Запуск",
    text: "Публикация, проверка метрик и поддержка.",
    time: "1 день + правки",
  },
];

export function Process() {
  const [active, setActive] = useState(1);

  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-11 sm:px-8 md:py-20">
      <h2 className="text-2xl font-bold sm:text-4xl">Как я работаю</h2>
      <p className="mt-3 max-w-lg text-muted-foreground">
        Прозрачный процесс: понятно, что происходит на каждом шаге и сколько это займёт.
      </p>

      <ol className="mt-8 grid gap-4 md:mt-14 md:grid-cols-5 md:gap-5">
        {steps.map((s, i) => {
          const isActive = i === active;
          const Icon = s.icon;
          return (
            <li key={s.title}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-current={isActive ? "step" : undefined}
                className={`h-full w-full rounded-2xl border p-6 text-left transition-colors ${
                  isActive
                    ? "border-primary bg-mint"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display text-sm font-bold ${
                      isActive
                        ? "btn-emerald"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <Icon
                    className={`h-5 w-5 shrink-0 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                <p
                  className={`mt-3 text-sm font-semibold ${
                    isActive ? "text-mint-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.time}
                </p>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
