# Yaksh Bhesaniya - Personal Branding Website

Production-grade personal website for backend engineer Yaksh Bhesaniya, built with modern web technologies and optimized for performance and SEO.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)
- **APIs**: Medium RSS Feed, GitHub REST API
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 🌐 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Optional: GitHub token for higher API rate limits
GITHUB_TOKEN=your_github_token_here

# Required: Your website URL for OG tags
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt config
│   └── opengraph-image.tsx # OG image generator
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── TechnicalExpertise.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   ├── GitHub.tsx
│   │   ├── Resume.tsx
│   │   └── Contact.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── Section.tsx
│   ├── Navigation.tsx     # Fixed navigation bar
│   └── ProjectCard.tsx    # Project display card
├── config/
│   └── site.ts            # Site configuration
├── data/
│   ├── projects.ts        # Project data
│   ├── skills.ts          # Technical skills
│   └── experience.ts      # Work experience & education
├── lib/
│   ├── medium.ts          # Medium RSS parser
│   ├── github.ts          # GitHub API integration
│   └── utils.ts           # Utility functions
└── public/
    └── resume/
        └── Yaksh_Bhesaniya_Resume.pdf  # Resume file
```

## ✏️ Content Management

### Update Personal Information

Edit `config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ... update social links, email, etc.
};
```

### Update Projects

Edit `data/projects.ts` to add/modify projects:

```typescript
{
  title: "Project Name",
  period: "Start-End",
  problem: "Problem statement",
  solution: "Your solution",
  techStack: ["Tech1", "Tech2"],
  challenges: ["Challenge 1", "Challenge 2"],
  outcome: "Results achieved",
  githubUrl: "https://github.com/...",
  featured: true,
}
```

### Update Skills

Edit `data/skills.ts` to modify technical expertise.

### Update Experience

Edit `data/experience.ts` to add work experience and achievements.

### Update Resume

Place your resume PDF at `public/resume/Yaksh_Bhesaniya_Resume.pdf`.

## 🔧 API Integrations

### Medium Blog Posts

The website automatically fetches blog posts from your Medium RSS feed:
- No configuration needed if using default username
- Posts are fetched server-side for better performance
- Cached for fast page loads

### GitHub Repositories

Repositories are fetched from GitHub API:
- Set `GITHUB_TOKEN` for higher rate limits (optional)
- Pinned repos are determined by project names in `lib/github.ts`
- Update `projectRepoNames` array to match your repos

## 🎨 Design Philosophy

This website follows a **technical, minimal, engineering-focused** aesthetic:

- **Dark Theme**: Inspired by VS Code, GitHub Dark, and terminal UIs
- **Typography**: Professional and highly readable
- **No Gimmicks**: No flashy animations or trendy portfolio effects
- **Production-Grade**: Clean, scalable, and performant

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repo on [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - `GITHUB_TOKEN` (optional)
4. Deploy!

### Build Locally

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

## 📊 Performance

This website is optimized for:
- **Lighthouse Score**: Target 95+ across all metrics
- **Core Web Vitals**: Excellent LCP, CLS, and FID
- **SEO**: Proper meta tags, structured data, sitemap
- **Accessibility**: Semantic HTML and WCAG compliance

## 🔍 SEO Features

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (single H1 per page)
- ✅ Meta tags for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Person schema)
- ✅ Dynamic sitemap.xml
- ✅ Robots.txt configuration
- ✅ Optimized images with Next.js Image
- ✅ Clean URLs

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🛠️ Tech Details

- **Server Components**: Used throughout for better performance
- **RSC**: React Server Components for data fetching
- **Edge Runtime**: OG image generation runs on edge
- **Font Optimization**: Google Fonts with next/font
- **Image Optimization**: Automatic via next/image

## 📧 Support

For issues or questions, contact: yakshb.iitb@gmail.com

---

**Built with precision. Engineered for scale.**
