'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const highlights = [
  { value: '330ML', label: 'Slim premium can with a strong shelf silhouette' },
  { value: '90 KCAL', label: 'A light profile that still feels indulgent' },
  { value: 'DATE SEEDS', label: 'An ingredient story that gives the brand a memorable edge' },
]

const experienceBlocks = [
  {
    title: 'Luxury Hero Composition',
    copy: 'A cleaner photography-first layout that makes the first screen feel premium instead of crowded.',
  },
  {
    title: 'Brand-First Storytelling',
    copy: 'The page is built around the real product identity so the concept feels client-ready and believable.',
  },
  {
    title: 'Premium Motion Rhythm',
    copy: 'GSAP keeps the reveals smooth and intentional without turning the page into a noisy demo.',
  },
]

const facts = [
  ['Serving size', '330ml'],
  ['Calories', '90 Kcal'],
  ['Sugars', '15 g'],
  ['Caffeine', '0 mg'],
]

const brandPoints = [
  'No caffeine added messaging presented as a premium quality cue.',
  'Forest green and brushed gold palette derived directly from the pack.',
  'Photography-driven layout that feels stronger for presentations and pitches.',
]

export default function NabtLanding() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.from('[data-hero-badge]', {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })

      gsap.from('[data-hero-title]', {
        y: 70,
        opacity: 0,
        duration: 1.1,
        delay: 0.1,
        ease: 'power4.out',
      })

      gsap.from('[data-hero-copy]', {
        y: 32,
        opacity: 0,
        duration: 0.95,
        delay: 0.22,
        ease: 'power3.out',
      })

      gsap.from('[data-hero-card]', {
        y: 36,
        opacity: 0,
        duration: 0.9,
        delay: 0.34,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          y: 56,
          opacity: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
          },
        })
      })
    }, rootRef)

    return () => context.revert()
  }, [])

  return (
    <div ref={rootRef} className="nabt-shell">
      <main className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 pb-12 pt-4 sm:px-6 lg:px-10">
        <section className="relative overflow-hidden rounded-[34px] border border-[rgba(202,160,75,0.18)] bg-[linear-gradient(135deg,rgba(14,33,27,0.96),rgba(7,17,13,0.92))] px-5 py-5 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:px-7 lg:px-10 lg:py-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(202,160,75,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(63,110,88,0.18),transparent_24%)]" />

          <div className="relative z-10 flex items-center justify-between rounded-full border border-[rgba(202,160,75,0.14)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[rgba(246,239,225,0.82)]">
            <div className="display-font text-3xl leading-none text-[var(--nabt-cream)]">NABT</div>
            <div className="hidden items-center gap-6 md:flex">
              <a href="#experience">Experience</a>
              <a href="#product-story">Product Story</a>
              <a href="#facts">Facts</a>
            </div>
            <Link
              href="#hero"
              className="rounded-full border border-[rgba(202,160,75,0.22)] bg-[rgba(202,160,75,0.1)] px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--nabt-gold)]"
            >
              Launch
            </Link>
          </div>

          <div
            id="hero"
            className="relative z-10 grid gap-8 pb-4 pt-8 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center"
          >
            <div className="max-w-[700px]">
              <div
                data-hero-badge
                className="mb-6 inline-flex max-w-full flex-wrap items-center gap-3 rounded-full border border-[rgba(202,160,75,0.22)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--nabt-gold)] sm:text-xs sm:tracking-[0.35em]"
              >
                No Caffeine Added
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--nabt-gold)]" />
                Date Seeds Extract
              </div>

              <div data-hero-title>
                <h1 className="display-font text-[4.4rem] uppercase leading-[0.88] text-[var(--nabt-cream)] sm:text-[6.1rem] lg:text-[8rem]">
                  NABT
                </h1>
                <p className="display-font text-[1.5rem] uppercase tracking-[0.18em] text-[var(--nabt-gold)] sm:text-[2.1rem]">
                  Energy Drink
                </p>
              </div>

              <p
                data-hero-copy
                className="mt-6 max-w-[620px] text-base leading-8 text-[rgba(246,239,225,0.76)] sm:text-lg"
              >
                A premium landing page direction built around the real NABT can. The visual language stays cinematic,
                warm, and luxurious while keeping the layout clean on both desktop and mobile.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  data-hero-card
                  href="#experience"
                  className="rounded-full bg-[var(--nabt-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#10251d]"
                >
                  Explore experience
                </a>
                <a
                  data-hero-card
                  href="#facts"
                  className="rounded-full border border-[rgba(246,239,225,0.18)] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[var(--nabt-cream)]"
                >
                  Nutrition snapshot
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.value} data-hero-card className="glass-panel rounded-[24px] p-5">
                    <div className="display-font text-4xl text-[var(--nabt-gold)]">{item.value}</div>
                    <p className="mt-2 text-sm leading-6 text-[rgba(246,239,225,0.72)]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px] lg:grid-rows-[auto_auto] lg:items-stretch">
              <div className="overflow-hidden rounded-[30px] border border-[rgba(202,160,75,0.14)] bg-[rgba(255,255,255,0.03)] shadow-[0_50px_110px_rgba(0,0,0,0.35)] lg:row-span-2">
                <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                  <Image
                    src="/images/nabt-can-photo.jpeg"
                    alt="NABT energy drink hero shot"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,13,0.08)_0%,rgba(7,17,13,0.12)_40%,rgba(7,17,13,0.68)_100%)] lg:bg-[linear-gradient(120deg,rgba(7,17,13,0.18)_0%,rgba(7,17,13,0.02)_34%,rgba(7,17,13,0.58)_100%)]" />
                  <div className="absolute left-4 top-4 rounded-full border border-[rgba(202,160,75,0.2)] bg-[rgba(10,24,19,0.55)] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[var(--nabt-gold)] backdrop-blur-md sm:left-6 sm:top-6 sm:text-xs">
                    Premium Launch Visual
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[26px] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--nabt-gold)]">Hero Detail</p>
                <p className="mt-4 display-font text-5xl text-[var(--nabt-cream)] sm:text-6xl lg:text-5xl">330ml</p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[var(--nabt-gold)]">
                  Premium slim can
                </p>
                <p className="mt-4 text-sm leading-7 text-[rgba(246,239,225,0.72)]">
                  Tight composition, clear product focus, and cleaner hierarchy across desktop and mobile.
                </p>
              </div>

              <div className="glass-panel rounded-[26px] p-5">
                <p className="section-title text-4xl text-[var(--nabt-gold)]">Natural Edge</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(246,239,225,0.72)]">
                  The product shot is treated like a luxury campaign visual so the brand feels confident and premium.
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-2 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="glass-panel rounded-[26px] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--nabt-gold)]">Brand Notes</p>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-[rgba(246,239,225,0.74)] md:grid-cols-3 lg:grid-cols-3">
                  {brandPoints.map((point) => (
                    <li key={point} className="rounded-[20px] border border-[rgba(202,160,75,0.12)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel rounded-[26px] p-5">
                <p className="section-title text-4xl text-[var(--nabt-gold)]">Fast Brand Read</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(246,239,225,0.72)]">
                  One image, no duplication, and every supporting block now works around the hero instead of fighting it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          data-reveal
          className="grid gap-6 px-1 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-14"
        >
          <div className="glass-panel rounded-[30px] p-6 sm:p-8">
            <p className="section-title text-5xl text-[var(--nabt-gold)]">Designed to sell the brand in one scroll</p>
            <p className="mt-4 max-w-[560px] text-base leading-8 text-[rgba(246,239,225,0.74)] sm:text-lg">
              The structure is presentation-ready: a memorable first impression, a strong product image system, and
              clean factual blocks that make the concept feel polished enough for a real client room.
            </p>
            <div className="mt-8 grid gap-4">
              {experienceBlocks.map((block) => (
                <div key={block.title} className="rounded-[24px] border border-[rgba(202,160,75,0.16)] bg-[rgba(255,255,255,0.03)] p-5">
                  <div className="display-font text-3xl text-[var(--nabt-cream)]">{block.title}</div>
                  <p className="mt-2 text-sm leading-7 text-[rgba(246,239,225,0.72)]">{block.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="gold-outline overflow-hidden rounded-[30px] border border-[rgba(202,160,75,0.18)] bg-[rgba(9,22,18,0.72)] p-3 sm:p-4">
              <div className="overflow-hidden rounded-[22px] bg-[rgba(255,255,255,0.03)]">
                <Image
                  src="/images/nabt-label.jpeg"
                  alt="NABT label artwork details"
                  width={1280}
                  height={384}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-panel rounded-[28px] p-6">
                <p className="section-title text-4xl text-[var(--nabt-gold)]">Visual Taste</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(246,239,225,0.72)]">
                  Deep forest greens, brushed metallic golds, and sand neutrals give the product a more refined world
                  than the usual energy drink visual noise.
                </p>
              </div>
              <div className="glass-panel rounded-[28px] p-6">
                <p className="section-title text-4xl text-[var(--nabt-gold)]">Photography First</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(246,239,225,0.72)]">
                  The page leans on the actual pack shot to feel more luxurious, grounded, and convincing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="product-story"
          data-reveal
          className="grid gap-6 px-1 py-4 lg:grid-cols-[1fr_0.9fr] lg:py-10"
        >
          <div className="glass-panel rounded-[30px] p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-title text-5xl text-[var(--nabt-gold)]">Pack Story</p>
                <p className="mt-3 max-w-[580px] text-base leading-8 text-[rgba(246,239,225,0.74)]">
                  The real label artwork becomes part of the experience instead of being buried in a gallery. That
                  keeps the page anchored in the actual product identity from hero to details.
                </p>
              </div>
              <div className="rounded-full border border-[rgba(202,160,75,0.18)] px-5 py-3 text-sm uppercase tracking-[0.24em] text-[var(--nabt-gold)]">
                Built from real artwork
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[24px] border border-[rgba(202,160,75,0.16)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="display-font text-4xl text-[var(--nabt-gold)]">01</p>
                <p className="mt-2 text-sm leading-7 text-[rgba(246,239,225,0.72)]">
                  Strong bilingual pack personality with a clear premium shelf impression.
                </p>
              </div>
              <div className="rounded-[24px] border border-[rgba(202,160,75,0.16)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="display-font text-4xl text-[var(--nabt-gold)]">02</p>
                <p className="mt-2 text-sm leading-7 text-[rgba(246,239,225,0.72)]">
                  Gold detailing and dark green body create a more refined and memorable tone.
                </p>
              </div>
              <div className="rounded-[24px] border border-[rgba(202,160,75,0.16)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="display-font text-4xl text-[var(--nabt-gold)]">03</p>
                <p className="mt-2 text-sm leading-7 text-[rgba(246,239,225,0.72)]">
                  The story feels modern without losing the natural ingredient positioning.
                </p>
              </div>
            </div>
          </div>

          <div id="facts" className="glass-panel rounded-[30px] p-6 sm:p-8">
            <p className="section-title text-5xl text-[var(--nabt-gold)]">Nutrition facts</p>
            <div className="mt-6 space-y-4">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-[22px] border border-[rgba(202,160,75,0.14)] bg-[rgba(255,255,255,0.03)] px-5 py-4"
                >
                  <span className="text-sm uppercase tracking-[0.22em] text-[rgba(246,239,225,0.62)]">{label}</span>
                  <span className="display-font text-3xl text-[var(--nabt-cream)]">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-[rgba(246,239,225,0.68)]">
              The information block stays clean and premium, while leaving room to add CTA, retailer info, or inquiry
              forms later if the project expands.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
