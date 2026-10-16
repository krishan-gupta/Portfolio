# 🚀 Krishan Gupta — Developer Portfolio

[![React 19](https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![WebGL / OGL](https://img.shields.io/badge/WebGL-OGL-black?logo=webgl&logoColor=white)](https://github.com/oframe/ogl)
[![Vercel Analytics](https://img.shields.io/badge/Vercel-Analytics-000000?logo=vercel&logoColor=white)](https://vercel.com/analytics)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, high-performance developer portfolio showcasing practical tools, AI/ML research prototypes, certifications, and technical proficiencies. Designed with interactive 3D WebGL graphics, fluid page transitions, and responsive HUD-inspired aesthetics.

🌐 **Live Demo:** [portfolio-krishan-gupta.vercel.app](https://portfolio-krishan-gupta.vercel.app) *(or your deployed Vercel URL)*

---

## ✨ Features

- **Interactive 3D / WebGL Experience:** Custom WebGL horizon bloom (`OGL`), meteor rain effects, and dynamic grain gradients.
- **Dynamic Project Showcase:** Filterable projects catalog with dedicated project detail views (`/projects/:slug`), tech tags, metrics, and live demo / GitHub repo links.
- **Multi-Track Resume (`/resume`):** Specialized interactive views for different domains (Developer, AI/ML, etc.) alongside downloadable PDF access.
- **Interactive Metric Counters & Achievements:** Animated telemetry counters and verified certification badges.
- **Integrated Contact Form:** Powered by [Web3Forms](https://web3forms.com) with real-time status feedback and spam protection.
- **Real-Time Telemetry & HUD:** Live Chennai (IST) clock, coordinate telemetry (`12.8406° N, 80.1534° E`), and interactive floating social dock.
- **Traffic Insights:** Real-time privacy-friendly analytics via `@vercel/analytics`.
- **Accessibility & Performance:** Reduced-motion detection, optimized asset pipelines, lightweight custom router, and fast load times with Vite.

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Core Framework** | [React 19](https://react.dev/), [Vite](https://vitejs.dev/) |
| **Graphics & 3D** | [OGL](https://github.com/oframe/ogl) (Minimal WebGL library) |
| **Styling** | Vanilla CSS (Modern CSS Variables, Glassmorphism, CSS Grid & Flexbox) |
| **Typography** | Inter, JetBrains Mono, Outfit (via Google Fonts) |
| **Forms & Communication** | [Web3Forms](https://web3forms.com) API |
| **Analytics & Hosting** | [Vercel](https://vercel.com) & [Vercel Web Analytics](https://vercel.com/analytics) |
| **Linting & Code Quality** | [Oxlint](https://oxc.rs) |

---

## 📁 Project Structure

```text
Portfolio/
├── public/                # Static assets, favicon, and documents
├── src/
│   ├── assets/            # Project graphics and media
│   ├── components/        # Reusable UI & WebGL components
│   │   ├── HorizonBloom/  # OGL-powered 3D horizon bloom
│   │   ├── Meteors/       # Canvas meteor animation
│   │   ├── Nav/           # Header navigation & brand capsule
│   │   ├── Footer/        # Telemetry footer & live IST clock
│   │   ├── SocialDock/    # Floating social dock
│   │   ├── SlingTop/      # Scroll-to-top dynamic action button
│   │   ├── TechIcon/      # Dynamic tech stack SVG icons
│   │   └── Loader/        # First-load intro transition
│   ├── data/              # Projects, certifications, achievements & resume data
│   ├── hooks/             # Custom hooks (useReveal, useCountUp, etc.)
│   ├── pages/             # Page components
│   │   ├── Home/          # Hero, About, Skills, Featured Projects, Contact
│   │   ├── Projects/      # Full projects gallery with filters
│   │   ├── ProjectDetail/ # Deep dive page per project slug
│   │   ├── Resume/        # Multi-track resume viewer
│   │   └── NotFound/      # 404 handler
│   ├── router/            # Lightweight client-side router & page transitions
│   ├── styles/            # Base styling & design tokens
│   ├── App.jsx            # Main app shell & router provider
│   └── main.jsx           # React DOM root entry
├── .env.example           # Environment template
├── vercel.json            # Vercel deployment & routing configuration
└── vite.config.js         # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### 1. Clone the Repository

```bash
git clone https://github.com/krishan-gupta/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy the sample environment file:

```bash
cp .env.example .env
```

Open `.env` and insert your [Web3Forms](https://web3forms.com) access key for contact form functionality:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### 5. Production Build

To build the static production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment on Vercel

This project is configured out-of-the-box for deployment on **Vercel**:

1. Push your repository to GitHub.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Under **Environment Variables**, add:
   - `VITE_WEB3FORMS_ACCESS_KEY`: your Web3Forms access key.
4. Click **Deploy**. Vercel will automatically build the app and start recording visitor metrics via `@vercel/analytics`.

---

## 📬 Contact & Connect

- **Author:** Krishan Gupta
- **Institution:** B.Tech CSE (AI & ML) — Vellore Institute of Technology (VIT Chennai)
- **Email:** [work.krishan.gupta@gmail.com](mailto:work.krishan.gupta@gmail.com)
- **LinkedIn:** [linkedin.com/in/krishangupta1607](https://linkedin.com/in/krishangupta1607)
- **GitHub:** [github.com/krishan-gupta](https://github.com/krishan-gupta)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
