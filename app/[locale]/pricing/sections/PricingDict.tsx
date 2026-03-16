export type PricingDict = {
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        primaryCTA: string;
        points: {
            device: string;
            detection: string;
            alerts: string;
            cameras: string;
        };
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
            features: {
                detection: string;
                alerts: string;
                cameras: string;
                objects: string;
                cloud: string;
            };
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
