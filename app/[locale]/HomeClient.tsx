"use client";

import {
    ArrowRight, Shield, Zap, Camera, Lock,
    Bell, Eye, Check, ChevronRight,
} from "lucide-react";
import type { HomeDict } from "./page";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --bg:            #050912;
    --surface:       rgba(255,255,255,0.025);
    --surface-hover: rgba(255,255,255,0.04);
    --border:        rgba(255,255,255,0.07);
    --border-blue:   rgba(59,130,246,0.3);
    --blue:          #2563eb;
    --blue-mid:      #3b82f6;
    --blue-light:    #60a5fa;
    --blue-dim:      rgba(59,130,246,0.12);
    --text:          #f0f4ff;
    --text-muted:    #7889a8;
    --text-faint:    #334155;
    --font-h:        'Syne', sans-serif;
    --font-b:        'DM Sans', sans-serif;
  }

  .hm { min-height:100vh; background:var(--bg); color:var(--text); font-family:var(--font-b); overflow-x:hidden; }

  /* ── BG ── */
  .hm-bg { position:fixed; inset:0; pointer-events:none; z-index:0; }
  .hm-bg-g1 { position:absolute; top:-80px; left:50%; transform:translateX(-50%); width:1000px; height:600px; background:radial-gradient(ellipse, rgba(59,130,246,0.13) 0%, transparent 65%); filter:blur(50px); }
  .hm-bg-g2 { position:absolute; top:55%; left:-5%; width:500px; height:500px; background:radial-gradient(ellipse, rgba(29,78,216,0.07) 0%, transparent 65%); filter:blur(80px); }
  .hm-bg-grid { position:absolute; inset:0; opacity:0.025; background-image:linear-gradient(rgba(99,155,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(99,155,255,1) 1px,transparent 1px); background-size:64px 64px; -webkit-mask-image:radial-gradient(ellipse 90% 60% at 50% 0%,black 0%,transparent 75%); mask-image:radial-gradient(ellipse 90% 60% at 50% 0%,black 0%,transparent 75%); }

  /* ── Layout ── */
  .hm-section { position:relative; z-index:1; padding:96px 24px; }
  .hm-section-alt { background:rgba(255,255,255,0.012); border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
  .hm-inner { max-width:1000px; margin:0 auto; }
  .hm-label { text-align:center; margin-bottom:60px; }
  .hm-label h2 { font-family:var(--font-h); font-size:clamp(26px,3.8vw,42px); font-weight:700; letter-spacing:-0.025em; color:var(--text); margin:0 0 12px; }
  .hm-label p { font-size:16px; color:var(--text-muted); font-weight:300; max-width:500px; margin:0 auto; line-height:1.75; }
  .hm-divider { height:1px; margin:0 32px; background:linear-gradient(90deg,transparent,var(--border),transparent); }

  /* ── Badge ── */
  .hm-badge { display:inline-flex; align-items:center; gap:8px; padding:6px 16px; border-radius:100px; border:1px solid var(--border-blue); background:var(--blue-dim); color:var(--blue-light); font-size:11px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; margin-bottom:24px; }
  .hm-badge-dot { width:7px; height:7px; border-radius:50%; background:var(--blue-light); box-shadow:0 0 10px 2px rgba(96,165,250,.8); animation:hm-pulse 2s ease-in-out infinite; }
  @keyframes hm-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.75)} }

  /* ── Buttons ── */
  .hm-btn { display:inline-flex; align-items:center; gap:9px; padding:14px 28px; border-radius:100px; font-family:var(--font-b); font-size:15px; font-weight:500; text-decoration:none; border:none; cursor:pointer; transition:all .2s ease; }
  .hm-btn-primary { background:var(--blue); color:#fff; box-shadow:0 0 32px rgba(59,130,246,.45),0 4px 20px rgba(0,0,0,.4); }
  .hm-btn-primary:hover { background:var(--blue-mid); transform:translateY(-2px); box-shadow:0 0 48px rgba(59,130,246,.6),0 8px 28px rgba(0,0,0,.5); }
  .hm-btn-ghost { background:rgba(255,255,255,.06); color:var(--text-muted); border:1px solid var(--border); }
  .hm-btn-ghost:hover { background:rgba(255,255,255,.1); color:var(--text); transform:translateY(-2px); }
  .hm-btn-lg { font-size:16px; padding:15px 34px; }

  /* ══ HERO ══ */
  .hm-hero { position:relative; z-index:1; padding:120px 24px 96px; text-align:center; }
  .hm-hero h1 { font-family:var(--font-h); font-size:clamp(40px,6vw,72px); font-weight:800; letter-spacing:-.04em; line-height:1.05; max-width:780px; margin:0 auto 22px; }
  .hm-h1-l1 { display:block; color:var(--text); }
  .hm-h1-l2 { display:block; background:linear-gradient(135deg,var(--blue-light) 0%,#93c5fd 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .hm-hero-sub { font-size:18px; color:var(--text-muted); font-weight:300; max-width:460px; margin:0 auto 40px; line-height:1.75; }
  .hm-hero-ctas { display:flex; align-items:center; justify-content:center; gap:12px; flex-wrap:wrap; margin-bottom:44px; }
  .hm-trust-row { display:flex; flex-wrap:wrap; justify-content:center; gap:8px 28px; list-style:none; padding:0; margin:0; }
  .hm-trust-item { display:flex; align-items:center; gap:6px; font-size:13px; color:var(--text-muted); }
  .hm-trust-item svg { color:var(--blue-light); }

  /* Camera preview */
  .hm-preview { position:relative; max-width:680px; margin:56px auto 0; }
  .hm-cam-frame { background:rgba(255,255,255,.03); border:1px solid var(--border-blue); border-radius:20px; padding:16px; position:relative; overflow:hidden; }
  .hm-cam-frame::before { content:''; position:absolute; top:0; left:10%; right:10%; height:1px; background:linear-gradient(90deg,transparent,rgba(59,130,246,.6),transparent); }
  .hm-cam-screen { background:linear-gradient(160deg,#0a1628 0%,#050912 100%); border-radius:12px; aspect-ratio:16/7; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; border:1px solid rgba(255,255,255,.05); }
  .hm-cam-grid { position:absolute; inset:0; opacity:.04; background-image:linear-gradient(rgba(99,155,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(99,155,255,1) 1px,transparent 1px); background-size:32px 32px; }
  .hm-det-box { position:absolute; top:20%; left:32%; width:110px; height:150px; border:2px solid rgba(59,130,246,.7); border-radius:6px; animation:hm-scan 3s ease-in-out infinite; }
  .hm-det-box::before,.hm-det-box::after { content:''; position:absolute; width:14px; height:14px; border-color:var(--blue-light); border-style:solid; }
  .hm-det-box::before { top:-2px; left:-2px; border-width:2px 0 0 2px; }
  .hm-det-box::after { bottom:-2px; right:-2px; border-width:0 2px 2px 0; }
  @keyframes hm-scan { 0%,100%{opacity:.5;border-color:rgba(59,130,246,.4)} 50%{opacity:1;border-color:rgba(59,130,246,.9);box-shadow:0 0 20px rgba(59,130,246,.3)} }
  .hm-det-label { position:absolute; top:17%; left:32%; transform:translateY(-110%); background:rgba(37,99,235,.9); color:#fff; font-size:11px; font-weight:500; padding:3px 10px; border-radius:100px; white-space:nowrap; animation:hm-scan 3s ease-in-out infinite; }
  .hm-cam-icon { color:rgba(59,130,246,.15); }
  .hm-cam-bar { display:flex; align-items:center; justify-content:space-between; padding:10px 4px 4px; }
  .hm-cam-bar-label { font-size:12px; color:var(--text-faint); display:flex; align-items:center; gap:6px; }
  .hm-live-dot { width:6px; height:6px; background:#22c55e; border-radius:50%; box-shadow:0 0 8px rgba(34,197,94,.8); animation:hm-pulse 2s ease-in-out infinite; }
  .hm-ai-pill { font-size:11px; color:var(--blue-light); background:var(--blue-dim); border:1px solid var(--border-blue); padding:3px 10px; border-radius:100px; }

  /* ══ HOW IT WORKS ══ */
  .hm-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; position:relative; list-style:none; padding:0; margin:0; }
  @media(max-width:720px){ .hm-steps { grid-template-columns:1fr; } }
  .hm-steps::before { content:''; position:absolute; top:32px; left:16.7%; right:16.7%; height:1px; background:linear-gradient(90deg,transparent,var(--border-blue),var(--border-blue),transparent); pointer-events:none; }
  @media(max-width:720px){ .hm-steps::before { display:none; } }
  .hm-step { text-align:center; padding:32px 24px 28px; background:var(--surface); border:1px solid var(--border); border-radius:20px; transition:border-color .25s,background .25s; }
  .hm-step:hover { border-color:var(--border-blue); background:var(--surface-hover); }
  .hm-step-num { display:inline-flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:50%; background:var(--blue-dim); border:1px solid var(--border-blue); color:var(--blue-light); font-family:var(--font-h); font-size:14px; font-weight:700; margin-bottom:20px; }
  .hm-step h3 { font-family:var(--font-h); font-size:17px; font-weight:700; letter-spacing:-.02em; color:var(--text); margin:0 0 10px; }
  .hm-step p { font-size:14px; color:var(--text-muted); font-weight:300; line-height:1.7; margin:0; }
  .hm-steps-note { text-align:center; margin-top:28px; font-size:13px; color:var(--text-faint); display:flex; align-items:center; justify-content:center; gap:6px; }

  /* ══ FEATURES ══ */
  .hm-feat-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
  @media(max-width:600px){ .hm-feat-grid { grid-template-columns:1fr; } }
  .hm-feat-card { background:var(--surface); border:1px solid var(--border); border-radius:20px; padding:28px 30px; transition:border-color .25s,background .25s; position:relative; overflow:hidden; }
  .hm-feat-card:hover { border-color:var(--border-blue); background:var(--surface-hover); }
  .hm-feat-card::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,var(--blue-dim) 0%,transparent 60%); opacity:0; transition:opacity .3s; pointer-events:none; }
  .hm-feat-card:hover::after { opacity:1; }
  .hm-feat-icon { font-size:28px; margin-bottom:16px; display:block; }
  .hm-feat-card h3 { font-family:var(--font-h); font-size:17px; font-weight:700; letter-spacing:-.02em; color:var(--text); margin:0 0 10px; }
  .hm-feat-card p { font-size:14px; color:var(--text-muted); font-weight:300; line-height:1.7; margin:0; }

  /* ══ USE CASES ══ */
  .hm-uc-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
  @media(max-width:900px){ .hm-uc-grid { grid-template-columns:repeat(2,1fr); } }
  @media(max-width:500px){ .hm-uc-grid { grid-template-columns:1fr; } }
  .hm-uc-card { background:var(--surface); border:1px solid var(--border); border-radius:18px; padding:24px 22px; text-decoration:none; color:inherit; display:block; transition:border-color .25s,background .25s,transform .2s; }
  .hm-uc-card:hover { border-color:var(--border-blue); background:var(--surface-hover); transform:translateY(-3px); }
  .hm-uc-icon { font-size:26px; margin-bottom:14px; display:block; }
  .hm-uc-card h3 { font-family:var(--font-h); font-size:15px; font-weight:700; letter-spacing:-.02em; color:var(--text); margin:0 0 8px; }
  .hm-uc-card p { font-size:13px; color:var(--text-muted); font-weight:300; line-height:1.65; margin:0 0 14px; }
  .hm-uc-more { display:flex; align-items:center; gap:4px; font-size:12px; color:var(--blue-light); font-weight:500; }

  /* ══ IN ACTION ══ */
  .hm-ia-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
  @media(max-width:760px){ .hm-ia-grid { grid-template-columns:1fr; } }
  .hm-ia-screen { background:var(--surface); border:1px solid var(--border-blue); border-radius:20px; overflow:hidden; position:relative; }
  .hm-ia-screen::before { content:''; position:absolute; top:0; left:10%; right:10%; height:1px; background:linear-gradient(90deg,transparent,rgba(59,130,246,.6),transparent); }
  .hm-ia-preview { aspect-ratio:4/3; background:linear-gradient(160deg,#0a1628 0%,#050912 100%); display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
  .hm-ia-overlay { position:absolute; inset:0; opacity:.04; background-image:linear-gradient(rgba(99,155,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(99,155,255,1) 1px,transparent 1px); background-size:28px 28px; }
  .hm-ia-badge { position:absolute; bottom:16px; left:16px; background:rgba(37,99,235,.85); backdrop-filter:blur(8px); color:#fff; font-size:12px; font-weight:500; padding:6px 14px; border-radius:100px; display:flex; align-items:center; gap:6px; }
  .hm-ia-dot { width:6px; height:6px; background:#fff; border-radius:50%; animation:hm-pulse 1.5s ease-in-out infinite; }
  .hm-ia-content h2 { font-family:var(--font-h); font-size:clamp(24px,3.5vw,36px); font-weight:700; letter-spacing:-.025em; color:var(--text); margin:0 0 14px; }
  .hm-ia-content p { font-size:16px; color:var(--text-muted); font-weight:300; line-height:1.75; margin:0 0 28px; }
  .hm-ia-feats { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
  .hm-ia-feat { display:flex; align-items:center; gap:10px; font-size:14px; color:#c5d0e8; }
  .hm-check-wrap { display:flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; background:var(--blue-dim); color:var(--blue-light); flex-shrink:0; }

  /* ══ PRICING ══ */
  .hm-pr-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; max-width:680px; margin:0 auto 28px; }
  @media(max-width:560px){ .hm-pr-grid { grid-template-columns:1fr; } }
  .hm-pr-card { background:var(--surface); border:1px solid var(--border); border-radius:24px; padding:32px; position:relative; overflow:hidden; }
  .hm-pr-card-free { border-color:var(--border-blue); }
  .hm-pr-card-free::before { content:''; position:absolute; top:0; left:10%; right:10%; height:1px; background:linear-gradient(90deg,transparent,rgba(59,130,246,.7),transparent); }
  .hm-pr-glow { position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:220px; height:110px; background:radial-gradient(ellipse,rgba(59,130,246,.12) 0%,transparent 70%); filter:blur(16px); pointer-events:none; }
  .hm-pr-name { font-family:var(--font-h); font-size:18px; font-weight:700; color:var(--text); margin:0 0 4px; }
  .hm-pr-tagline { font-size:13px; color:var(--text-muted); margin:0 0 20px; }
  .hm-pr-price { font-family:var(--font-h); font-size:52px; font-weight:800; letter-spacing:-.04em; color:var(--text); line-height:1; }
  .hm-pr-period { font-size:15px; color:var(--text-muted); font-weight:300; margin-left:2px; }
  .hm-pr-feats { list-style:none; padding:0; margin:20px 0 24px; display:flex; flex-direction:column; gap:10px; }
  .hm-pr-feat { display:flex; align-items:center; gap:9px; font-size:13px; color:#c5d0e8; }
  .hm-pr-feat svg { color:var(--blue-light); flex-shrink:0; }
  .hm-pr-btn { width:100%; padding:13px; border:none; border-radius:12px; font-family:var(--font-b); font-size:14px; font-weight:500; cursor:pointer; transition:all .2s ease; }
  .hm-pr-btn-p { background:var(--blue); color:#fff; box-shadow:0 4px 20px rgba(59,130,246,.4); }
  .hm-pr-btn-p:hover { background:var(--blue-mid); transform:translateY(-2px); box-shadow:0 8px 28px rgba(59,130,246,.5); }
  .hm-pr-btn-g { background:rgba(255,255,255,.05); color:var(--text-muted); border:1px solid var(--border); }
  .hm-pr-btn-g:hover { background:rgba(255,255,255,.08); color:var(--text); }
  .hm-soon { display:inline-block; font-size:11px; font-weight:600; letter-spacing:.09em; text-transform:uppercase; color:var(--text-faint); border:1px solid var(--border); background:rgba(255,255,255,.025); padding:3px 10px; border-radius:100px; margin-bottom:16px; }
  .hm-pr-link { display:flex; justify-content:center; }
  .hm-pr-link a { color:var(--blue-light); font-size:14px; font-weight:500; text-decoration:none; display:flex; align-items:center; gap:4px; transition:gap .2s; }
  .hm-pr-link a:hover { gap:8px; }

  /* ══ CTA ══ */
  .hm-cta { position:relative; z-index:1; border-top:1px solid var(--border); overflow:hidden; text-align:center; padding:112px 24px; }
  .hm-cta-glow { position:absolute; top:-100px; left:50%; transform:translateX(-50%); width:700px; height:400px; background:radial-gradient(ellipse,rgba(59,130,246,.14) 0%,transparent 65%); filter:blur(50px); pointer-events:none; }
  .hm-cta-eyebrow { display:inline-flex; align-items:center; gap:7px; padding:5px 14px; border-radius:100px; border:1px solid var(--border-blue); background:var(--blue-dim); color:var(--blue-light); font-size:11px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; margin-bottom:28px; }
  .hm-cta h2 { font-family:var(--font-h); font-size:clamp(30px,5vw,56px); font-weight:800; letter-spacing:-.035em; line-height:1.08; color:var(--text); max-width:640px; margin:0 auto 18px; position:relative; }
  .hm-cta p { font-size:17px; color:var(--text-muted); font-weight:300; max-width:420px; margin:0 auto 44px; line-height:1.75; position:relative; }
  .hm-cta-btns { display:flex; align-items:center; justify-content:center; gap:12px; flex-wrap:wrap; position:relative; }

  /* ── Responsive ── */
  @media(max-width:600px){
    .hm-hero { padding:88px 20px 72px; }
    .hm-section { padding:72px 20px; }
    .hm-cta { padding:80px 20px; }
    .hm-ia-grid { gap:32px; }
  }
`;

export function HomeClient({ dict }: { dict: HomeDict }) {
    const { hero, howItWorks, features, useCases, inAction, pricing, cta } = dict;

    return (
        <div className="hm">
            <style>{css}</style>

            {/* BG */}
            <div className="hm-bg" aria-hidden="true">
                <div className="hm-bg-g1" /><div className="hm-bg-g2" /><div className="hm-bg-grid" />
            </div>

            {/* ════ HERO ════ */}
            <section className="hm-hero" aria-label="Hero">
                <div className="hm-badge"><div className="hm-badge-dot" />{hero.badge}</div>
                <h1>
                    <span className="hm-h1-l1">{hero.title}</span>
                    <span className="hm-h1-l2">{hero.titleAccent}</span>
                </h1>
                <p className="hm-hero-sub">{hero.subtitle}</p>
                <div className="hm-hero-ctas">
                    <a href="#pricing" className="hm-btn hm-btn-primary hm-btn-lg">{hero.primaryCTA}<ArrowRight size={17} /></a>
                    <a href="#how-it-works" className="hm-btn hm-btn-ghost hm-btn-lg">{hero.secondaryCTA}</a>
                </div>
                <ul className="hm-trust-row">
                    {hero.trustPoints.map((p, i) => <li key={i} className="hm-trust-item"><Check size={13} />{p}</li>)}
                </ul>
                {/* Animated camera preview */}
                <div className="hm-preview" aria-hidden="true">
                    <div className="hm-cam-frame">
                        <div className="hm-cam-screen">
                            <div className="hm-cam-grid" />
                            <Camera size={64} className="hm-cam-icon" />
                            <div className="hm-det-box" />
                            <div className="hm-det-label">Person detected</div>
                        </div>
                        <div className="hm-cam-bar">
                            <div className="hm-cam-bar-label"><div className="hm-live-dot" />LIVE</div>
                            <div className="hm-ai-pill">AI Active</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hm-divider" aria-hidden="true" />

            {/* ════ HOW IT WORKS ════ */}
            <section id="how-it-works" className="hm-section" aria-label="How it works" itemScope itemType="https://schema.org/HowTo">
                <div className="hm-inner">
                    <div className="hm-label">
                        <h2 itemProp="name">{howItWorks.title}</h2>
                        <p itemProp="description">{howItWorks.subtitle}</p>
                    </div>
                    <ol className="hm-steps">
                        {howItWorks.steps.map((s, i) => (
                            <li key={i} className="hm-step" itemScope itemProp="step" itemType="https://schema.org/HowToStep">
                                <div className="hm-step-num">{s.number}</div>
                                <h3 itemProp="name">{s.title}</h3>
                                <p itemProp="text">{s.description}</p>
                            </li>
                        ))}
                    </ol>
                    <p className="hm-steps-note"><Check size={13} />{howItWorks.note}</p>
                </div>
            </section>

            <div className="hm-divider" aria-hidden="true" />

            {/* ════ FEATURES ════ */}
            <section id="features" className="hm-section hm-section-alt" aria-label="Key features">
                <div className="hm-inner">
                    <div className="hm-label">
                        <h2>{features.title}</h2>
                        <p>{features.subtitle}</p>
                    </div>
                    <div className="hm-feat-grid">
                        {features.items.map((item, i) => (
                            <article key={i} className="hm-feat-card">
                                <span className="hm-feat-icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <div className="hm-divider" aria-hidden="true" />

            {/* ════ USE CASES ════ */}
            <section id="use-cases" className="hm-section" aria-label="Who CamGuard is for">
                <div className="hm-inner">
                    <div className="hm-label">
                        <h2>{useCases.title}</h2>
                        <p>{useCases.subtitle}</p>
                    </div>
                    <div className="hm-uc-grid">
                        {useCases.items.map((item, i) => (
                            <a key={i} href={item.href} className="hm-uc-card">
                                <span className="hm-uc-icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="hm-uc-more">Learn more <ChevronRight size={13} /></div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <div className="hm-divider" aria-hidden="true" />

            {/* ════ IN ACTION ════ */}
            <section id="in-action" className="hm-section hm-section-alt" aria-label="CamGuard in action">
                <div className="hm-inner">
                    <div className="hm-ia-grid">
                        <div className="hm-ia-screen" aria-hidden="true">
                            <div className="hm-ia-preview">
                                <div className="hm-ia-overlay" />
                                <Camera size={72} style={{ color: "rgba(59,130,246,0.15)" }} />
                                <div className="hm-ia-badge"><div className="hm-ia-dot" />Person detected</div>
                            </div>
                        </div>
                        <div className="hm-ia-content">
                            <h2>{inAction.title}</h2>
                            <p>{inAction.subtitle}</p>
                            <ul className="hm-ia-feats">
                                {inAction.features.map((f, i) => (
                                    <li key={i} className="hm-ia-feat">
                                        <span className="hm-check-wrap"><Check size={12} /></span>{f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hm-divider" aria-hidden="true" />

            {/* ════ PRICING ════ */}
            <section id="pricing" className="hm-section" aria-label="Pricing" itemScope itemType="https://schema.org/Product">
                <div className="hm-label">
                    <h2>{pricing.title}</h2>
                    <p>{pricing.subtitle}</p>
                </div>
                <div className="hm-pr-grid">
                    <article className="hm-pr-card hm-pr-card-free" aria-label="Free plan">
                        <div className="hm-pr-glow" />
                        <p className="hm-pr-name">{pricing.free.name}</p>
                        <p className="hm-pr-tagline">{pricing.free.tagline}</p>
                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                            <meta itemProp="price" content="0" />
                            <meta itemProp="priceCurrency" content="EUR" />
                            <strong className="hm-pr-price">{pricing.free.price}</strong>
                            <span className="hm-pr-period">{pricing.free.period}</span>
                        </div>
                        <ul className="hm-pr-feats">
                            {pricing.free.features.map((f, i) => <li key={i} className="hm-pr-feat"><Check size={14} />{f}</li>)}
                        </ul>
                        <button className="hm-pr-btn hm-pr-btn-p">{pricing.free.cta}</button>
                    </article>
                    <article className="hm-pr-card" aria-label="Premium plan">
                        <p className="hm-pr-name">{pricing.premium.name}</p>
                        <p className="hm-pr-tagline">{pricing.premium.tagline}</p>
                        <div className="hm-soon">{pricing.premium.label}</div>
                        <ul className="hm-pr-feats">
                            {pricing.premium.features.map((f, i) => <li key={i} className="hm-pr-feat"><Check size={14} />{f}</li>)}
                        </ul>
                        <button className="hm-pr-btn hm-pr-btn-g">{pricing.premium.cta}</button>
                    </article>
                </div>
                <div className="hm-pr-link">
                    <a href={pricing.linkHref}>{pricing.link} <ChevronRight size={14} /></a>
                </div>
            </section>

            {/* ════ CTA ════ */}
            <section className="hm-cta" aria-label="Call to action">
                <div className="hm-cta-glow" aria-hidden="true" />
                <div className="hm-cta-eyebrow"><Shield size={11} />{cta.badge}</div>
                <h2>{cta.title}</h2>
                <p>{cta.subtitle}</p>
                <div className="hm-cta-btns">
                    <a href="#pricing" className="hm-btn hm-btn-primary hm-btn-lg">{cta.primaryCTA}<ArrowRight size={17} /></a>
                    <a href="#how-it-works" className="hm-btn hm-btn-ghost hm-btn-lg">{cta.secondaryCTA}</a>
                </div>
            </section>
        </div>
    );
}
