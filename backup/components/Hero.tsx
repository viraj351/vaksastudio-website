"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-bg"
    >
      <div
        className="absolute -top-1/4 right-[-10%] h-[70vmax] w-[70vmax] rounded-full opacity-40 blur-3xl animate-drift"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(184,131,79,0.35), rgba(139,74,61,0.12) 45%, transparent 70%)",
        }}
      />
      <div className="grain-overlay" />

      <div className="container-studio relative z-10 flex flex-1 flex-col justify-between pt-32 pb-14 md:pb-16">
        <div className="flex items-start justify-between">
          <p className="eyebrow max-w-[14rem] text-ink-muted">
            Independent creative studio — brand, digital &amp; motion
          </p>
          <p className="eyebrow hidden text-right text-ink-muted md:block">
            Est. 2008
            <br />
            Based worldwide
          </p>
        </div>

        <div className="mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-xl text-ink"
          >
            We build brands
            <br />
            that age like <span className="italic text-bronze-light">good oak.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-ink-muted">
              Vaksa Studio is a small team of designers, writers, and
              engineers making identities and digital experiences for
              clients building for decades, not quarters.
            </p>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="eyebrow inline-flex w-fit items-center gap-3 text-ink transition-colors hover:text-bronze-light"
            >
              View selected work
              <span aria-hidden className="inline-block h-px w-10 bg-current" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
