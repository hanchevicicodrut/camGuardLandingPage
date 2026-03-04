
import {getDictionary} from "@/lib/getDictionary";
import PersonDetectionHero from "@/app/[locale]/features/person-detection/sections/PersonDetectionHero";
import WhatIsPersonDetection from "@/app/[locale]/features/person-detection/sections/WhatIsPersonDetection";
import HowItWorks from "@/app/[locale]/features/person-detection/sections/HowItWorks";
import Benefits from "@/app/[locale]/features/person-detection/sections/Benefits";
import UseCases from "@/app/[locale]/features/person-detection/sections/UseCases";
import SupportedCameras from "@/app/[locale]/features/person-detection/sections/SupportedCameras";

export default async function PersonDetectionPage({
                                                      params,
                                                  }: {
    params: Promise<{ locale: string }>;
}) {
    const {locale} = await params;
    const dict = await getDictionary(locale);

    return (
        <main>
            <PersonDetectionHero dict={dict.personDetection} />
            <WhatIsPersonDetection dict={dict.personDetectionWhatIs} />
            <HowItWorks dict={dict.personDetectionHowItWorks} />
            <Benefits dict={dict.personDetectionBenefits} />
            <UseCases dict={dict.personDetectionUseCases} />
            <SupportedCameras dict={dict.personDetectionCameras} />
        </main>
    );
}
