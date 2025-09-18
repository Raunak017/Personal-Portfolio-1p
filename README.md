# Raunak’s Portfolio

A fast, responsive personal portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It showcases projects, an animated hero, an “About Me” with dynamic visuals, and a downloadable resume. The project is live at https://raunak17.dev

## 🚀 Features
- Animated hero with rotating title: **Software / AI Engineer**
- Clean, responsive UI with Tailwind
- Smooth entrance/scroll animations (Framer Motion)
- About section with photo frame and subtle motion effects
- “Download Resume” button (opens PDF in a new tab)
- SEO-friendly (Next.js App Router)

## 🧰 Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript, React
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Images:** next/image

## ▶️ Getting Started

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev
# ➜ http://localhost:3000

# 3) Lint
npm run lint

# 4) Build & start
npm run build
npm start
```

## 🔧 Project Structure (key parts)

```
.
├─ app/                 # Next.js app router pages/layouts
├─ components/          # Reusable UI (Hero, About, Project cards, etc.)
│  ├─ Hero.tsx          # Rotating title + CTA buttons
│  ├─ About.tsx         # Photo frame + about content
│  └─ ...               
├─ public/
│  ├─ resume.pdf        # Your resume for the 'Download Resume' button
│  └─ images/
│     └─ raunak-about.jpeg
├─ styles/              # Global styles (if any)
├─ tsconfig.json
├─ tailwind.config.ts
└─ package.json
```

## 🖼️ Assets

- **About photo:** place at `public/images/raunak-about.jpeg`  

- **Resume:** place a PDF at `public/resume.pdf`.  

## ⚙️ Configuration

- **SEO / Metadata:** set in your `app/layout.tsx` (title, description, social preview).
- **Analytics (optional):** add your provider snippet in `app/layout.tsx`.
- **Env vars (if you add forms or APIs later):** create `.env.local` and access via `process.env.MY_VAR`.

## 🚢 Deployment

The project is depoloyed via Netlify and is live it https://raunak17.dev

```bash
# Build locally to verify
npm run build
# Then push to GitHub and import the repo in Vercel
```

## 📦 Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 🧽 Code Style

- Type-safe with TypeScript
- ESLint + recommended Next.js rules
- Tailwind utility-first styling

## 📝 License

Personal portfolio—use as reference or fork with attribution.
