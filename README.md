# OhMy Site

> The landing page and portal for the OhMy suite.

OhMy Site is the entry point for the OhMy family of tools. It is a single-page landing site that presents each product in the suite (OhMyDocs, OhMyMail, OhMyGrid, OhMyForms, OhMyCharts and OhMy Site itself) as a card that links out to its subdomain, with an English/Spanish language toggle.

## Features

- **Product portal** — six cards, one per OhMy product, linking to its subdomain (docs.ohmy.lat, mail.ohmy.lat, grid.ohmy.lat, forms.ohmy.lat, charts.ohmy.lat, ohmy.lat)
- **Bilingual UI** — English and Spanish translations with a one-click toggle
- **Persisted preference** — the chosen locale is stored in `localStorage` via Zustand (`ohmy-i18n`)
- **Minimal glassmorphism design** — soft background glow, blurred cards, monospace status labels

## Tech stack

- React 19 + TypeScript
- Vite
- TailwindCSS v4
- Zustand (locale state, with `persist`)
- `lucide-react` (icons)
- OxLint for linting

## Getting started

Requires [Bun](https://bun.sh).

```bash
bun install
bun dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Script              | Description                     |
| ------------------- | ------------------------------- |
| `bun dev`           | Start the Vite dev server       |
| `bun run build`     | Type-check and build to `dist/` |
| `bun run lint`      | Run OxLint on `src/`            |
| `bun run preview`   | Preview the production build    |

## License

Apache-2.0

---

Part of the OhMy suite: OhMyForms, OhMyDocs, OhMyMail, OhMyGrid, OhMyCharts, OhMyGantt. A family of small, focused web tools with a browser-only philosophy.
