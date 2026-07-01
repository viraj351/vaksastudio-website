# Vaksa Studio

A production-ready marketing site for Vaksa Studio, an independent creative
agency. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and
Framer Motion.

## Design system

- **Palette** — warm charcoal background (`#0E0D0C`), ivory ink (`#F3EEE4`),
  and a bronze accent (`#B8834F` / `#D9AE7D`) used sparingly, with a rust tone
  reserved for errors/emphasis.
- **Type** — Fraunces (display serif, used in roman and italic) paired with
  Manrope (body/UI, tracked-wide uppercase for labels).
- **Signature interaction** — the work section is an editorial index rather
  than a card grid: hovering a project on desktop reveals a cursor-following
  preview panel; on mobile it falls back to inline thumbnails.
- Motion respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx          Root layout, fonts, SEO metadata, JSON-LD
  page.tsx             Home page composition
  globals.css          Design tokens & base styles
  opengraph-image.tsx   Dynamically generated OG image
  manifest.ts           Web app manifest
  sitemap.ts / robots.ts SEO routes
  api/contact/route.ts   Contact form handler (validates + logs; wire to
                          an email provider such as Resend)
components/
  Nav, Hero, About, Portfolio, Services, Contact, Footer, Reveal
lib/
  data.ts               Project, service, and stat content
```

## Wiring up the contact form

`app/api/contact/route.ts` validates submissions and logs them server-side.
To actually deliver enquiries, add an email provider (Resend is the
simplest for Next.js/Vercel):

```bash
npm install resend
```

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Vaksa Studio <hello@vaksastudio.com>",
  to: "newbusiness@vaksastudio.com",
  replyTo: email,
  subject: `New enquiry from ${name}`,
  text: `${name} (${email})\nBudget: ${budget}\n\n${message}`,
});
```

Add `RESEND_API_KEY` in your Vercel project's Environment Variables (see
`.env.example`).

## Content

Replace the placeholder project, service, and stat copy in `lib/data.ts`
with real case studies. Project thumbnails currently use generated CSS
gradients as stand-ins for photography — swap `gradient` for a real image
(`next/image`) once assets are available.

Update the placeholder domain (`vaksastudio.com`), social links in
`components/Footer.tsx`, and contact details in `components/Contact.tsx`
before launch.

## Deploying to Vercel

1. Push this project to a Git repository.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no build configuration needed.
4. Add any environment variables from `.env.example`.
5. Deploy.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint
