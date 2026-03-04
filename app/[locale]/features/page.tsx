import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Waitlist from "@/components/Waitlist";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import AppPreview from "@/components/AppPreview";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export async function generateMetadata({
                                           params,
                                       }: {
    params: { locale: string };
}): Promise<Metadata> {

    const isRO = params.locale === "ro";

    return {
        title: isRO
            ? "CamGuard – Monitorizare inteligentă camere video"
            : "CamGuard – Smart Camera Monitoring App",

        description: isRO
            ? "CamGuard detectează persoane în fluxul camerei și trimite notificări instant."
            : "CamGuard detects people in your camera feed and sends instant alerts.",

        alternates: {
            canonical: `/${params.locale}`,
            languages: {
                en: "/en",
                ro: "/ro",
                "x-default": "/en",
            },
        },
    };
}

export default function Home() {
    return (
        <main className="min-h-screen p-10">
            <Hero />
            <HowItWorks />
            <Features />
            <UseCases />
            <AppPreview />
            <Pricing />
            <FinalCTA />
            <Waitlist />

        </main>
    );
}
