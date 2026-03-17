"use client";

// ── Types ────────────────────────────────────────────────────────────────────

import {JSX} from "react";

interface StoreLabel {
    label: string;
    name: string;
}

interface Feature {
    icon: string;
    title: string;
    desc: string;
}

interface Step {
    number: string;
    title: string;
    desc: string;
}

export interface DownloadDict {
    badge: string;
    heroTitle: string;
    heroTitleItalic: string;
    heroTitleEnd: string;
    heroSubtitle: string;
    appStore: StoreLabel;
    playStore: StoreLabel;
    appStoreUrl: string;
    playStoreUrl: string;
    ratingLabel: string;
    reviewsLabel: string;
    freeLabel: string;
    featuresTitle: string;
    featuresSubtitle: string;
    features: Feature[];
    stepsTitle: string;
    stepsSubtitle: string;
    steps: Step[];
    compatibilityTitle: string;
    compatibilitySubtitle: string;
    compatibleBrands: string[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaAppStore: string;
    ctaPlayStore: string;
}

// ── Icons ────────────────────────────────────────────────────────────────────

function FeatureIcon({ name }: { name: string }) {
    const icons: Record<string, JSX.Element> = {
        bell: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
        ),
        video: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
        ),
        moon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        ),
        history: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="12 8 12 12 14 14" />
                <path d="M3.05 11a9 9 0 1 0 .5-3M3 4v4h4" />
            </svg>
        ),
        shield: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        sliders: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
        ),
    };
    return icons[name] ?? null;
}

function AppleIcon({ color = "currentColor" }: { color?: string }) {
    return (
        <svg width="22" height="22" viewBox="0 0 814 1000" fill={color}>
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49 192.5-49 30.9 0 134.2 2.6 198.3 99.2zM549.1 175.5c23.1-28 39-67 39-106 0-5.4-.5-10.9-1.4-15.8-36.9 1.4-81 24.8-107.5 56.5-20.8 24.3-39.8 63.7-39.8 103.4 0 6 1 12.1 1.5 14.1 2.4.4 6.3.9 10.3.9 33 0 74.3-22.2 97.9-53.1z" />
        </svg>
    );
}

function PlayIcon({ color = "currentColor" }: { color?: string }) {
    return (
        <svg width="20" height="22" viewBox="0 0 24 27" fill={color}>
            <path d="M1.5 0.5L22.5 13.5L1.5 26.5V0.5Z" />
        </svg>
    );
}

function StoreButton({
                         href,
                         icon,
                         label,
                         name,
                     }: {
    href: string;
    icon: JSX.Element;
    label: string;
    name: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 22px",
                borderRadius: 12,
                background: "#0f172a",
                border: "1.5px solid #0f172a",
                color: "#fff",
                textDecoration: "none",
                cursor: "pointer",
                minWidth: 160,
                transition: "background 0.15s",
            }}
        >
            <span style={{ flexShrink: 0 }}>{icon}</span>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <span style={{ fontSize: 11, opacity: 0.6, fontWeight: 400 }}>{label}</span>
                <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{name}</span>
            </span>
        </a>
    );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Download({ dict }: { dict: DownloadDict }) {
    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fb", color: "#1a1d23" }}>

            {/* ── Hero — white ── */}
            <section
                style={{
                    background: "#ffffff",
                    padding: "80px 24px 0",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        display: "inline-block",
                        background: "#eff6ff",
                        color: "#2563eb",
                        fontSize: 12,
                        fontWeight: 500,
                        padding: "4px 14px",
                        borderRadius: 20,
                        marginBottom: 24,
                        border: "1px solid #bfdbfe",
                    }}
                >
                    {dict.badge}
                </div>

                <h1
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "clamp(36px, 5vw, 56px)",
                        fontWeight: 400,
                        lineHeight: 1.12,
                        color: "#0f172a",
                        marginBottom: 20,
                    }}
                >
                    {dict.heroTitle}{" "}
                    <em style={{ fontStyle: "italic", color: "#2563eb" }}>
                        {dict.heroTitleItalic}
                    </em>
                    <br />
                    {dict.heroTitleEnd}
                </h1>

                <p
                    style={{
                        fontSize: 16,
                        color: "#6b7280",
                        maxWidth: 500,
                        margin: "0 auto 40px",
                        lineHeight: 1.65,
                    }}
                >
                    {dict.heroSubtitle}
                </p>

                {/* Store buttons */}
                <div
                    style={{
                        display: "flex",
                        gap: 14,
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginBottom: 32,
                    }}
                >
                    <StoreButton
                        href={dict.appStoreUrl}
                        icon={<AppleIcon color="#fff" />}
                        label={dict.appStore.label}
                        name={dict.appStore.name}
                    />
                    <StoreButton
                        href={dict.playStoreUrl}
                        icon={<PlayIcon color="#fff" />}
                        label={dict.playStore.label}
                        name={dict.playStore.name}
                    />
                </div>

                {/* Trust badges */}
                <div
                    style={{
                        display: "flex",
                        gap: 24,
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginBottom: 56,
                    }}
                >
                    {[
                        { icon: "⭐", text: dict.ratingLabel },
                        { icon: "💬", text: dict.reviewsLabel },
                        { icon: "🎉", text: dict.freeLabel },
                    ].map((item) => (
                        <div
                            key={item.text}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                fontSize: 13,
                                color: "#6b7280",
                            }}
                        >
                            <span style={{ fontSize: 14 }}>{item.icon}</span>
                            {item.text}
                        </div>
                    ))}
                </div>

                {/* ── Phone mockups — still light bg ── */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        gap: 20,
                        padding: "0 24px",
                    }}
                >
                    {/* Phone 1 — Live Feed */}
                    <div
                        style={{
                            width: 160,
                            height: 280,
                            background: "#1e293b",
                            borderRadius: "24px 24px 0 0",
                            border: "1.5px solid #e2e8f0",
                            borderBottom: "none",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            boxShadow: "0 -8px 40px rgba(0,0,0,0.08)",
                        }}
                    >
                        <div style={{ height: 20, background: "#0f172a", borderRadius: "22px 22px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: 40, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
                        </div>
                        <div style={{ flex: 1, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
                            <div style={{ fontSize: 10, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.6px" }}>Live Feed</div>
                            <div style={{ flex: 1, background: "#0f172a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: 22, marginBottom: 4 }}>📹</div>
                                    <div style={{ fontSize: 9, color: "#475569" }}>Camera 1 — Active</div>
                                </div>
                            </div>
                            <div style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: 6, padding: "6px 8px", display: "flex", alignItems: "center", gap: 6 }}>
                                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
                                <span style={{ fontSize: 9, color: "#93c5fd" }}>Person detected</span>
                            </div>
                        </div>
                    </div>

                    {/* Phone 2 — Main, taller */}
                    <div
                        style={{
                            width: 180,
                            height: 340,
                            background: "#1e293b",
                            borderRadius: "26px 26px 0 0",
                            border: "1.5px solid #e2e8f0",
                            borderBottom: "none",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            boxShadow: "0 -12px 48px rgba(0,0,0,0.1)",
                        }}
                    >
                        <div style={{ height: 22, background: "#0f172a", borderRadius: "24px 24px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: 44, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
                        </div>
                        <div style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ fontSize: 11, fontWeight: 600, color: "#e2e8f0" }}>CamGuard</div>
                                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(37,99,235,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3b82f6" }} />
                                </div>
                            </div>
                            <div style={{ flex: 1, background: "#0f172a", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: 26, marginBottom: 6 }}>🏠</div>
                                    <div style={{ fontSize: 10, color: "#475569" }}>Front Door</div>
                                </div>
                            </div>
                            {[
                                { time: "2m ago", label: "Person at front door", color: "#ef4444" },
                                { time: "18m ago", label: "Motion detected", color: "#f59e0b" },
                                { time: "1h ago", label: "Camera online", color: "#22c55e" },
                            ].map((alert, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", background: "rgba(255,255,255,0.03)", borderRadius: 7 }}>
                                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: alert.color, flexShrink: 0 }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: 9, color: "#cbd5e1", lineHeight: 1.3 }}>{alert.label}</div>
                                        <div style={{ fontSize: 8, color: "#475569" }}>{alert.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Phone 3 — Event History */}
                    <div
                        style={{
                            width: 160,
                            height: 280,
                            background: "#1e293b",
                            borderRadius: "24px 24px 0 0",
                            border: "1.5px solid #e2e8f0",
                            borderBottom: "none",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            boxShadow: "0 -8px 40px rgba(0,0,0,0.08)",
                        }}
                    >
                        <div style={{ height: 20, background: "#0f172a", borderRadius: "22px 22px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: 40, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
                        </div>
                        <div style={{ flex: 1, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
                            <div style={{ fontSize: 10, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.6px" }}>Event History</div>
                            {[
                                { icon: "👤", label: "Person detected", sub: "Today, 14:32" },
                                { icon: "🚗", label: "Vehicle detected", sub: "Today, 11:08" },
                                { icon: "👤", label: "Person detected", sub: "Yesterday" },
                            ].map((ev, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", background: "rgba(255,255,255,0.03)", borderRadius: 7 }}>
                                    <div style={{ fontSize: 14 }}>{ev.icon}</div>
                                    <div>
                                        <div style={{ fontSize: 9, color: "#cbd5e1" }}>{ev.label}</div>
                                        <div style={{ fontSize: 8, color: "#475569" }}>{ev.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Features grid ── */}
            <section style={{ maxWidth: 1072, margin: "0 auto", padding: "80px 24px" }}>
                <div style={{ textAlign: "center", marginBottom: 52 }}>
                    <h2
                        style={{
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: 34,
                            fontWeight: 400,
                            color: "#0f172a",
                            marginBottom: 12,
                        }}
                    >
                        {dict.featuresTitle}
                    </h2>
                    <p style={{ fontSize: 15, color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
                        {dict.featuresSubtitle}
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 20,
                    }}
                >
                    {dict.features.map((f, i) => (
                        <div
                            key={i}
                            style={{
                                background: "#fff",
                                border: "1px solid #e5e7eb",
                                borderRadius: 14,
                                padding: "24px 22px",
                            }}
                        >
                            <div
                                style={{
                                    width: 42,
                                    height: 42,
                                    background: "#eff6ff",
                                    borderRadius: 10,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 14,
                                }}
                            >
                                <FeatureIcon name={f.icon} />
                            </div>
                            <p style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", marginBottom: 6 }}>
                                {f.title}
                            </p>
                            <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.6 }}>
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Steps ── */}
            <section
                style={{
                    background: "#fff",
                    padding: "80px 24px",
                    borderTop: "1px solid #f1f5f9",
                    borderBottom: "1px solid #f1f5f9",
                }}
            >
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 52 }}>
                        <h2
                            style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: 34,
                                fontWeight: 400,
                                color: "#0f172a",
                                marginBottom: 12,
                            }}
                        >
                            {dict.stepsTitle}
                        </h2>
                        <p style={{ fontSize: 15, color: "#6b7280" }}>{dict.stepsSubtitle}</p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {dict.steps.map((step, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    gap: 24,
                                    alignItems: "flex-start",
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "50%",
                                            background: "#eff6ff",
                                            border: "2px solid #bfdbfe",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: "#2563eb",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {step.number}
                                    </div>
                                    {i < dict.steps.length - 1 && (
                                        <div style={{ width: 2, height: 48, background: "#e5e7eb", margin: "4px 0" }} />
                                    )}
                                </div>
                                <div style={{ paddingTop: 10, paddingBottom: i < dict.steps.length - 1 ? 48 : 0 }}>
                                    <p style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", marginBottom: 4 }}>
                                        {step.title}
                                    </p>
                                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Compatibility ── */}
            <section style={{ maxWidth: 1072, margin: "0 auto", padding: "72px 24px", textAlign: "center" }}>
                <h2
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: 30,
                        fontWeight: 400,
                        color: "#0f172a",
                        marginBottom: 10,
                    }}
                >
                    {dict.compatibilityTitle}
                </h2>
                <p style={{ fontSize: 14.5, color: "#6b7280", marginBottom: 36 }}>
                    {dict.compatibilitySubtitle}
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
                    {dict.compatibleBrands.map((brand) => (
                        <div
                            key={brand}
                            style={{
                                background: "#fff",
                                border: "1px solid #e5e7eb",
                                borderRadius: 8,
                                padding: "10px 22px",
                                fontSize: 13,
                                fontWeight: 600,
                                color: "#4b5563",
                            }}
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA strip ── */}
            <div style={{ maxWidth: 1072, margin: "0 auto", padding: "0 24px 80px" }}>
                <div
                    style={{
                        background: "#0f172a",
                        borderRadius: 20,
                        padding: "64px 24px",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div
                        aria-hidden
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                            pointerEvents: "none",
                        }}
                    />
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h2
                            style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: 34,
                                fontWeight: 400,
                                color: "#fff",
                                marginBottom: 12,
                            }}
                        >
                            {dict.ctaTitle}
                        </h2>
                        <p style={{ fontSize: 15, color: "#94a3b8", marginBottom: 36 }}>
                            {dict.ctaSubtitle}
                        </p>
                        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                            <a
                                href={dict.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "12px 22px",
                                    borderRadius: 12,
                                    background: "transparent",
                                    border: "1.5px solid rgba(255,255,255,0.3)",
                                    color: "#fff",
                                    textDecoration: "none",
                                    minWidth: 160,
                                }}
                            >
                                <AppleIcon color="#fff" />
                                <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                                    <span style={{ fontSize: 11, opacity: 0.6 }}>{dict.appStore.label}</span>
                                    <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{dict.ctaAppStore}</span>
                                </span>
                            </a>
                            <a
                                href={dict.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "12px 22px",
                                    borderRadius: 12,
                                    background: "transparent",
                                    border: "1.5px solid rgba(255,255,255,0.3)",
                                    color: "#fff",
                                    textDecoration: "none",
                                    minWidth: 160,
                                }}
                            >
                                <PlayIcon color="#fff" />
                                <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                                    <span style={{ fontSize: 11, opacity: 0.6 }}>{dict.playStore.label}</span>
                                    <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{dict.ctaPlayStore}</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
