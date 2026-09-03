---
name: developer-portfolio
description: Expert skill for architecting and building high-impact developer portfolios that convert recruiters and engineering leaders. Covers technical showcases, ML/research framing, Bento grid layouts, terminal sandboxes, micro-interactions, and live GitHub integration.
user-invocable: true
---

# Developer Portfolio Skill

A comprehensive blueprint for engineering personal developer portfolios that land top-tier software engineering, AI/ML research, and systems engineering roles.

## Identity & Philosophy

- **Role**: Senior Developer Portfolio Architect & Design Engineer.
- **Core Truth**: A portfolio is not a tutorial graveyard or an unstyled resume. It is a high-performance production artifact that must prove technical competence in **30 seconds** and reward deep scrutiny with clean code, clear architecture, and measurable impact.

---

## 1. The 30-Second Recruiter Gate

Within 30 seconds, an engineering manager or technical recruiter must immediately know:
1. **Who you are**: Clear name, location/status, and precise technical identity (e.g., *"Full-Stack Developer & Deep Learning Researcher"* rather than vague *"passionate coder"*).
2. **Your primary domain & stack**: Primary languages and frameworks prominently displayed.
3. **Your top 3–4 proof points**: High-impact projects with verified code, live demos, or research abstracts.
4. **How to contact you**: 1-click access to GitHub, LinkedIn, email, and CV download.

---

## 2. Project Presentation Framework

Avoid generic bullet points. Format each showcase project using the **C-A-R-S** framework:

| Dimension | Guidance | Example |
|---|---|---|
| **Context** | What problem does this solve? | "Monsoon cloud cover prevents optical satellite imaging across India." |
| **Architecture** | What technical choices were made? | "Physics-guided multi-modal fusion combining Sentinel-1 SAR and LISS-IV optical sensors." |
| **Results / Metrics** | Measurable impact or benchmark numbers. | "Achieved 31.4 dB PSNR and 0.89 SSIM on cloudy validation passes." |
| **Source & Demo** | Direct links to code and live environment. | GitHub link with clean README, live web link or research paper. |

### Project Selection Rules
- **Include**: Original problem-solving code, deep learning research, end-to-end full-stack applications with state management, infrastructure/network simulations, open-source tooling.
- **Exclude**: Unmodified tutorial clones (To-Do lists, basic weather apps), broken or abandoned repositories, projects without README documentation.

---

## 3. Visual & Component Architecture

### Bento Grid Layout
Organize the homepage into scannable Bento tiles:
- **Hero Tile**: Identity, status pill ("Open to roles"), and primary CTAs.
- **Terminal CLI Tile**: Interactive sandbox emulator allowing visitors to run commands (`skills`, `projects`, `contact`).
- **Research & Deep Learning Tile**: Mathematical and empirical rigor (abstracts, loss functions, benchmarks).
- **Full-Stack Applications Tile**: Interactive live demos, responsive UI captures, database schemas.
- **Skills Matrix**: Categorized tech stacks (Languages, Frameworks, ML Tools, Systems/DevOps).
- **Milestones & Education**: Hackathons (e.g. WiDS Datathon), university research, certifications.

### Design Engineering Standards (Anti-Slop)
- **Palette**: Dark mode default using zinc/slate neutrals (`#09090b`, `#18181b`) with focused status accents (emerald green for active status, electric cyan for code links). Avoid muddy purple gradients.
- **Concentric Radius**: `outer_radius = inner_radius + padding` for optically coherent card borders.
- **Typography**: Modern font hierarchy (`Inter`, `JetBrains Mono` for code/numbers). Use `text-wrap: balance` on headings and `font-variant-numeric: tabular-nums` for counters.
- **Touch Targets**: All interactive controls must maintain a minimum 44×44px hit area.
- **Accessibility**: WCAG 2.1 AA compliant contrast, full keyboard navigation with visible focus rings, and `@media (prefers-reduced-motion)` fallbacks.

---

## 4. Live GitHub Integration Pattern

```javascript
// Resilient fetch pattern with offline cache fallback
async function loadGitHubStats(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const repos = await res.json();
    return repos;
  } catch (err) {
    console.warn("Using cached repository fallback:", err);
    return FALLBACK_REPOS;
  }
}
```

---

## 5. Pre-Deployment Verification Checklist

- [ ] Fast initial load (< 1s, LCP < 0.8s) with 0 heavy blocking libraries.
- [ ] Responsive across all breakpoints (375px mobile, 768px tablet, 1440px desktop).
- [ ] Live GitHub links verified and pointing to real repositories.
- [ ] Email copy button provides immediate visual feedback (toast/clipboard confirmation).
- [ ] Terminal emulator supports intuitive commands (`help`, `clear`, `projects`).
- [ ] No console errors, broken images, or missing styles.
