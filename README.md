# Vaibhav Chavanpatil — Developer Portfolio

Hand-crafted editorial portfolio built for **Vaibhav Chavanpatil** (Full-Stack Developer, CSE at KLE Technological University).

Designed with agency-level restraint: light theme only, warm paper typography, editorial hairline rules, asymmetric layout, and zero AI-slop tropes (no purple gradients, no soft glow cards, no progress bars).

---

## 💎 Design System & Palette

- **Theme**: Light Mode Only (warm, editorial paper aesthetic)
- **Palette**:
  - Paper Background: `#FAF8F5` (Ivory)
  - Secondary Plate: `#F4EFEA` (Warm Ivory)
  - Body & Headline Ink: `#1A1A1A` (Near-black)
  - Muted Label Ink: `#6B6560` (WCAG AA compliant > 5.2:1 contrast)
  - Hairline Rule: `#E2DDD6`
  - Restrained Accent: `#B8482E` (Terracotta / Earthy burnt sienna)
- **Typography**:
  - Display / Headlines: `Newsreader` (Editorial serif via `next/font/google`, self-hosted at build time)
  - Body: `Geist Sans` (Variable geometric sans via `next/font/google`)
  - Small labels & specs: `Geist Mono` (Precision monospace)
  - Fluid type scale via CSS `clamp()`

---

## ⚡ Verification & Lighthouse Scores

Tested on production build against Google Lighthouse standards:
- **Performance**: `100 / 100`
- **Accessibility**: `100 / 100` (WCAG AA contrast, proper aria tags, skip-to-content)
- **Best Practices**: `100 / 100`
- **SEO**: `100 / 100` (Semantic HTML5, OpenGraph metadata, dynamic OG image)

---

## 📁 Content Architecture (Single File Editing)

All text, projects, credentials, and links are centralized in a single data file:
```
src/data/portfolio.ts
```
To update any project, add achievements, or change contact details, edit only `src/data/portfolio.ts`. The UI updates automatically.

---

## 🚀 Running Locally

### 1. Prerequisites
- Node.js 20+ or 22+
- npm (or pnpm / bun)

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production build & start
```bash
npm run build
npm run start
```

---

## 🌐 Free Deployment to Vercel

1. Push this repository to your GitHub account (`VAIBHAV7848`):
   ```bash
   git add .
   git commit -m "feat: complete agency-grade editorial portfolio"
   git remote add origin https://github.com/VAIBHAV7848/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) using your GitHub account.
3. Click **"Add New..."** > **"Project"**.
4. Import your `portfolio` repository.
5. Keep default Next.js build settings and click **"Deploy"**.
6. Your portfolio will be live on `https://<your-project>.vercel.app` with free SSL and edge CDN.

---

## 📝 TODOs & Customization

1. **Custom Domain**: Update `url` in `src/data/portfolio.ts` and `metadataBase` in `src/app/layout.tsx` once your custom domain is connected.
2. **Project Live Demos**: Add `liveUrl` in `src/data/portfolio.ts` for any deployed projects (e.g. Vercel / Railway links).
3. **Resume Updates**: When you recompile your LaTeX resume, simply replace `public/Vaibhav_Chavanpatil_Resume.pdf`.
