"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 280, damping: 30, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 280, damping: 30, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section id="work" className="relative bg-bg py-28 md:py-36">
      <div className="container-studio">
        <Reveal>
          <div className="flex items-end justify-between border-b border-line pb-8">
            <div>
              <p className="eyebrow text-bronze-light">Selected work</p>
              <h2 className="mt-3 font-display text-display-md text-ink">
                An index, not a gallery.
              </h2>
            </div>
            <p className="hidden max-w-[16rem] text-sm text-ink-muted md:block">
              Hover a line to preview the work. Every project listed here
              shipped to production.
            </p>
          </div>
        </Reveal>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActiveIndex(null)}
          className="relative"
        >
          {/* Floating cursor-follow preview — desktop only */}
          <motion.div
            style={{ left: springX, top: springY }}
            animate={{
              opacity: active ? 1 : 0,
              scale: active ? 1 : 0.92,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute z-20 hidden h-64 w-52 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm shadow-2xl md:block"
          >
            {active && (
              <div
                className="flex h-full w-full flex-col justify-end p-4"
                style={{ background: active.gradient }}
              >
                <p className="eyebrow text-bg/80">{active.year}</p>
                <p className="font-display text-lg italic text-bg">
                  {active.category}
                </p>
              </div>
            )}
          </motion.div>

          <ul>
            {projects.map((project, index) => (
              <li key={project.slug}>
                <Reveal delay={index * 0.05}>
                  <a
                    href="#contact"
                    onMouseEnter={() => setActiveIndex(index)}
                    className="group grid grid-cols-1 items-center gap-4 border-b border-line py-8 transition-colors md:grid-cols-12 md:gap-6"
                  >
                    <span className="eyebrow text-ink-faint md:col-span-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-display text-3xl text-ink transition-colors group-hover:text-bronze-light md:col-span-5 md:text-4xl">
                      {project.name}
                    </span>

                    <span className="text-sm text-ink-muted md:col-span-3">
                      {project.category}
                    </span>

                    {/* Inline thumbnail — mobile only, since there's no cursor to follow */}
                    <span
                      className="block h-32 w-full rounded-sm md:hidden"
                      style={{ background: project.gradient }}
                      aria-hidden
                    />

                    <span className="eyebrow text-ink-faint md:col-span-2 md:text-right">
                      {project.year}
                    </span>

                    <span className="hidden text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-bronze-light md:col-span-1 md:block md:text-right">
                      →
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
