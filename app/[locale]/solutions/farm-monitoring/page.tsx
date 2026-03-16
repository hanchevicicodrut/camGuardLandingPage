import { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";

import HeroFarmMonitoring from "@/app/[locale]/solutions/farm-monitoring/sections/HeroFarmMonitoring";
import FarmDetectionTypes from "@/app/[locale]/solutions/farm-monitoring/sections/FarmDetectionTypes";
import FarmProblems from "@/app/[locale]/solutions/farm-monitoring/sections/FarmProblems";
import HowItWorksFarm from "@/app/[locale]/solutions/farm-monitoring/sections/HowItWorksFarm";
import FarmUseCases from "@/app/[locale]/solutions/farm-monitoring/sections/FarmUseCases";
import FarmBenefits from "@/app/[locale]/solutions/farm-monitoring/sections/FarmBenefits";
import FarmMonitoringCTA from "@/app/[locale]/solutions/farm-monitoring/sections/FarmMonitoringCTA";

export async function generateMetadata({
                                           params,
                                       }: {
    params: { locale: string };
}): Promise<Metadata> {

    const isRO = params.locale === "ro";

    return {
        title: isRO
            ? "Monitorizare AI pentru ferme și proprietăți exterioare | CamGuard"
            : "AI Monitoring for Farms and Outdoor Properties | CamGuard",

        description: isRO
            ? "Monitorizează ferme, animale, vehicule și echipamente cu detectare AI în timp real folosind camerele existente."
            : "Monitor farms, livestock, vehicles and equipment with real-time AI detection using your existing cameras.",
    };
}

export default async function FarmMonitoringPage({
                                                     params,
                                                 }: {
    params: { locale: string };
}) {

    const dict = await getDictionary(params.locale);

    return (
        <main>

            <HeroFarmMonitoring dict={dict} />

            <FarmDetectionTypes dict={dict} />

            <FarmProblems dict={dict} />

            <HowItWorksFarm dict={dict} />

            <FarmUseCases dict={dict} />

            <FarmBenefits dict={dict} />

            <FarmMonitoringCTA dict={dict} />

        </main>
    );
}
