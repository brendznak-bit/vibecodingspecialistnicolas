import { Mail, Send } from "lucide-react";

export const TELEGRAM_URL = "https://t.me/username";
export const EMAIL = "hello@example.com";

export function ContactCta() {
  return (
    <section id="contact" className="px-5 pb-14 pt-11 sm:px-8 md:pb-24 md:pt-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-background sm:px-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 grid-dots opacity-40"
        />
        <div className="relative">
          <h2 className="max-w-xl text-2xl font-bold sm:text-4xl">
            Готовы запустить проект?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-background/75">
            Давайте обсудим задачу: расскажу, как быстро и без рисков сделать лендинг
            под вашу цель.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl btn-emerald px-7 py-4 text-base font-semibold sm:min-w-64"
            >
              <Send className="h-5 w-5" />
              Написать в Telegram
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl btn-emerald px-7 py-4 text-base font-semibold sm:min-w-64"
            >
              <Mail className="h-5 w-5" />
              Отправить письмо на Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
