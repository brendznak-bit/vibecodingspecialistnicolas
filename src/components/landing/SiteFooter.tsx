import { EMAIL, TELEGRAM_URL } from "./ContactCta";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} vibe.dev — вайбкодинг для микробизнеса</p>
        <div className="flex flex-wrap gap-4">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Telegram
          </a>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-primary">
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
