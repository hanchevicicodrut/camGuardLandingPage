import HeroAnimalDetection from "./sections/HeroAnimalDetection";
import SelectAnimalsFeature from "./sections/SelectAnimalsFeature";
import {getDictionary} from "@/lib/getDictionary";
import DetectableAnimals from "@/app/[locale]/features/animal-detection/sections/DetectableAnimals";
import HowAnimalDetectionWorks from "@/app/[locale]/features/animal-detection/sections/HowAnimalDetectionWorks";
import AnimalDetectionUseCases from "@/app/[locale]/features/animal-detection/sections/AnimalDetectionUseCases";
import AnimalDetectionBenefits from "@/app/[locale]/features/animal-detection/sections/AnimalDetectionBenefits";
import AnimalDetectionCTA from "@/app/[locale]/features/animal-detection/sections/AnimalDetectionCTA";


export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ locale: "en" | "ro" }>;
}) {

    const { locale } = await params;
    const dict = await getDictionary(locale);

    const t = dict.animalDetection.metadata;

    return {
        title: t.title,
        description: t.description,

        alternates: {
            languages: {
                en: "https://camguard.app/en/features/animal-detection",
                ro: "https://camguard.app/ro/features/animal-detection",
            },
        },
    };
}

export default async function AnimalDetectionPage({
                                                      params,
                                                  }: {
    params: Promise<{ locale: "en" | "ro" }>;
}) {

    const {locale} = await params;

    const dict = await getDictionary(locale);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: dict.animalDetection.faq.items.map((item: any) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            s
            <HeroAnimalDetection dict={dict}/>
            <SelectAnimalsFeature dict={dict}/>
            <DetectableAnimals dict={dict}/>
            <HowAnimalDetectionWorks dict={dict}/>
            <AnimalDetectionUseCases dict={dict}/>
            <AnimalDetectionBenefits dict={dict}/>
            <AnimalDetectionCTA dict={dict}/>
        </main>
    );
}
