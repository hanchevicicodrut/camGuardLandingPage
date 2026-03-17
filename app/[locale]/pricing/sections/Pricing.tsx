"use client";

import { useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

interface PlanFeature {
    text: string;
    muted?: boolean;
}

interface Plan {
    key: string;
    name: string;
    monthlyPrice: number | null;
    annualPrice: number | null;
    freeLabel: string | null;
    desc: string;
    cta: string;
    ctaStyle: "solid" | "outline";
    featured: boolean;
    featuresLabel: string;
    features: PlanFeature[];
}

interface FaqItem {
    q: string;
    a: string;
}

interface EnterpriseDict {
    title: string;
    desc: string;
    cta: string;
}

export interface PricingDict {
    badge: string;
    heroTitle: string;
    heroTitleItalic: string;
    heroTitleEnd: string;
    heroSubtitle: string;
    billingMonthly: string;
    billingAnnual: string;
    billingSave: string;
    billingPeriodMonthly: string;
    billingPeriodAnnual: string;
    pricingComingSoon: string;
    plans: Plan[];
    popularBadge: string;
    enterprise: EnterpriseDict;
    trustedLabel: string;
    trustedCompanies: string[];
    faqTitle: string;
    faqSubtitle: string;
    faqs: FaqItem[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function CheckIcon({ muted = false }: { muted?: boolean }) {
    return (
        <span
            style={{
                width: 17,
                height: 17,
                borderRadius: "50%",
                background: muted ? "#f3f4f6" : "#eff6ff",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 1,
            }}
        >
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                <path
                    d="M1 3.5L3.5 6L8 1"
                    stroke={muted ? "#d1d5db" : "#2563eb"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Pricing({ dict }: { dict: PricingDict }) {
    const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const periodLabel =
        billing === "annual" ? dict.billingPeriodAnnual : dict.billingPeriodMonthly;

    return (
        <div
            style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "#f8f9fb",
                color: "#1a1d23",
                minHeight: "100vh",
            }}
        >
            {/* ── Hero ── */}
            <section style={{ textAlign: "center", padding: "72px 24px 56px" }}>
                <div
                    style={{
                        display: "inline-block",
                        background: "#eff6ff",
                        color: "#2563eb",
                        fontSize: 12,
                        fontWeight: 500,
                        padding: "4px 14px",
                        borderRadius: 20,
                        marginBottom: 20,
                        border: "1px solid #bfdbfe",
                    }}
                >
                    {dict.badge}
                </div>

                <h1
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: 42,
                        fontWeight: 400,
                        lineHeight: 1.15,
                        color: "#0f172a",
                        marginBottom: 16,
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
                        maxWidth: 480,
                        margin: "0 auto 36px",
                        lineHeight: 1.6,
                    }}
                >
                    {dict.heroSubtitle}
                </p>

                {/* Billing toggle */}
                <div
                    style={{
                        display: "inline-flex",
                        background: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: 10,
                        padding: 4,
                        gap: 4,
                    }}
                >
                    {(["monthly", "annual"] as const).map((b) => (
                        <button
                            key={b}
                            onClick={() => setBilling(b)}
                            style={{
                                padding: "7px 22px",
                                borderRadius: 8,
                                fontSize: 13,
                                fontWeight: 500,
                                border: "none",
                                cursor: "pointer",
                                fontFamily: "'DM Sans', sans-serif",
                                transition: "all 0.15s",
                                background: billing === b ? "#2563eb" : "transparent",
                                color: billing === b ? "#fff" : "#6b7280",
                            }}
                        >
                            {b === "monthly" ? dict.billingMonthly : dict.billingAnnual}
                            {b === "annual" && (
                                <span
                                    style={{
                                        background: "#dcfce7",
                                        color: "#16a34a",
                                        fontSize: 11,
                                        fontWeight: 600,
                                        padding: "3px 8px",
                                        borderRadius: 20,
                                        marginLeft: 6,
                                    }}
                                >
                                    {dict.billingSave}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </section>

            {/* ── Plans grid ── */}
            <section
                style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 80px" }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 20,
                        alignItems: "start",
                    }}
                >
                    {dict.plans.map((plan) => {
                        const price =
                            billing === "monthly" ? plan.monthlyPrice : plan.annualPrice;

                        return (
                            <div
                                key={plan.key}
                                style={{
                                    background: "#fff",
                                    border: plan.featured
                                        ? "2px solid #2563eb"
                                        : "1px solid #e5e7eb",
                                    borderRadius: 16,
                                    padding: "32px 28px",
                                    position: "relative",
                                }}
                            >
                                {plan.featured && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: -13,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            background: "#2563eb",
                                            color: "#fff",
                                            fontSize: 11,
                                            fontWeight: 600,
                                            padding: "4px 16px",
                                            borderRadius: 20,
                                            whiteSpace: "nowrap",
                                            letterSpacing: "0.4px",
                                        }}
                                    >
                                        {dict.popularBadge}
                                    </div>
                                )}

                                {/* Plan name */}
                                <p
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: plan.featured ? "#2563eb" : "#6b7280",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.8px",
                                        marginBottom: 10,
                                    }}
                                >
                                    {plan.name}
                                </p>

                                {/* Price */}
                                {price !== null ? (
                                    <>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "baseline",
                                                gap: 4,
                                                marginBottom: 6,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 22,
                                                    fontWeight: 600,
                                                    color: "#0f172a",
                                                    marginTop: 4,
                                                }}
                                            >
                                                $
                                            </span>
                                            <span
                                                style={{
                                                    fontFamily: "'DM Serif Display', serif",
                                                    fontSize: 52,
                                                    fontWeight: 400,
                                                    color: "#0f172a",
                                                    lineHeight: 1,
                                                }}
                                            >
                                                {price}
                                            </span>
                                        </div>
                                        <p
                                            style={{
                                                fontSize: 14,
                                                color: "#9ca3af",
                                                marginBottom: 4,
                                            }}
                                        >
                                            {plan.freeLabel ?? periodLabel}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <div style={{ marginBottom: 6 }}>
                                            <span
                                                style={{
                                                    display: "inline-block",
                                                    background: "#f1f5f9",
                                                    color: "#64748b",
                                                    fontSize: 13,
                                                    fontWeight: 500,
                                                    padding: "6px 14px",
                                                    borderRadius: 8,
                                                    border: "1px dashed #cbd5e1",
                                                    marginTop: 4,
                                                }}
                                            >
                                                {dict.pricingComingSoon}
                                            </span>
                                        </div>
                                        <p
                                            style={{
                                                fontSize: 14,
                                                color: "#9ca3af",
                                                marginBottom: 4,
                                                minHeight: 21,
                                            }}
                                        >
                                            &nbsp;
                                        </p>
                                    </>
                                )}

                                <p
                                    style={{
                                        fontSize: 13.5,
                                        color: "#6b7280",
                                        lineHeight: 1.55,
                                        marginBottom: 24,
                                        minHeight: 44,
                                    }}
                                >
                                    {plan.desc}
                                </p>

                                <button
                                    style={{
                                        width: "100%",
                                        padding: 11,
                                        borderRadius: 10,
                                        fontSize: 14,
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        fontFamily: "'DM Sans', sans-serif",
                                        marginBottom: 28,
                                        transition: "all 0.15s",
                                        border:
                                            plan.ctaStyle === "solid"
                                                ? "1.5px solid #2563eb"
                                                : "1.5px solid #d1d5db",
                                        background:
                                            plan.ctaStyle === "solid" ? "#2563eb" : "transparent",
                                        color:
                                            plan.ctaStyle === "solid" ? "#fff" : "#374151",
                                    }}
                                >
                                    {plan.cta}
                                </button>

                                <div
                                    style={{
                                        height: 1,
                                        background: "#f3f4f6",
                                        marginBottom: 22,
                                    }}
                                />

                                <p
                                    style={{
                                        fontSize: 11.5,
                                        fontWeight: 600,
                                        color: "#9ca3af",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.7px",
                                        marginBottom: 14,
                                    }}
                                >
                                    {plan.featuresLabel}
                                </p>

                                <ul
                                    style={{
                                        listStyle: "none",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 10,
                                        padding: 0,
                                    }}
                                >
                                    {plan.features.map((f, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: 10,
                                                fontSize: 13.5,
                                                color: f.muted ? "#9ca3af" : "#374151",
                                                lineHeight: 1.45,
                                            }}
                                        >
                                            <CheckIcon muted={f.muted} />
                                            {f.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ── Enterprise band ── */}
            <div
                style={{ maxWidth: 1072, margin: "0 auto", padding: "0 24px 40px" }}
            >
                <div
                    style={{
                        background: "#f0f7ff",
                        border: "1.5px dashed #bfdbfe",
                        borderRadius: 16,
                        padding: 28,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 20,
                    }}
                >
                    <div>
                        <h3
                            style={{
                                fontSize: 17,
                                fontWeight: 600,
                                color: "#0f172a",
                                marginBottom: 5,
                            }}
                        >
                            {dict.enterprise.title}
                        </h3>
                        <p
                            style={{
                                fontSize: 13.5,
                                color: "#6b7280",
                                maxWidth: 460,
                                lineHeight: 1.55,
                            }}
                        >
                            {dict.enterprise.desc}
                        </p>
                    </div>
                    <button
                        style={{
                            background: "#2563eb",
                            color: "#fff",
                            border: "none",
                            padding: "11px 26px",
                            borderRadius: 8,
                            fontSize: 14,
                            fontWeight: 500,
                            cursor: "pointer",
                            fontFamily: "'DM Sans', sans-serif",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {dict.enterprise.cta}
                    </button>
                </div>
            </div>

            {/* ── Trusted by ── */}
            <div
                style={{
                    maxWidth: 1072,
                    margin: "0 auto",
                    padding: "0 24px 64px",
                    textAlign: "center",
                }}
            >
                <p
                    style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#9ca3af",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        marginBottom: 24,
                    }}
                >
                    {dict.trustedLabel}
                </p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 16,
                        flexWrap: "wrap",
                        alignItems: "center",
                    }}
                >
                    {dict.trustedCompanies.map((name) => (
                        <div
                            key={name}
                            style={{
                                background: "#fff",
                                border: "1px solid #e5e7eb",
                                borderRadius: 8,
                                padding: "10px 22px",
                                fontSize: 13,
                                fontWeight: 600,
                                color: "#9ca3af",
                                letterSpacing: "0.4px",
                            }}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </div>

            {/* ── FAQ ── */}
            <section
                style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 80px" }}
            >
                <h2
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: 30,
                        fontWeight: 400,
                        textAlign: "center",
                        color: "#0f172a",
                        marginBottom: 8,
                    }}
                >
                    {dict.faqTitle}
                </h2>
                <p
                    style={{
                        textAlign: "center",
                        fontSize: 14.5,
                        color: "#6b7280",
                        marginBottom: 36,
                    }}
                >
                    {dict.faqSubtitle}
                </p>

                {dict.faqs.map((faq, i) => (
                    <div
                        key={i}
                        style={{
                            borderBottom: "1px solid #f0f0f0",
                            padding: "18px 0",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                fontSize: 14.5,
                                fontWeight: 500,
                                color: "#1a1d23",
                            }}
                        >
                            {faq.q}
                            <span
                                style={{
                                    transition: "transform 0.2s",
                                    transform:
                                        openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                                    color: "#9ca3af",
                                    marginLeft: 12,
                                    flexShrink: 0,
                                }}
                            >
                                ▾
                            </span>
                        </div>
                        {openFaq === i && (
                            <p
                                style={{
                                    fontSize: 13.5,
                                    color: "#6b7280",
                                    lineHeight: 1.65,
                                    marginTop: 10,
                                }}
                            >
                                {faq.a}
                            </p>
                        )}
                    </div>
                ))}
            </section>

            {/* ── CTA strip ── */}
            <div
                style={{ maxWidth: 1072, margin: "0 auto", padding: "0 24px 80px" }}
            >
                <div
                    style={{
                        background: "#0f172a",
                        textAlign: "center",
                        padding: "60px 24px",
                        borderRadius: 20,
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: 32,
                            fontWeight: 400,
                            color: "#fff",
                            marginBottom: 12,
                        }}
                    >
                        {dict.ctaTitle}
                    </h2>
                    <p
                        style={{ fontSize: 15, color: "#94a3b8", marginBottom: 28 }}
                    >
                        {dict.ctaSubtitle}
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: 12,
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <button
                            style={{
                                background: "#fff",
                                color: "#0f172a",
                                border: "none",
                                padding: "11px 26px",
                                borderRadius: 9,
                                fontSize: 14,
                                fontWeight: 500,
                                cursor: "pointer",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            {dict.ctaPrimary}
                        </button>
                        <button
                            style={{
                                background: "transparent",
                                color: "#fff",
                                border: "1.5px solid rgba(255,255,255,0.25)",
                                padding: "11px 26px",
                                borderRadius: 9,
                                fontSize: 14,
                                fontWeight: 500,
                                cursor: "pointer",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            {dict.ctaSecondary}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
