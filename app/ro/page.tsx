import {Metadata} from "next";
import HeroRo from "@/app/ro/components/HeroRo";
import HowItWorksRo from "@/app/ro/components/HowItWorksRo";
import FeaturesRo from "@/app/ro/components/FeaturesRo";
import UseCasesRo from "@/app/ro/components/UseCasesRo";
import AppPreviewRo from "@/app/ro/components/AppPreviewRo";
import PricingRo from "@/app/ro/components/PricingRo";
import FinalCTARo from "@/app/ro/components/FinalCTARo";
import WaitlistRo from "@/app/ro/components/WaitlistRo";
import FooterRo from "@/app/ro/components/FooterRo";


export const metadata: Metadata = {
    title: "CamGuard – Aplicație Inteligentă de Monitorizare Camere",
    description:
        "CamGuard detectează persoane în fluxul camerei tale și trimite alerte instant pe telefon. Configurare rapidă. Gratuit la început.",
};

export default function RoPage() {
    return (
        <main className="min-h-screen p-10">
            <HeroRo/>
            <HowItWorksRo/>
            <FeaturesRo/>
            <UseCasesRo/>
            <AppPreviewRo/>
            <PricingRo/>
            <FinalCTARo/>
            <WaitlistRo/>
            <FooterRo/>
        </main>
    )
}
