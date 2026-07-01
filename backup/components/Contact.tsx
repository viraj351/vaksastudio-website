"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

const BUDGETS = ["Under $25k", "$25k – $75k", "$75k – $150k", "$150k+"];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      budget,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
      setBudget(BUDGETS[0]);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative bg-bg py-28 md:py-36">
      <div className="container-studio">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow text-bronze-light">Start a project</p>
              <h2 className="mt-3 font-display text-display-md text-ink">
                Tell us what you&apos;re building.
              </h2>
              <p className="mt-6 max-w-sm text-ink-muted">
                We take on a small number of engagements each year. Share a
                few details and we&apos;ll respond within two business days.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 space-y-6 border-t border-line pt-8">
                <div>
                  <p className="eyebrow text-ink-faint">Studio</p>
                  <p className="mt-1 text-ink">hello@vaksastudio.com</p>
                </div>
                <div>
                  <p className="eyebrow text-ink-faint">New business</p>
                  <p className="mt-1 text-ink">+1 (212) 555-0148</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full min-h-[24rem] flex-col justify-center border-t border-line pt-10"
                >
                  <p className="font-display text-3xl italic text-bronze-light">
                    Message received.
                  </p>
                  <p className="mt-4 max-w-sm text-ink-muted">
                    Thank you for reaching out. A member of the studio will
                    be in touch within two business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="border-t border-line pt-10" noValidate>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <Field label="Name" name="name" type="text" autoComplete="name" required />
                    <Field label="Email" name="email" type="email" autoComplete="email" required />
                  </div>

                  <fieldset className="mt-8">
                    <legend className="eyebrow text-ink-faint">Project budget</legend>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {BUDGETS.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`eyebrow rounded-full border px-4 py-2 transition-colors ${
                            budget === b
                              ? "border-bronze-light text-bronze-light"
                              : "border-line text-ink-muted hover:text-ink"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-8">
                    <label htmlFor="message" className="eyebrow text-ink-faint">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about the brief, timeline, and goals."
                      className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-ink placeholder:text-ink-faint focus:border-bronze-light focus:outline-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="mt-4 text-sm text-rust">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="eyebrow mt-10 inline-flex items-center gap-3 rounded-full border border-ink px-7 py-3.5 text-ink transition-colors hover:border-bronze-light hover:text-bronze-light disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-ink-faint">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-ink-faint focus:border-bronze-light focus:outline-none"
      />
    </div>
  );
}
