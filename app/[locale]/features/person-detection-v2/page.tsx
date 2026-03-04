import PremiumHero from "./sections/PremiumHero";
import ComparisonSection from "./sections/ComparisonSection";
import VideoDemoSection from "./sections/VideoDemoSection";
import UpgradePositioningSection from "./sections/UpgradePositioningSection";
import StatsSection from "./sections/StatsSection";
import UseCasesSection from "./sections/UseCasesSection";
import TrustSection from "./sections/TrustSection";
import FAQSection from "./sections/FAQSection";
import ConversionSection from "./sections/ConversionSection";
import {getDictionary} from "@/lib/getDictionary";

export default async function PersonDetectionPage({
                                                      params,
                                                  }: {
    params: Promise<{ locale: string }>;
}) {
    const {locale} = await params;
    const dict = await getDictionary(locale);

    return (
        <main>
            <PremiumHero dict={dict.personDetection}/>
            <ComparisonSection/>
            <VideoDemoSection/>
            <UpgradePositioningSection locale={locale}/>
            <StatsSection/>
            <UseCasesSection locale={locale}/>
            <TrustSection locale={locale}/>
            <FAQSection/>
            <ConversionSection locale={locale}/>
        </main>
    );
}
