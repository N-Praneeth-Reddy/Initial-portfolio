# Portfolio Setup Guide

## What you need to download / install

### ✅ Already installed (verified)
| Tool | Version | Status |
|---|---|---|
| Node.js | v22.14.0 | ✅ Ready |
| npm | v10.9.2 | ✅ Ready |

---

### 🌐 Download from the internet

#### 1. Node.js (already installed — skip)
> No action needed.

#### 2. Git (if not installed)
- Download: https://git-scm.com/download/win
- Check if installed: `git --version`

#### 3. VS Code Extensions (recommended, optional)
Install these from the VS Code Extensions panel:
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
- **Prettier** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)
- **TypeScript + JavaScript** (built-in)

---

## Step-by-step setup

### Step 1 — Scaffold Next.js project
Run this in your `portfolio_cursor` folder:

```bash
npx create-next-app@15 ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

> ⚠️ This will ask a few prompts. Say **Yes** to all defaults.

### Step 2 — Install all dependencies
Copy the `requirements/package.json` into the root of the project (it will replace the scaffolded one), then run:

```bash
npm install
```

This single command downloads **all** packages listed below from npm (internet required).

### Step 3 — Run dev server
```bash
npm run dev
```
Open http://localhost:3000 to see the site.

---

## What npm install downloads (~total ~180 MB)

| Package | Purpose | Size (approx) |
|---|---|---|
| `next@15` | React framework, routing, SSR | ~50 MB |
| `react@19` + `react-dom` | UI rendering | ~5 MB |
| `framer-motion@12` | Scroll + hover animations | ~3 MB |
| `gsap@3` | Timeline / scroll-trigger animations | ~2 MB |
| `@react-three/fiber@9` | 3D canvas (hero background) | ~2 MB |
| `@react-three/drei@10` | 3D helpers (OrbitControls, etc.) | ~3 MB |
| `three@0.176` | WebGL 3D engine | ~15 MB |
| `@tsparticles/react` + `slim` | Particle system | ~3 MB |
| `lenis@1` | Smooth scroll library | ~0.5 MB |
| `lucide-react` | Icon library | ~2 MB |
| `react-type-animation` | Typewriter text effect | ~0.2 MB |
| `react-hook-form` | Contact form handling | ~0.5 MB |
| `resend` | Email API (contact form backend) | ~0.3 MB |
| `clsx` + `tailwind-merge` | CSS class utilities | ~0.1 MB |
| `class-variance-authority` | Component variant system | ~0.1 MB |
| `tailwindcss@4` + PostCSS | Utility CSS framework | ~15 MB |
| TypeScript + type definitions | Type safety | ~20 MB |
| ESLint + config | Code linting | ~15 MB |
| (dev + transitive deps) | Build toolchain | ~50 MB |

> **Internet required**: All packages download from https://registry.npmjs.org
> **One-time download**: After `npm install`, packages are cached locally in `node_modules/`

---

## External accounts needed (optional but recommended)

| Service | Why | Free tier |
|---|---|---|
| **Resend** (resend.com) | Send emails from contact form | ✅ 3000 emails/month |
| **Vercel** (vercel.com) | Deploy site for free | ✅ Hobby plan |

---

## Notes
- The `venv` folder in your project is for Python — it won't interfere with the Next.js setup.
- `node_modules/` is gitignored automatically by Next.js scaffold.
- Total disk space after install: ~250–350 MB (mostly `node_modules`)
