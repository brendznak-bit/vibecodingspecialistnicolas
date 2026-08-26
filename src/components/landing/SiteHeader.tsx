import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Что делаю" },
  { href: "#cases", label: "Кейсы" },
  { href: "#process", label: "Процесс" },
  { href: "#contact", label: "Контакты" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8">
        <a href="#hero" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl btn-emerald font-display text-sm font-bold">
            V
          </span>
          <span className="truncate font-display text-base font-bold">vibe.dev</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-xl btn-emerald px-4 py-2.5 text-sm font-semibold"
          >
            Обсудить проект
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3.5 text-base text-foreground transition-colors hover:bg-mint"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl btn-emerald px-4 py-3.5 text-center text-base font-semibold"
          >
            Обсудить проект
          </a>
        </nav>
      )}
    </header>
  );
}
