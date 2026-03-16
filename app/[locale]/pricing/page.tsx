import type { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";
import { PricingClient } from "./sections/PricingClient";

// ── Types (shared) ─────────────────────────────────────────────────────────────
export type PricingDict = {
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        primaryCTA: string;
        points: { device: string; detection: string; alerts: string; cameras: string };
    };
    plans: {
        title: string;
        subtitle: string;
        free: {
            badge: string;
            price: string;
            period: string;
            devices: string;
            button: string;
            features: { detection: string; alerts: string; cameras: string; objects: string; cloud: string };
        };
    };
    future: {
        title: string;
        subtitle: string;
        plans: {
            starter: { name: string; label: string; devices: string };
            business: { name: string; label: string; devices: string };
        };
    };
    faq: {
        title: string;
        subtitle: string;
        items: {
            free: { q: string; a: string };
            cameras: { q: string; a: string };
            plans: { q: string; a: string };
            upgrade: { q: string; a: string };
        };
    };
    cta: { title: string; subtitle: string; button: string };
};

// ── Metadata per locale ────────────────────────────────────────────────────────
// This runs on the server and generates <head> tags for Google to index.
export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    const titles: Record<string, string> = {
        en: "CamGuard Pricing – Free AI Camera Monitoring | No Hardware Required",
        ro: "Prețuri CamGuard – Monitorizare AI Gratuită | Fără Hardware Nou",
    };

    const descriptions: Record<string, string> = {
        en: "Start monitoring your security cameras for free with CamGuard. AI object detection, real-time alerts and no new hardware required. 1 device free forever.",
        ro: "Monitorizează camerele de securitate gratuit cu CamGuard. Detecție AI, alerte în timp real, fără hardware nou. 1 dispozitiv gratuit permanent.",
    };

    const canonicalBase = "https://camguard.app";

    return {
        title: titles[locale] ?? titles.en,
        description: descriptions[locale] ?? descriptions.en,
        alternates: {
            canonical: `${canonicalBase}/${locale}/pricing`,
            languages: {
                "en": `${canonicalBase}/en/pricing`,
                "ro": `${canonicalBase}/ro/pricing`,
                "x-default": `${canonicalBase}/en/pricing`,
            },
        },
        openGraph: {
            title: titles[locale] ?? titles.en,
            description: descriptions[locale] ?? descriptions.en,
            url: `${canonicalBase}/${locale}/pricing`,
            siteName: "CamGuard",
            locale: locale === "ro" ? "ro_RO" : "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: titles[locale] ?? titles.en,
            description: descriptions[locale] ?? descriptions.en,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true },
        },
    };
}

// ── JSON-LD Structured Data ────────────────────────────────────────────────────
// FAQPage schema → Google can show FAQ dropdowns directly in search results.
// Product schema → Google understands this is a free product/service.
function StructuredData({ dict, locale }: { dict: PricingDict; locale: string }) {
    const canonicalBase = "https://camguard.app";

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": Object.values(dict.faq.items).map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a,
            },
        })),
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "CamGuard Free Plan",
        "description": dict.plans.subtitle,
        "brand": {
            "@type": "Brand",
            "name": "CamGuard",
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `${canonicalBase}/${locale}/pricing`,
            "priceValidUntil": "2099-12-31",
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${canonicalBase}/${locale}`,
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Pricing",
                "item": `${canonicalBase}/${locale}/pricing`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}

// ── Server Page ────────────────────────────────────────────────────────────────
// This is a Server Component — content is in the HTML immediately.
// Google crawls this without needing to run JavaScript.
export default async function PricingPage({
                                              params,
                                          }: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const pricing = dict.pricing as PricingDict;

    return (
        <>
            {/* Inject all JSON-LD schemas into <head> via Next.js */}
            <StructuredData dict={pricing} locale={locale} />

            {/*
        Semantic page wrapper.
        - <main> tells Google this is the primary content.
        - itemScope/itemType adds Microdata as a second layer of structured data.
      */}
            <main
                itemScope
                itemType="https://schema.org/WebPage"
                aria-label="Pricing page"
            >
                {/*
          CRITICAL FOR SEO:
          The h1 must contain the primary keyword.
          It is rendered server-side so Google sees it immediately.
          We render it here (server) and hide it visually in PricingClient
          to avoid duplication — OR we simply pass it to PricingClient
          and let it render. Either way it's in the SSR HTML.
        */}
                <PricingClient dict={pricing} />
            </main>
        </>
    );
}
