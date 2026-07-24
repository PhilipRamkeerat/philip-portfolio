<div align="center">
  <h1>Philip Ramkeerat — Portfolio</h1>
  <p>
    A one-page portfolio built with <strong>Angular 20</strong> — zoneless, signal-based, server-side rendered,
    with a hand-crafted design system and zero UI libraries.
  </p>

  <p>
    <img src="https://img.shields.io/badge/Angular-20-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular 20" />
    <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/SSR-Angular%20SSR-8B5CF6?style=flat-square" alt="SSR" />
    <img src="https://img.shields.io/badge/Zoneless-Signals-EC4899?style=flat-square" alt="Zoneless + Signals" />
  </p>

  <p><a href="https://philipramkeerat.com.br"><strong>philipramkeerat.com.br »</strong></a></p>
</div>

---

## Why this project is interesting

This is not a template — every pixel and every line is hand-written, and it doubles as a
showcase of how I build Angular applications in 2026:

| Area | Approach |
| --- | --- |
| **Reactivity** | 100% signal-based state (`signal`, `computed`, `effect`) with **zoneless change detection** |
| **Components** | Standalone components, `ChangeDetectionStrategy.OnPush`, `input()` signal inputs, native `@if` / `@for` control flow |
| **DI** | `inject()` function everywhere — no constructor parameter injection |
| **Rendering** | Server-side rendering + hydration with event replay for instant first paint |
| **Animations** | Custom `RevealDirective` built on `IntersectionObserver` — no animation libraries, SSR-safe, honors `prefers-reduced-motion` |
| **Icons** | Inline SVG icon component — replaced the Font Awesome CDN (~80KB) with a few hundred bytes per icon |
| **Design system** | Hand-rolled SCSS design tokens: dark/light themes, fluid `clamp()` typography, violet→pink accent |
| **i18n** | Typed content model with full EN/PT translations, switchable at runtime, persisted and auto-detected from the browser |
| **Accessibility** | Semantic landmarks, skip link, focus-visible styles, `aria-*` on all controls, keyboard-dismissable menu |
| **SEO** | Prerendered HTML, canonical URL, Open Graph, JSON-LD structured data |

## Architecture

```
src/app/
├── core/            # Domain: typed i18n content model + language & theme services
│   ├── translations.ts
│   ├── language.service.ts
│   └── theme.service.ts
├── shared/          # Reusable building blocks
│   ├── icon.component.ts     # Inline SVG icon registry
│   └── reveal.directive.ts   # IntersectionObserver scroll reveal
├── layout/          # App shell
│   ├── header/      # Glass header: scrollspy nav, theme + language toggles, mobile overlay
│   └── footer/
└── sections/        # The one-page flow
    ├── hero/  ├── about/  ├── skills/
    ├── experience/  ├── projects/  └── contact/
```

## Getting started

```sh
npm install
npm start          # dev server at http://localhost:4200
npm test           # unit tests (Karma + Jasmine)
npm run build      # production build (browser + server bundles)
npm run serve:ssr:philip-portfolio   # serve the SSR build with Express
```

## Deployment

For static Apache hosting (Hostinger):

```sh
npm run build:hostinger
```

This builds the app and assembles `hostinger-upload/` with the prerendered output plus an
`.htaccess` configured for SPA fallback, compression, caching and security headers.
Upload its contents to `public_html/`.

## License

MIT — see [LICENSE](LICENSE).

## Contact

**Philip Ramkeerat** — Senior Angular Developer

[philip_ramkeerat@hotmail.com](mailto:philip_ramkeerat@hotmail.com) ·
[LinkedIn](https://www.linkedin.com/in/philip-ramkeerat/) ·
[GitHub](https://github.com/PhilipRamkeerat)
