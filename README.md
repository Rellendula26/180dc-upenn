# 180DC Penn Website

A website implementation for 180 Degrees Consulting at the University of Pennsylvania. It presents the chapter, consulting services, past work, team directory, recruiting information, and a client inquiry form.

Built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

Use Node.js and npm:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run lint
npm run build
npm run start
```

## Edit content

- `src/data/site.ts`: chapter settings, navigation, contact details, application URL, social links, and form endpoint.
- Other files in `src/data/`: team, projects, services, clients, FAQs, and recruiting content.
- `src/components/`: reusable page sections and the inquiry form.
- `src/app/`: pages, metadata, sitemap, and robots configuration.
- `public/images/` and `public/brand/`: images and logos.

Set `NEXT_PUBLIC_SITE_URL` to the production origin when deploying. Without it, the site configuration falls back to `http://localhost:3000`.

## Before launch

The current configuration leaves the chapter email, application URL, social URLs, and inquiry endpoint unset. The inquiry form deliberately prevents delivery when no endpoint is configured. Add verified destinations in `src/data/site.ts` before expecting applications or client inquiries to arrive.

Review team/project content, photo credits, and ranking language before publishing. A finished-looking interface does not establish that every content claim is verified. There is no automated test script in `package.json`; build and lint results were not rerun for this documentation update.
