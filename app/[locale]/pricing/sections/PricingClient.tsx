"use client";

import { useState } from "react";
import {
    Shield, Zap, Camera, Lock,
    ChevronDown, ArrowRight, Check,
    Sparkles, Eye, Bell,
} from "lucide-react";
import type { PricingDict } from "./PricingDict.tsx";

// ── Styles ─────────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  .pg-root {
    min-height: 100vh;
    background: #050912;
    color: #e2e8f0;
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
    position: relative;
  }

  /* ── Ambient glows ── */
  .pg-bg {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }
  .pg-bg-glow1 {
    position: absolute;
    top: -60px; left: 50%;
    transform: translateX(-50%);
    width: 900px; height: 500px;
    background: radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 65%);
    border-radius: 50%;
    filter: blur(40px);
  }
  .pg-bg-glow2 {
    position: absolute;
    top: 33%; left: 10%;
    width: 400px; height: 400px;
    background: radial-gradient(ellipse, rgba(29,78,216,0.09) 0%, transparent 65%);
    border-radius: 50%;
    filter: blur(60px);
  }
  .pg-bg-grid {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image:
      linear-gradient(rgba(99,155,255,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99,155,255,1) 1px, transparent 1px);
    background-size: 64px 64px;
    -webkit-mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, black 0%, transparent 70%);
    mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, black 0%, transparent 70%);
  }

  /* ── Shared layout ── */
  .pg-section {
    padding: 96px 24px;
    position: relative;
    z-index: 1;
  }
  .pg-section-label {
    text-align: center;
    margin-bottom: 56px;
  }
  .pg-section-label h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(26px, 4vw, 40px);
    font-weight: 700;
    letter-spacing: -0.025em;
    color: #f8faff;
    margin: 0 0 12px;
  }
  .pg-section-label p {
    font-size: 16px;
    color: #7889a8;
    font-weight: 300;
    max-width: 480px;
    margin: 0 auto;
    line-height: 1.75;
  }
  .pg-divider {
    height: 1px;
    margin: 0 32px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
  }

  /* ── Badge ── */
  .pg-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 100px;
    border: 1px solid rgba(59,130,246,0.35);
    background: rgba(59,130,246,0.1);
    color: #93c5fd;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .pg-badge-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #60a5fa;
    box-shadow: 0 0 10px 2px rgba(96,165,250,0.8);
    animation: pg-pulse 2s ease-in-out infinite;
  }
  @keyframes pg-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
  }

  /* ── Buttons ── */
  .pg-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: #2563eb;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 32px rgba(59,130,246,0.45), 0 4px 20px rgba(0,0,0,0.4);
  }
  .pg-btn:hover {
    background: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 0 48px rgba(59,130,246,0.6), 0 8px 28px rgba(0,0,0,0.5);
  }
  .pg-btn-lg { font-size: 17px; padding: 16px 40px; }

  /* ══════════════════════
     HERO
  ══════════════════════ */
  .pg-hero {
    position: relative;
    z-index: 1;
    padding: 112px 24px 96px;
    text-align: center;
  }
  /*
    h1 uses the primary keyword directly.
    Font size large, font-weight 800, above the fold = strong SEO signal.
  */
  .pg-hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(36px, 5.5vw, 66px);
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.07;
    max-width: 720px;
    margin: 20px auto 20px;
    background: linear-gradient(155deg, #ffffff 20%, #bfdbfe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .pg-hero-subtitle {
    font-size: 17px;
    color: #7889a8;
    font-weight: 300;
    max-width: 440px;
    margin: 0 auto 40px;
    line-height: 1.75;
  }
  .pg-hero-points {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px 24px;
    margin-top: 40px;
  }
  .pg-hero-point {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: #7889a8;
  }
  .pg-hero-point svg { color: #60a5fa; flex-shrink: 0; }

  /* ══════════════════════
     PLAN CARD
  ══════════════════════ */
  .pg-plan-wrap { display: flex; justify-content: center; }
  .pg-plan-card {
    position: relative;
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(59,130,246,0.25);
    border-radius: 28px;
    padding: 40px;
    width: 100%;
    max-width: 420px;
    overflow: hidden;
  }
  .pg-plan-card::before {
    content: '';
    position: absolute;
    top: 0; left: 10%; right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59,130,246,0.7), transparent);
  }
  .pg-plan-glow {
    position: absolute;
    top: -40px; left: 50%;
    transform: translateX(-50%);
    width: 260px; height: 140px;
    background: radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%);
    pointer-events: none;
    filter: blur(20px);
  }
  .pg-plan-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 100px;
    border: 1px solid rgba(59,130,246,0.25);
    background: rgba(59,130,246,0.1);
    color: #93c5fd;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .pg-plan-price-row {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    margin-bottom: 4px;
  }
  /*
    price is wrapped in <strong> for semantic emphasis.
    Also uses aria-label for accessibility / Google.
  */
  .pg-plan-price {
    font-family: 'Syne', sans-serif;
    font-size: 68px;
    font-weight: 800;
    letter-spacing: -0.04em;
    color: #f8faff;
    line-height: 1;
  }
  .pg-plan-period {
    font-size: 17px;
    color: #7889a8;
    font-weight: 300;
    margin-bottom: 8px;
  }
  .pg-plan-devices {
    font-size: 14px;
    color: #4a5f80;
    margin: 0 0 32px;
  }
  .pg-plan-features {
    list-style: none;
    padding: 0;
    margin: 0 0 36px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .pg-plan-feature {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #c5d0e8;
  }
  .pg-feature-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px; height: 28px;
    border-radius: 50%;
    background: rgba(59,130,246,0.12);
    color: #60a5fa;
    flex-shrink: 0;
  }
  .pg-plan-btn {
    width: 100%;
    padding: 15px;
    background: #2563eb;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 24px rgba(59,130,246,0.4);
  }
  .pg-plan-btn:hover {
    background: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(59,130,246,0.55);
  }

  /* ══════════════════════
     FUTURE PLANS
  ══════════════════════ */
  .pg-future-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    max-width: 680px;
    margin: 0 auto;
  }
  @media (max-width: 520px) { .pg-future-grid { grid-template-columns: 1fr; } }
  .pg-future-card {
    position: relative;
    background: rgba(255,255,255,0.018);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    padding: 28px 32px;
    overflow: hidden;
    transition: border-color 0.25s, background 0.25s;
  }
  .pg-future-card:hover {
    border-color: rgba(59,130,246,0.22);
    background: rgba(255,255,255,0.03);
  }
  .pg-future-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59,130,246,0.04) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.25s;
    pointer-events: none;
  }
  .pg-future-card:hover::after { opacity: 1; }
  .pg-future-name {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #f0f4ff;
    margin: 0 0 6px;
  }
  .pg-future-devices {
    font-size: 14px;
    color: #7889a8;
    margin: 0 0 20px;
  }
  .pg-coming-soon {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: #334155;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.025);
    padding: 4px 12px;
    border-radius: 100px;
  }

  /* ══════════════════════
     FAQ
     NOTE: FAQ content is visible in the DOM even when closed
     so Google can crawl ALL answers, not just open ones.
  ══════════════════════ */
  .pg-faq-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 680px;
    margin: 0 auto;
  }
  .pg-faq-item {
    background: rgba(255,255,255,0.018);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 14px;
    overflow: hidden;
    transition: border-color 0.2s, background 0.2s;
  }
  .pg-faq-item:hover,
  .pg-faq-item.open {
    border-color: rgba(59,130,246,0.3);
    background: rgba(255,255,255,0.03);
  }
  .pg-faq-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 24px;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #e2e8f0;
  }
  .pg-faq-chevron {
    flex-shrink: 0;
    color: #4a5f80;
    transition: transform 0.3s ease, color 0.2s;
  }
  .pg-faq-item.open .pg-faq-chevron {
    transform: rotate(180deg);
    color: #60a5fa;
  }
  /*
    IMPORTANT: We use visibility + height instead of display:none
    so Google can still READ the answer text even when collapsed.
    display:none can cause Google to ignore the content.
  */
  .pg-faq-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease, opacity 0.3s ease;
    opacity: 0;
  }
  .pg-faq-item.open .pg-faq-body {
    max-height: 200px;
    opacity: 1;
  }
  .pg-faq-body p {
    padding: 0 24px 20px;
    padding-top: 4px;
    font-size: 14px;
    color: #7889a8;
    font-weight: 300;
    line-height: 1.75;
    border-top: 1px solid rgba(255,255,255,0.05);
    margin: 0;
  }

  /* ══════════════════════
     CTA
  ══════════════════════ */
  .pg-cta {
    position: relative;
    z-index: 1;
    border-top: 1px solid rgba(255,255,255,0.06);
    overflow: hidden;
    text-align: center;
    padding: 112px 24px;
  }
  .pg-cta-glow {
    position: absolute;
    top: -80px; left: 50%;
    transform: translateX(-50%);
    width: 600px; height: 320px;
    background: radial-gradient(ellipse, rgba(59,130,246,0.14) 0%, transparent 65%);
    filter: blur(40px);
    pointer-events: none;
  }
  .pg-cta-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 14px;
    border-radius: 100px;
    border: 1px solid rgba(59,130,246,0.2);
    background: rgba(59,130,246,0.07);
    color: #93c5fd;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  /*
    CTA h2 uses a secondary keyword variation.
    Every section h2 should contain a keyword phrase — not just decorative text.
  */
  .pg-cta h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(28px, 4.5vw, 52px);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: #f8faff;
    max-width: 600px;
    margin: 0 auto 16px;
    position: relative;
  }
  .pg-cta p {
    font-size: 17px;
    color: #7889a8;
    font-weight: 300;
    max-width: 400px;
    margin: 0 auto 40px;
    line-height: 1.75;
    position: relative;
  }

  /* ── Responsive ── */
  @media (max-width: 600px) {
    .pg-hero { padding: 80px 20px 72px; }
    .pg-plan-card { padding: 28px 24px; }
    .pg-plan-price { font-size: 52px; }
    .pg-cta { padding: 80px 20px; }
    .pg-section { padding: 72px 20px; }
  }
`;

// ── FAQ Item ───────────────────────────────────────────────────────────────────
/*
  Uses itemScope/itemProp Microdata as a SECOND layer on top of JSON-LD.
  Both signals together = stronger FAQ rich result eligibility.
  Answer text is always in the DOM (max-height: 0, not display:none)
  so Google can crawl it regardless of open/closed state.
*/
function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`pg-faq-item${open ? " open" : ""}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
        >
            <button className="pg-faq-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
                <span itemProp="name">{q}</span>
                <ChevronDown size={18} className="pg-faq-chevron" />
            </button>
            <div
                className="pg-faq-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
            >
                <p itemProp="text">{a}</p>
            </div>
        </div>
    );
}

// ── Client Component ───────────────────────────────────────────────────────────
export function PricingClient({ dict }: { dict: PricingDict }) {
    const { hero, plans, future, faq, cta } = dict;

    const heroPoints = [
        { label: hero.points.device,    icon: <Camera size={13} /> },
        { label: hero.points.detection, icon: <Eye size={13} /> },
        { label: hero.points.alerts,    icon: <Bell size={13} /> },
        { label: hero.points.cameras,   icon: <Shield size={13} /> },
    ];

    const planFeatures = [
        { label: plans.free.features.detection, icon: <Shield size={15} /> },
        { label: plans.free.features.alerts,    icon: <Zap size={15} /> },
        { label: plans.free.features.cameras,   icon: <Camera size={15} /> },
        { label: plans.free.features.objects,   icon: <Eye size={15} /> },
        { label: plans.free.features.cloud,     icon: <Lock size={15} /> },
    ];

    return (
        <div className="pg-root">
            <style>{css}</style>

            {/* Ambient BG */}
            <div className="pg-bg" aria-hidden="true">
                <div className="pg-bg-glow1" />
                <div className="pg-bg-glow2" />
                <div className="pg-bg-grid" />
            </div>

            {/* ════════ HERO ════════
          - <section> with aria-label for accessibility + crawlers
          - h1 = primary keyword, rendered server-side via SSR
          - subtitle = secondary keyword in <p>
      */}
            <section className="pg-hero" aria-label="Pricing hero">
                <div className="pg-badge" aria-label="Early access badge">
                    <div className="pg-badge-dot" aria-hidden="true" />
                    {hero.badge}
                </div>
                <h1>{hero.title}</h1>
                <p className="pg-hero-subtitle">{hero.subtitle}</p>
                <a href="#pricing-plans" className="pg-btn">
                    {hero.primaryCTA}
                    <ArrowRight size={16} aria-hidden="true" />
                </a>
                {/* Feature points — keyword-rich short phrases */}
                <ul className="pg-hero-points" aria-label="Key features">
                    {heroPoints.map(({ label, icon }, i) => (
                        <li key={i} className="pg-hero-point">
                            <span aria-hidden="true">{icon}</span>
                            {label}
                        </li>
                    ))}
                </ul>
            </section>

            <div className="pg-divider" aria-hidden="true" />

            {/* ════════ FREE PLAN ════════
          - id="pricing-plans" for anchor linking (good for UX + internal linking)
          - <article> = self-contained content Google can understand
          - itemScope for Product Microdata
      */}
            <section
                id="pricing-plans"
                className="pg-section"
                aria-label="Free pricing plan"
                itemScope
                itemType="https://schema.org/Product"
            >
                <div className="pg-section-label">
                    {/* h2 contains secondary keyword phrase */}
                    <h2>{plans.title}</h2>
                    <p>{plans.subtitle}</p>
                </div>
                <div className="pg-plan-wrap">
                    <article className="pg-plan-card" aria-label="Free plan details">
                        <div className="pg-plan-glow" aria-hidden="true" />
                        <div className="pg-plan-badge">
                            <Sparkles size={10} aria-hidden="true" />
                            {plans.free.badge}
                        </div>
                        <div className="pg-plan-price-row" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                            <meta itemProp="price" content="0" />
                            <meta itemProp="priceCurrency" content="USD" />
                            <meta itemProp="availability" content="https://schema.org/InStock" />
                            <strong className="pg-plan-price" aria-label={`Price: ${plans.free.price} per month`}>
                                {plans.free.price}
                            </strong>
                            <span className="pg-plan-period">{plans.free.period}</span>
                        </div>
                        <p className="pg-plan-devices">{plans.free.devices}</p>
                        {/* Feature list — each <li> is a keyword phrase Google reads */}
                        <ul className="pg-plan-features" aria-label="Plan features" itemProp="description">
                            {planFeatures.map(({ label, icon }, i) => (
                                <li key={i} className="pg-plan-feature">
                                    <span className="pg-feature-icon" aria-hidden="true">{icon}</span>
                                    {label}
                                </li>
                            ))}
                        </ul>
                        <button className="pg-plan-btn" aria-label={`${plans.free.button} – free plan`}>
                            {plans.free.button}
                        </button>
                    </article>
                </div>
            </section>

            <div className="pg-divider" aria-hidden="true" />

            {/* ════════ FUTURE PLANS ════════ */}
            <section className="pg-section" aria-label="Upcoming pricing plans" id="upcoming-plans">
                <div className="pg-section-label">
                    <h2>{future.title}</h2>
                    <p>{future.subtitle}</p>
                </div>
                <div className="pg-future-grid">
                    {(["starter", "business"] as const).map((key) => (
                        <article key={key} className="pg-future-card" aria-label={`${future.plans[key].name} plan`}>
                            <h3 className="pg-future-name">{future.plans[key].name}</h3>
                            <p className="pg-future-devices">{future.plans[key].devices}</p>
                            <span className="pg-coming-soon" aria-label="Coming soon">
                {future.plans[key].label}
              </span>
                        </article>
                    ))}
                </div>
            </section>

            <div className="pg-divider" aria-hidden="true" />

            {/* ════════ FAQ ════════
          - id="faq" for anchor linking
          - itemScope FAQPage Microdata (second layer on top of JSON-LD)
          - Each answer is in the DOM even when collapsed
      */}
            <section
                id="faq"
                className="pg-section"
                aria-label="Pricing FAQ"
                itemScope
                itemType="https://schema.org/FAQPage"
            >
                <div className="pg-section-label">
                    <h2>{faq.title}</h2>
                    <p>{faq.subtitle}</p>
                </div>
                <div className="pg-faq-list" role="list">
                    {[faq.items.free, faq.items.cameras, faq.items.plans, faq.items.upgrade].map((item, i) => (
                        <FAQItem key={i} q={item.q} a={item.a} />
                    ))}
                </div>
            </section>

            {/* ════════ CTA ════════ */}
            <section className="pg-cta" aria-label="Call to action – start monitoring">
                <div className="pg-cta-glow" aria-hidden="true" />
                <div className="pg-cta-eyebrow">
                    <Check size={11} aria-hidden="true" />
                    {hero.points.device}
                </div>
                <h2>{cta.title}</h2>
                <p>{cta.subtitle}</p>
                <a href="#pricing-plans" className="pg-btn pg-btn-lg" aria-label={cta.button}>
                    {cta.button}
                    <ArrowRight size={17} aria-hidden="true" />
                </a>
            </section>
        </div>
    );
}
