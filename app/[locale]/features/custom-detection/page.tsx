import { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";
import HeroCustomDetection from "@/app/[locale]/features/custom-detection/sections/HeroCustomDetection";
import ObjectsDetectionCategories from "@/app/[locale]/features/custom-detection/sections/ObjectsDetectionCategories";

export async function generateMetadata({
                                           params,
                                       }: {
    params: { locale: string };
}): Promise<Metadata> {

    const isRO = params.locale === "ro";

    return {
        title: isRO
            ? "Detectare AI de obiecte pentru camere video | CamGuard"
            : "AI Object Detection for Security Cameras | CamGuard",

        description: isRO
            ? "CamGuard detectează peste 80 de tipuri de obiecte în fluxul camerei, inclusiv persoane, vehicule și animale."
            : "CamGuard detects more than 80 object types including people, vehicles, animals and everyday objects using AI.",

        alternates: {
            canonical: `/${params.locale}/object-detection`,
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
    params: { locale: string };
}) {

    const dict = await getDictionary(params.locale);

    return (
        <main>

            <HeroCustomDetection dict={dict} />

            {/* next sections */}
            {/* <WhatIsObjectDetection dict={dict.customDetection} /> */}
            <ObjectsDetectionCategories dict={dict} />
            {/* <UseCases dict={dict.customDetection} /> */}
            {/* <HowDetectionWorks dict={dict.customDetection} /> */}
            {/* <FAQ dict={dict.customDetection} /> */}

        </main>
    );
}
