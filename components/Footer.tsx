const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/vaksastudio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/vaksastudio" },
  { label: "Are.na", href: "https://www.are.na/vaksastudio" },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-alt">
      <div className="container-studio border-t border-line py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl text-ink">
              Vaksa <span className="italic text-bronze-light">Studio</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink-muted">
              An independent creative agency for brand, digital, and motion.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="eyebrow text-ink-muted transition-colors hover:text-bronze-light"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vaksa Studio. All rights reserved.</p>
          <p>Designed and built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
