# EnDeck Features & Components

## 🌟 Feature Overview

### 1. Bilingual Support
- **English/Arabic Toggle**: Located in header, easy switching
- **RTL Support**: Full right-to-left text direction for Arabic
- **Persistent State**: Language preference is maintained
- **Complete Translations**: All UI text is translated

#### Language Switcher Component
```typescript
// In Header.tsx
const [language, setLanguage] = useState('en')
onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
```

### 2. Responsive Navigation
- **Sticky Header**: Stays at top while scrolling
- **Desktop Menu**: Full navigation menu on larger screens
- **Mobile Hamburger**: Collapsed menu for mobile devices
- **Language Toggle**: Quick language switch in header
- **Smooth Animations**: Header slides in on page load

#### Components
- `Header.tsx`: Main navigation component
- Features: Language toggle, responsive menu, gradient logo

### 3. Hero Section
- **Large Headline**: "The Energy That Keeps You Going"
- **3D Can Mockup**: Animated product mockup with glow effect
- **Call-to-Action Buttons**: "Shop Now" and "Learn More"
- **Statistics Display**: 100% Natural, 1M+ Users, 50+ Countries
- **Floating Animation**: Product can animates smoothly
- **Gradient Background**: Dynamic blue and orange gradients

#### Key Features
```typescript
// Animated stats section
{t.hero.stats.map((stat) => (
  <div>
    <p className="text-3xl font-bold gradient-text">{stat.value}</p>
  </div>
))}
```

### 4. Info Section (3-Column Features)
- **Three Feature Columns**: 
  1. Alcohol Free 🚫
  2. Maximum Power ⚡
  3. Heritage & Taste 📖
- **Interactive Cards**: Hover effects and animations
- **Icon & Text**: Clear information architecture
- **Learn More Links**: Encouraging user engagement

#### Component
- `InfoColumn.tsx`: Reusable feature card component
- `InfoSection.tsx`: Three-column layout container

### 5. Footer
- **Brand Info**: Logo and company description
- **Quick Links**: Product, Company sections
- **Social Media**: Links to social platforms
- **Legal Links**: Privacy Policy and Terms
- **Copyright**: Year auto-update

#### Features
```typescript
// Auto-updating year
const currentYear = new Date().getFullYear()
```

### 6. Animations & Effects

#### Loading Animations
- Staggered fade-in effects
- Slide-in animations from sides
- Smooth scaling transitions

#### Scroll Animations
- Elements reveal as they enter viewport
- `whileInView` Framer Motion prop
- Consistent timing across components

#### Hover Effects
- Button scale transforms
- Color gradient transitions
- Shadow effects on interactive elements
- Icon rotation on hover

#### Glow Effects
- Pulsing glow animation on background
- Gradient shadows on buttons
- Neon-like border effects

### 7. Color Scheme & Design

#### Primary Colors
- **Primary Blue**: `#0066ff` - Main brand color
- **Accent Orange**: `#ff6b35` - Secondary highlight
- **Dark Background**: `#0a0a0a` - Dark mode base
- **White/Gray**: Text colors

#### Typography
- **Headlines**: Poppins font (bold)
- **Body**: Inter font (regular)
- **Gradient Text**: Blue to orange gradient
- **Font Sizes**: Responsive scaling

### 8. Glass Morphism Effects
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### 9. Component Hierarchy

```
Page (page.tsx)
├── LanguageProvider (Context wrapper)
├── Header (Navigation & Language)
├── Hero (Main section with product)
├── InfoSection (Features grid)
│   └── InfoColumn (Individual feature)
└── Footer (Links & legal)
```

## 📱 Responsive Breakpoints

### Mobile (< 640px)
- Single column layout
- Hamburger navigation
- Full-width cards
- Stacked sections
- Language toggle icon only

### Tablet (640px - 1024px)
- Two-column layouts
- Desktop navigation visible
- Wider cards
- Optimized spacing
- Full language labels

### Desktop (> 1024px)
- Three-column layouts
- Full navigation menu
- Optimal spacing
- Large typography
- Full interactive elements

## 🎬 Animation Specs

### Page Load
- Duration: 0.6 seconds
- Easing: ease-out
- Stagger: 0.2 seconds between items

### Scroll Reveal
- Duration: 0.6 seconds
- Easing: ease-out
- Minimum viewport: 100% of element

### Hover Effects
- Duration: 0.3 seconds
- Scale: 1.05 - 1.10
- Shadow: rgba(0, 102, 255, 0.5)

### Button Clicks
- Duration: 0.15 seconds
- Scale: 0.95 (press effect)
- Immediate response

## 🔧 Customizable Elements

### Easy to Modify
- **Text Content**: All in `src/lib/translations.ts`
- **Colors**: In `tailwind.config.js`
- **Fonts**: In `src/app/layout.tsx`
- **Animations**: Framer Motion props in components
- **Images**: Place in `public/images/`
- **Spacing**: Tailwind classes

### Example: Adding New Feature
```typescript
// 1. Add to translations.ts
export const ar = {
  info: {
    columns: [
      // ... existing features
      {
        icon: '🎯',
        title: 'New Feature',
        description: 'Description...'
      }
    ]
  }
}

// 2. Add to InfoSection.tsx
{t.info.columns.map((column) => (
  <InfoColumn {...column} />
))}
```

## 🚀 Performance

### Optimizations
- **Next.js Image**: Auto-optimization
- **Code Splitting**: Automatic route splitting
- **CSS Minification**: Tailwind + PostCSS
- **JavaScript Minification**: SWC minifier
- **Font Optimization**: Google Fonts with fallbacks

### Metrics
- First Contentful Paint (FCP): < 2s
- Largest Contentful Paint (LCP): < 3s
- Cumulative Layout Shift (CLS): < 0.1

## 🔐 Accessibility

### ARIA Labels
```typescript
<button 
  aria-label="Toggle language"
  onClick={() => setLanguage(...)}
>
  Language
</button>
```

### Semantic HTML
- `<header>`, `<nav>`, `<section>`, `<footer>`
- Proper heading hierarchy
- Link text optimization

### Color Contrast
- Text: 4.5:1 ratio or better
- Interactive elements: 3:1 ratio

## 📊 Browser Support
- Chrome/Edge: Latest + 1
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari, Chrome Mobile

---

**For questions or feature requests, refer to the main README.md**
