import HeroWarehouseMonitoring from "@/app/[locale]/solutions/warehouse-monitoring/sections/HeroWarehouseMonitoring";
import WarehouseProblems from "@/app/[locale]/solutions/warehouse-monitoring/sections/WarehouseProblems";
import WarehouseDetectionTypes from "@/app/[locale]/solutions/warehouse-monitoring/sections/WarehouseDetectionTypes";
import WarehouseHowItWorks from "@/app/[locale]/solutions/warehouse-monitoring/sections/WarehouseHowItWorks";
import WarehouseBenefits from "@/app/[locale]/solutions/warehouse-monitoring/sections/WarehouseBenefits";
import WarehouseUseCases from "@/app/[locale]/solutions/warehouse-monitoring/sections/WarehouseUseCases";
import WarehouseCTA from "@/app/[locale]/solutions/warehouse-monitoring/sections/WarehouseCTA";
import WarehouseFAQ from "@/app/[locale]/solutions/warehouse-monitoring/sections/WarehouseFAQ";
import {getDictionary} from "@/lib/getDictionary";
import {Metadata} from "next";

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {

    const { locale } = await params;

    const isRO = locale === "ro";

    return {
        title: isRO
            ? "Monitorizare Depozite cu AI | CamGuard"
            : "AI Warehouse Monitoring | CamGuard",

        description: isRO
            ? "Monitorizează depozitele cu detectare AI pentru persoane, vehicule și stivuitoare."
            : "Monitor warehouses using AI camera detection for people, vehicles and forklifts.",

        alternates: {
            canonical: `/${locale}/solutions/warehouse-monitoring`,
            languages: {
                en: "/en/solutions/warehouse-monitoring",
                ro: "/ro/solutions/warehouse-monitoring",
                "x-default": "/en/solutions/warehouse-monitoring",
            },
        },
    };
}

export default async function WarehouseMonitoringPage({
                                                          params,
                                                      }: {
    params: { locale: string };
}) {

    const dict = await getDictionary(params.locale);

    return (
        <main>

            <HeroWarehouseMonitoring dict={dict} />

            <WarehouseProblems dict={dict} />

            <WarehouseDetectionTypes dict={dict} />

            <WarehouseHowItWorks dict={dict} />

            <WarehouseBenefits dict={dict} />

            <WarehouseUseCases dict={dict} />

            <WarehouseCTA dict={dict} />

            <WarehouseFAQ dict={dict} />

        </main>
    );
}
