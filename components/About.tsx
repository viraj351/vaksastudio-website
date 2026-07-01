import { stats } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-bg-alt py-28 md:py-36">
      <div className="container-studio">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow text-bronze-light">About the studio</p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <p className="font-display text-display-md text-ink">
                We think of brand as infrastructure — the part of a company
                that has to hold weight for years, not the surface that
                changes each season.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-ink-muted">
                Founded in 2008, Vaksa Studio works across identity, digital
                product, and film for a small roster of clients at a time.
                No account layer, no template libraries — every engagement is
                led by the people who will do the work, from the first
                sketch to the file that ships to production.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl text-ink md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="eyebrow mt-2 text-ink-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
