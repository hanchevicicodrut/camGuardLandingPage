import {Metadata} from "next";
import {getDictionary} from "@/lib/getDictionary";
import HeroCustomDetection from "@/app/[locale]/features/custom-detection/sections/HeroCustomDetection";
import ObjectsDetectionCategories from "@/app/[locale]/features/custom-detection/sections/ObjectsDetectionCategories";
import WhatIsCustomDetection from "@/app/[locale]/features/custom-detection/sections/WhatIsCustomDetection";
import HowCustomDetectionWorks from "@/app/[locale]/features/custom-detection/sections/HowCustomDetectionWorks";
import CustomDetectionUseCases from "@/app/[locale]/features/custom-detection/sections/CustomDetectionUseCases";
import CustomDetectionFAQ from "@/app/[locale]/features/custom-detection/sections/CustomDetectionFAQ";
import CustomDetectionCTA from "@/app/[locale]/features/custom-detection/sections/CustomDetectionCTA";

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {

    const {locale} = await params;
    const isRO = locale === "ro";

    return {
        title: isRO
            ? "Detectare AI de obiecte pentru camere video | CamGuard"
            : "AI Object Detection for Security Cameras | CamGuard",

        description: isRO
            ? "CamGuard detectează peste 80 de tipuri de obiecte în fluxul camerei, inclusiv persoane, vehicule și animale."
            : "CamGuard detects more than 80 object types including people, vehicles, animals and everyday objects using AI.",

        alternates: {
            canonical: `/${locale}/object-detection`,
            languages: {
                en: "/en/object-detection",
                ro: "/ro/object-detection",
                "x-default": "/en/object-detection",
            },
        },
    };
}

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ locale: string }>;
}) {

    const {locale} = await params;

    const dict = await getDictionary(locale);

    return (
        <main>

            <HeroCustomDetection dict={dict}/>

            <ObjectsDetectionCategories dict={dict}/>
            <WhatIsCustomDetection dict={dict}/>
            <HowCustomDetectionWorks dict={dict}/>
            <CustomDetectionUseCases dict={dict}/>
            <CustomDetectionFAQ dict={dict}/>
            <CustomDetectionCTA dict={dict}/>

        </main>
    );
}
