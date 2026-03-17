import { getDictionary } from "@/lib/getDictionary";
import Pricing from "@/app/[locale]/pricing/sections/Pricing";


interface PricingPageProps {
    params: Promise<{ locale: string }>;
}

export default async function PricingPage({ params }: PricingPageProps) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return <Pricing dict={dict.pricing} />;
}
