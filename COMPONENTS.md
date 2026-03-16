# Component Documentation

## Header Component

### File: `src/components/Header.tsx`

#### Description
Sticky navigation header with language toggle, mobile-responsive menu, and EnDeck branding.

#### Props
None - Component manages its own state

#### State
- `isOpen: boolean` - Mobile menu open/close state
- `language: 'en' | 'ar'` - Current language
- `setLanguage: function` - Language setter from context

#### Features
- Sticky positioning
- Logo with gradient icon
- Desktop navigation links
- Language toggle button
- Mobile hamburger menu
- Smooth animations

#### Usage
```typescript
import Header from '@/components/Header'

export default function Page() {
  return <Header />
}
```

#### Key Classes
```css
.sticky (position: sticky; top: 0)
.gradient-text (gradient: blue to orange)
.glass (glassmorphism effect)
```

---

## Hero Component

### File: `src/components/Hero.tsx`

#### Description
Large landing section with headline, product mockup, CTA buttons, and statistics.

#### Props
None - Uses translations context

#### State
None - Functional component

#### Features
- Large responsive headline
- Animated 3D can mockup
- Hover shine effects
- CTA buttons with ripple
- Statistics display
- Gradient backgrounds
- Floating product animation

#### Usage
```typescript
import Hero from '@/components/Hero'

export default function Page() {
  return <Hero />
}
```

#### Animation Details
```typescript
// Staggered children animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

// Individual item animation
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}
```

---

## InfoColumn Component

### File: `src/components/InfoColumn.tsx`

#### Description
Reusable feature card component displaying icon, title, and description.

#### Props
```typescript
interface InfoColumnProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}
```

#### Features
- Glass morphism background
- Interactive hover effects
- Icon with gradient background
- "Learn more" link with arrow
- Staggered animations
- Smooth transitions

#### Usage
```typescript
import InfoColumn from '@/components/InfoColumn'

<InfoColumn
  icon="⚡"
  title="Maximum Power"
  description="Packed with essential vitamins..."
  delay={0.2}
/>
```

#### Styling
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.group-hover:bg-white/20 {
  /* Background on hover */
}
```

---

## InfoSection Component

### File: `src/components/InfoSection.tsx`

#### Description
Container for three feature info columns with section header and CTA.

#### Props
None - Uses translations context

#### Features
- Three-column grid layout
- Section header with label
- Responsive grid
- Background gradients
- Bottom CTA button
- Scroll animations

#### Usage
```typescript
import InfoSection from '@/components/InfoSection'

export default function Page() {
  return <InfoSection />
}
```

#### Grid Breakpoints
```css
grid-cols-1        /* Mobile */
md:grid-cols-3     /* Desktop */
gap-8              /* Spacing */
```

---

## Footer Component

### File: `src/components/Footer.tsx`

#### Description
Footer section with brand info, links, and social media.

#### Props
None - Uses language context

#### Features
- Brand logo and description
- Social media links
- Quick navigation links
- Auto-updating year
- Responsive layout
- Hover animations

#### Usage
```typescript
import Footer from '@/components/Footer'

export default function Page() {
  return <Footer />
}
```

#### Auto-Updated Content
```typescript
const currentYear = new Date().getFullYear()
// Updates automatically each year
```

---

## Language Context

### File: `src/lib/languageContext.tsx`

#### Description
React Context for managing language state across application.

#### Provider
```typescript
<LanguageProvider>
  <YourApp />
</LanguageProvider>
```

#### Hook Usage
```typescript
import { useLanguage } from '@/lib/languageContext'

export default function Component() {
  const { language, setLanguage, t } = useLanguage()
  
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {t.nav.shopNow}
    </div>
  )
}
```

#### Context Value
```typescript
interface LanguageContextType {
  language: 'ar' | 'en'
  setLanguage: (lang: 'ar' | 'en') => void
  t: typeof en | typeof ar
}
```

---

## Translations

### File: `src/lib/translations.ts`

#### Structure
```typescript
export const en = {
  nav: { /* Navigation texts */ },
  hero: { /* Hero section texts */ },
  info: { /* Feature section texts */ },
  footer: { /* Footer texts */ }
}

export const ar = {
  // Same structure in Arabic
}
```

#### Adding New Translations

1. **Add to English:**
```typescript
export const en = {
  // ... existing content
  myFeature: {
    title: 'My Feature',
    description: 'Feature description...'
  }
}
```

2. **Add to Arabic:**
```typescript
export const ar = {
  // ... existing content
  myFeature: {
    title: 'ميزتي',
    description: 'وصف الميزة...'
  }
}
```

3. **Use in Component:**
```typescript
const { t } = useLanguage()
return <h1>{t.myFeature.title}</h1>
```

---

## Global Styles

### File: `src/app/globals.css`

#### Custom Classes
```css
.animate-fade-in-up        /* Fade in + slide up */
.animate-slide-in-left     /* Slide in from left */
.glow-effect               /* Pulsing glow animation */
.gradient-text             /* Blue-orange gradient */
.glass                     /* Glassmorphism effect */
```

#### Animations
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(0, 102, 255, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 102, 255, 0.6); }
}
```

---

## Component Composition Example

```typescript
// page.tsx - Complete page composition
'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import InfoSection from '@/components/InfoSection'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/lib/languageContext'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-dark-bg">
        <Header />
        <Hero />
        <InfoSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
```

---

## Best Practices

### 1. Always Use 'use client' for Interactivity
```typescript
'use client'
import { useState } from 'react'
```

### 2. Import Language Hook in Components
```typescript
import { useLanguage } from '@/lib/languageContext'
```

### 3. Use Proper TypeScript Types
```typescript
interface ComponentProps {
  title: string
  delay?: number
}
```

### 4. Implement Responsive Classes
```typescript
className="text-sm md:text-base lg:text-lg"
```

### 5. Add Accessibility Attributes
```typescript
<button aria-label="Close menu" onClick={handleClose}>
  ✕
</button>
```

---

## Testing Components

### Manual Testing Checklist
- [ ] Component renders without errors
- [ ] Responsive on mobile/tablet/desktop
- [ ] Works in both EN and AR
- [ ] Animations play smoothly
- [ ] Hover states work on desktop
- [ ] Touch interactions work on mobile
- [ ] Text is readable on all backgrounds
- [ ] Links are clickable and accessible

---

**For more details, see README.md and FEATURES.md**
