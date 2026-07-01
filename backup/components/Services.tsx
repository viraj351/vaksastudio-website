import { services } from "@/lib/data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="relative bg-bg-alt py-28 md:py-36">
      <div className="container-studio">
        <Reveal>
          <div className="border-b border-line pb-8">
            <p className="eyebrow text-bronze-light">What we do</p>
            <h2 className="mt-3 max-w-2xl font-display text-display-md text-ink">
              Four disciplines, one studio, no hand-offs.
            </h2>
          </div>
        </Reveal>

        <div className="divide-y divide-line">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={index * 0.06}>
              <div className="grid gap-6 py-12 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl italic text-ink">
                    {service.name}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-ink-muted">{service.description}</p>
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-2">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="text-sm text-ink-faint">
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
