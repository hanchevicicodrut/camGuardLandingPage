import {Metadata} from "next";
import {getDictionary} from "@/lib/getDictionary";
import HeroSmallBusiness from "@/app/[locale]/solutions/small-business/sections/HeroSmallBusiness";
import ProblemsSmallBusiness from "@/app/[locale]/solutions/small-business/sections/ProblemsSmallBusiness";
import DetectionSmallBusiness from "@/app/[locale]/solutions/small-business/sections/DetectionSmallBusiness";
import HowItWorksSmallBusiness from "@/app/[locale]/solutions/small-business/sections/HowItWorksSmallBusiness";
import UseCasesSmallBusiness from "@/app/[locale]/solutions/small-business/sections/UseCasesSmallBusiness";
import BenefitsSmallBusiness from "@/app/[locale]/solutions/small-business/sections/BenefitsSmallBusiness";
import CTASmallBusiness from "@/app/[locale]/solutions/small-business/sections/CTASmallBusiness";
import FAQSmallBusiness from "@/app/[locale]/solutions/small-business/sections/FAQSmallBusiness";

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {

    const { locale } = await params;

    const isRO = locale === "ro";

    return {
        title: isRO
            ? "Monitorizare video pentru afaceri mici – CamGuard"
            : "AI Security Monitoring for Small Businesses – CamGuard",

        description: isRO
            ? "CamGuard monitorizează camerele de securitate și detectează persoane, vehicule și activități suspecte în timp real."
            : "CamGuard analyzes your security cameras and detects people, vehicles, and suspicious activity in real time.",

        alternates: {
            canonical: `/${locale}/solutions/small-business`,
            languages: {
                en: "/en/solutions/small-business",
                ro: "/ro/solutions/small-business",
                "x-default": "/en/solutions/small-business",
            },
        },
    };
}

export default async function SmallBusinessPage({
                                                    params,
                                                }: {
    params: Promise<{ locale: string }>;
}) {

    const { locale } = await params;

    const dict = await getDictionary(locale);

    return (
        <>
            <HeroSmallBusiness dict={dict} />
            <ProblemsSmallBusiness dict={dict} />
            <DetectionSmallBusiness dict={dict} />
            <HowItWorksSmallBusiness dict={dict} />
            <UseCasesSmallBusiness dict={dict} />
            <BenefitsSmallBusiness dict={dict} />
            <CTASmallBusiness dict={dict} />
            <FAQSmallBusiness dict={dict} />
        </>
    );
}
