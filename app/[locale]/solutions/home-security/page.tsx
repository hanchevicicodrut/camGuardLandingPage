import {Metadata} from "next";
import {getDictionary} from "@/lib/getDictionary";
import HeroHomeSecurity from "@/app/[locale]/solutions/home-security/sections/HeroHomeSecurity";
import HomeSecurityProblems from "@/app/[locale]/solutions/home-security/sections/HomeSecurityProblems";
import HomeSecuritySolution from "@/app/[locale]/solutions/home-security/sections/HomeSecuritySolution";
import HomeSecurityUseCases from "@/app/[locale]/solutions/home-security/sections/HomeSecurityUseCases";
import HomeSecurityFeatures from "@/app/[locale]/solutions/home-security/sections/HomeSecurityFeatures";
import HomeSecurityDetectionTypes from "@/app/[locale]/solutions/home-security/sections/HomeSecurityDetectionTypes";
import HomeSecurityFAQ from "@/app/[locale]/solutions/home-security/sections/HomeSecurityFAQ";
import HomeSecurityCTA from "@/app/[locale]/solutions/home-security/sections/HomeSecurityCTA";


export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {

    const { locale } = await params;

    const isRO = locale === "ro";

    return {
        title: isRO
            ? "Securitate Inteligentă pentru Locuință | CamGuard"
            : "AI Home Security Monitoring | CamGuard",

        description: isRO
            ? "Protejează-ți casa cu monitorizare inteligentă. CamGuard detectează persoane, vehicule și animale în timp real."
            : "Protect your home with AI camera monitoring. CamGuard detects people, vehicles and animals instantly.",

        alternates: {
            canonical: `/${locale}/solutions/home-security`,
            languages: {
                en: "/en/solutions/home-security",
                ro: "/ro/solutions/home-security",
                "x-default": "/en/solutions/home-security",
            },
        },
    };
}

export default async function HomeSecurityPage({
                                                   params,
                                               }: {
    params: Promise<{ locale: string }>;
}) {

    const { locale } = await params;

    const dict = await getDictionary(locale);

    return (
        <main>
            <HeroHomeSecurity dict={dict} />
            <HomeSecurityProblems dict={dict} />
            <HomeSecuritySolution dict={dict}/>
            <HomeSecurityUseCases dict={dict}/>
            <HomeSecurityFeatures dict={dict}/>
            <HomeSecurityDetectionTypes dict={dict}/>
            <HomeSecurityFAQ dict={dict} />
            <HomeSecurityCTA dict={dict} />

        </main>
    );
}
