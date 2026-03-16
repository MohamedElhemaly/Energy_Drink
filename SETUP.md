# EnDeck - Energy Drink Website Setup Guide

## Overview

EnDeck is a modern, responsive landing page for a premium energy drink brand. Built with Next.js 14, featuring bilingual support (English & Arabic), smooth animations with Framer Motion, and responsive design.

## 🎯 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone/Open project:**
```bash
cd d:\energyDrink_website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:3000
(or http://localhost:3001 if port 3000 is in use)
```

## 📂 Project Structure

```
energyDrink_website/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main page component
│   │   ├── layout.tsx         # Root layout with fonts & metadata
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── Header.tsx         # Navigation header with language switcher
│   │   ├── Hero.tsx           # Hero section with 3D can mockup
│   │   ├── InfoColumn.tsx     # Reusable info column component
│   │   ├── InfoSection.tsx    # Three-column features section
│   │   └── Footer.tsx         # Footer with links
│   └── lib/
│       ├── translations.ts    # EN/AR translations
│       └── languageContext.tsx # i18n context provider
├── public/
│   └── images/                # Static images
├── .vscode/
│   └── settings.json          # VS Code workspace settings
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies & scripts
└── README.md                  # Project documentation

```

## 🎨 Key Features

### 1. **Bilingual Support (EN/AR)**
- Easy language switching via header button
- Full RTL support for Arabic
- All content translated
- Persistent language state

### 2. **Modern Animations**
- Page load stagger animations
- Scroll-triggered reveal effects
- Interactive hover animations
- Floating can animation in hero

### 3. **Responsive Design**
- Mobile-first approach
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+
- Adaptive navigation menu

### 4. **UI Components**
- Glass morphism effects
- Gradient overlays
- Interactive cards
- Smooth transitions

## 🛠️ Build Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎨 Customization

### Colors
Edit `src/lib/translations.ts` and `tailwind.config.js`:
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'dark-bg': '#0a0a0a',
      'primary-blue': '#0066ff',
      'accent-orange': '#ff6b35',
    }
  }
}
```

### Translations
Edit `src/lib/translations.ts` to add or modify content:
```typescript
export const ar = {
  nav: {
    products: 'المنتجات',
    // Add more translations...
  }
}
```

### Fonts
Edit `src/app/layout.tsx` to customize fonts:
```typescript
// Already configured: Inter & Poppins from Google Fonts
```

## 📦 Dependencies

- **next**: 14.0+ - React framework
- **react**: 18.2+ - UI library
- **framer-motion**: 10.16+ - Animations
- **tailwindcss**: 3.4+ - Styling
- **typescript**: 5.0+ - Type safety

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
```bash
# Build static export
npm run build

# Deploy the .next folder to your hosting
```

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Module not found errors
```bash
# Ensure tsconfig.json paths are correct
# Check @/ alias points to ./src/
```

### CSS not loading
```bash
# Verify tailwind.config.js content paths
# Check postcss.config.js includes tailwindcss
```

## 📱 Testing Responsive Design

Use browser DevTools:
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test different breakpoints
4. Test both EN and AR languages

## 🔐 Best Practices

1. **Always use client components** for interactive elements
```typescript
'use client'
import { useState } from 'react'
```

2. **Use TypeScript types** for props:
```typescript
interface Props {
  title: string;
  delay?: number;
}
```

3. **Optimize images** with next/image
4. **Use semantic HTML** for accessibility
5. **Test on real devices** and browsers

## 📝 Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to remote
git push origin feature/my-feature
```

## 📞 Support & Maintenance

- Check [Next.js Docs](https://nextjs.org/docs)
- Check [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Check [Framer Motion Docs](https://www.framer.com/motion/)

## 📄 License

© 2024 EnDeck. All rights reserved.

---

**Created with ⚡ for peak performance and modern web standards**
