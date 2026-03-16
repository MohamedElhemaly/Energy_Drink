# Deployment Guide for EnDeck

## Overview
This guide covers different deployment options for the EnDeck energy drink landing page built with Next.js 14.

## Prerequisites
- Node.js 18+ installed locally
- Git repository initialized
- Verified that application runs locally with `npm run dev`

---

## Option 1: Vercel (Recommended)

### Why Vercel?
- Built by the creators of Next.js
- Zero-config deployment
- Automatic optimizations
- Free tier available
- Excellent performance

### Steps

1. **Create Vercel Account**
   - Visit https://vercel.com
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Connect Repository**
   - Click "Add New Project"
   - Select repository
   - Vercel auto-detects Next.js

3. **Configure Project**
   - Framework: Next.js (auto-selected)
   - Command: `npm run build`
   - Output directory: `.next`
   - No special environment variables needed

4. **Deploy**
   - Click "Deploy"
   - Wait for build completion
   - Get live URL

5. **Custom Domain** (Optional)
   - Go to Project Settings
   - Add custom domain
   - Follow DNS setup

### Environment Variables
If needed in future:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

---

## Option 2: Netlify

### Steps

1. **Connect to Netlify**
   - Visit https://app.netlify.com
   - Click "Add new site"
   - Select "Import an existing project"
   - Connect Git provider (GitHub, GitLab, Bitbucket)

2. **Select Repository**
   - Choose your repository
   - Authorize Netlify

3. **Deploy Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Advanced Settings**
   - Add environment variables if needed
   - Configure redirects/rewrites

5. **Deploy**
   - Click "Deploy"
   - Monitor build logs
   - Get live URL

### Netlify Deploy Button
```markdown
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=your-repo-url)
```

---

## Option 3: GitHub Pages

### Important Note
**Not recommended for Next.js with ISR/API routes**

If deploying static-only version:

1. **Build Static Export**
```bash
# Add to next.config.js
export const output = 'export'
```

2. **Build**
```bash
npm run build
```

3. **Push to GitHub**
```bash
git add .
git commit -m "Production build"
git push origin main
```

4. **Settings**
   - Go to Settings > Pages
   - Select Source: "Deploy from a branch"
   - Select branch and folder
   - GitHub publishes automatically

---

## Option 4: Docker & Custom Server

### Dockerfile

```dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

FROM base AS deps
RUN npm ci

FROM base AS builder
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

ENV PORT=3000
CMD ["node", "server.js"]
```

### Build & Run
```bash
# Build image
docker build -t endeck-website .

# Run container
docker run -p 3000:3000 endeck-website
```

---

## Option 5: AWS EC2

### Setup

1. **Launch EC2 Instance**
   - AMI: Ubuntu 22.04 LTS
   - Instance type: t3.micro (free tier)
   - Security: Allow ports 80, 443

2. **SSH into Instance**
```bash
ssh -i your-key.pem ubuntu@your-instance-ip
```

3. **Install Dependencies**
```bash
sudo apt update
sudo apt install nodejs npm git curl
```

4. **Clone Repository**
```bash
git clone your-repo-url
cd energyDrink_website
npm install
```

5. **Build**
```bash
npm run build
```

6. **Setup PM2** (Process Manager)
```bash
npm i -g pm2
pm2 start npm --name "endeck" -- start
pm2 save
pm2 startup
```

7. **Setup Nginx** (Reverse Proxy)
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **Enable HTTPS** (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## Option 6: DigitalOcean App Platform

### Steps

1. **Create Account**
   - Visit https://www.digitalocean.com
   - Create account

2. **App Platform**
   - Click "Create" > "Apps"
   - Connect GitHub repository
   - Select branch

3. **Configure**
   ```
   Name: endeck-website
   Source: GitHub repository
   Branch: main
   ```

4. **Build & Deploy**
   - DigitalOcean auto-detects Next.js
   - Sets up build command
   - Deploys to CDN

---

## Post-Deployment Checklist

- [ ] Site loads in browser
- [ ] All pages accessible
- [ ] Language toggle works
- [ ] Animations smooth
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] Links work correctly
- [ ] Performance acceptable
- [ ] SEO meta tags present
- [ ] HTTPS enabled

---

## Performance Optimization

### Before Deployment

1. **Build Analysis**
```bash
npm run build
# Check .next folder size
```

2. **Lighthouse Audit**
```bash
# Chrome DevTools > Lighthouse
# Target: 90+ scores
```

3. **Bundle Analysis**
```bash
npm i --save-dev @next/bundle-analyzer
```

### Monitoring

Set up monitoring for:
- Page load times
- Error rates
- Uptime
- User analytics

---

## CI/CD Pipeline Example (GitHub Actions)

### `.github/workflows/deploy.yml`

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Build
        run: npm run build
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## DNS Setup (if using custom domain)

### For most providers:

1. **Get nameserver names** from hosting provider
2. **Update domain registrar** nameservers
3. **Wait for propagation** (up to 48 hours)
4. **Verify** with: `nslookup your-domain.com`

### Example (Vercel)
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

---

## Troubleshooting Deployment

### Build fails
```bash
# Clear cache locally
rm -rf .next
rm -rf node_modules
npm ci
npm run build
```

### Performance issues
- Enable image optimization
- Minify CSS/JS
- Remove unused dependencies
- Check for memory leaks

### 404 errors
- Check routing in `next.config.js`
- Verify all imports are correct

### Style not loading
- Clear browser cache
- Rebuild with `npm run build`
- Check CSS file paths

---

## Rollback Strategy

### Vercel
- Click previous deployment
- Click "Promote to Production"

### GitHub Pages
- Revert commits
- Push to repository

### Docker
- Keep previous image
- Restart with old image

---

## Security Checklist

- [ ] HTTPS enabled
- [ ] No secrets in code
- [ ] Environment variables secure
- [ ] Rate limiting enabled
- [ ] CORS configured
- [ ] CSP headers set
- [ ] No console errors
- [ ] Minified production build

---

## Monitoring & Analytics

### Recommended Services
- **Vercel Analytics**: Built-in (Vercel only)
- **Google Analytics**: Free tier available
- **Sentry**: Error monitoring
- **New Relic**: APM monitoring
- **Datadog**: Infrastructure monitoring

---

**For specific deployment questions, refer to:**
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
