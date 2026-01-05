import Image from "next/image";
import Hero from "@/components/Hero";
import Waitlist from "@/components/Waitlist";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import AppPreview from "@/components/AppPreview";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
    return (
        <main className="min-h-screen p-10">
            <Hero/>
            <HowItWorks/>
            <Features/>
            <UseCases/>
            <AppPreview/>
            <Pricing/>
            <FinalCTA/>
            <Waitlist/>
            <Footer/>
        </main>
    );
}
