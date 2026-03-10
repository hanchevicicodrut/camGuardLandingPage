import type { Metadata } from "next";
import CarHero from "@/app/[locale]/features/car-detection/sections/CarHero";
import {getDictionary} from "@/lib/getDictionary";
import WhatIsCarDetection from "@/app/[locale]/features/car-detection/sections/WhatIsCarDetection";
import WhyVehicleDetection from "@/app/[locale]/features/car-detection/sections/WhyVehicleDetection";
import CarDetectionUseCases from "@/app/[locale]/features/car-detection/sections/UseCases";
import HowCarDetectionWorks from "@/app/[locale]/features/car-detection/sections/HowCarDetectionWorks";
import SmartVehicleAlerts from "@/app/[locale]/features/car-detection/sections/SmartAlerts";
import WhyChooseCamGuard from "@/app/[locale]/features/car-detection/sections/WhyChooseCamGuard";
import CarDetectionFAQ from "@/app/[locale]/features/car-detection/sections/CarFAQ";


export async function generateMetadata(
    { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {

    const { locale } = await params;

    const isRO = locale === "ro";

    const title = isRO
        ? "Detectare Masini cu AI pentru Camere de Supraveghere | CamGuard"
        : "AI Car Detection for Security Cameras | CamGuard";

    const description = isRO
        ? "Primește notificări când o mașină intră în curte sau parcare folosind detectarea inteligentă CamGuard."
        : "Receive alerts when vehicles enter your driveway or parking area using CamGuard AI car detection.";

    const path = `/${locale}/features/car-detection`;

    return {
        title,
        description,
        alternates: {
            canonical: path,
            languages: {
                en: "/en/features/car-detection",
                ro: "/ro/features/car-detection",
                "x-default": "/en/features/car-detection",
            },
        },
    };
}
export default async function Home({
                                                      params,
                                                  }: {
    params: Promise<{ locale: string }>;
}) {
    const {locale} = await params;
    const dict = await getDictionary(locale);
    return (
        <main className="min-h-screen p-10">
            <CarHero dict={dict.carDetection.hero} />
            <WhatIsCarDetection dict={dict.carDetection.whatIsCarDetection} />
            <WhyVehicleDetection dict={dict.carDetection.whyVehicleDetection} />
            <CarDetectionUseCases dict={dict.carDetection.useCases} />
            <HowCarDetectionWorks dict={dict.carDetection.howItWorks} />
            <SmartVehicleAlerts dict={dict.carDetection.smartAlerts} />
            <WhyChooseCamGuard dict={dict.carDetection.whyCamGuard} />
            <CarDetectionFAQ dict={dict.carDetection.faq} />
        </main>
    );
}
