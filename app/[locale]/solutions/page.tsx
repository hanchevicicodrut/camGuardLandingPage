import {Metadata} from "next";

export async function generateMetadata({
                                           params,
                                       }: {
    params: { locale: string };
}): Promise<Metadata> {

    const isRO = params.locale === "ro";

    return {
        title: isRO
            ? "Securitate Inteligentă pentru Locuință | CamGuard"
            : "AI Home Security Monitoring | CamGuard",

        description: isRO
            ? "Protejează-ți casa cu monitorizare inteligentă. CamGuard detectează persoane, vehicule și animale în timp real."
            : "Protect your home with AI camera monitoring. CamGuard detects people, vehicles and animals instantly.",

        alternates: {
            canonical: `/${params.locale}/solutions/home-security`,
            languages: {
                en: "/en/solutions/home-security",
                ro: "/ro/solutions/home-security",
                "x-default": "/en/solutions/home-security",
            },
        },
    };
}

export default function Home() {
    return (
        <main className="min-h-screen p-10">

        </main>
    );
}
