import type { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";
import { HomeClient } from "./HomeClient";

// ── Shared type ────────────────────────────────────────────────────────────────
export type HomeDict = {
    meta: { title: string; description: string };
    hero: {
        badge: string;
        title: string;
        titleAccent: string;
        subtitle: string;
        primaryCTA: string;
        secondaryCTA: string;
        trustPoints: string[];
    };
    howItWorks: {
        title: string;
        subtitle: string;
        note: string;
        steps: { number: string; title: string; description: string }[];
    };
    features: {
        title: string;
        subtitle: string;
        items: { icon: string; title: string; description: string }[];
    };
    useCases: {
        title: string;
        subtitle: string;
        items: { icon: string; title: string; description: string; href: string }[];
    };
    inAction: {
        title: string;
        subtitle: string;
        features: string[];
    };
    pricing: {
        title: string;
        subtitle: string;
        link: string;
        linkHref: string;
        free: {
            name: string;
            tagline: string;
            price: string;
            period: string;
            features: string[];
            cta: string;
        };
        premium: {
            name: string;
            tagline: string;
            label: string;
            features: string[];
            cta: string;
        };
    };
    cta: {
        badge: string;
        title: string;
        subtitle: string;
        primaryCTA: string;
        secondaryCTA: string;
    };
};

// ── SEO Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const { meta } = dict.home as HomeDict;
    const canonicalBase = "https://camguard.app";

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `${canonicalBase}/${locale}`,
            languages: {
                en: `${canonicalBase}/en`,
                ro: `${canonicalBase}/ro`,
                "x-default": `${canonicalBase}/en`,
            },
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `${canonicalBase}/${locale}`,
            siteName: "CamGuard",
            locale: locale === "ro" ? "ro_RO" : "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
        },
        robots: { index: true, follow: true },
    };
}

// ── JSON-LD Structured Data ────────────────────────────────────────────────────
function StructuredData({ dict, locale }: { dict: HomeDict; locale: string }) {
    const base = "https://camguard.app";

    const softwareApp = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "CamGuard",
        applicationCategory: "SecurityApplication",
        operatingSystem: "Web, iOS, Android",
        description: dict.meta.description,
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        url: `${base}/${locale}`,
    };

    const howItWorksSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: dict.howItWorks.title,
        description: dict.howItWorks.subtitle,
        step: dict.howItWorks.steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.title,
            text: s.description,
        })),
    };

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${base}/${locale}`,
            },
        ],
    };

    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "CamGuard",
        url: base,
        description: dict.meta.description,
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howItWorksSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        </>
    );
}

// ── Server Page ────────────────────────────────────────────────────────────────
export default async function HomePage({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const home = dict.home as HomeDict;

    return (
        <>
            <StructuredData dict={home} locale={locale} />
            <main itemScope itemType="https://schema.org/WebPage" aria-label="CamGuard homepage">
                <HomeClient dict={home} />
            </main>
        </>
    );
}
