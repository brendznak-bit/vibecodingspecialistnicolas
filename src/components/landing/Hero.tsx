import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 hidden h-56 w-56 grid-dots opacity-70 md:block"
      />
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8 md:pb-24 md:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-mint px-4 py-2 text-sm font-medium text-mint-foreground">
          <Sparkles className="h-4 w-4" />
          Специалист по вайбкодингу
        </span>

        <h1 className="mt-6 max-w-3xl text-[2.1rem] font-bold leading-[1.1] sm:text-5xl md:text-6xl">
          Создаю веб-продукты, где каждая кнопка{" "}
          <span className="text-primary">ведёт к продаже</span>
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Помогаю микробизнесу и стартапам быстро запустить простой веб-продукт без
          лишнего шума.
        </p>

        <div className="mt-8 flex">
          <a
            href="#contact"
            className="inline-flex w-[90%] items-center justify-center gap-2 rounded-xl btn-emerald px-7 py-4 text-base font-semibold sm:w-auto"
          >
            Обсудить проект
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div
          className="mt-12 h-px w-full max-w-md bg-linear-to-r from-primary via-emerald-deep to-primary/0"
          aria-hidden
        />
      </div>
    </section>
  );
}
