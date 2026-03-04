import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [
        { locale: "en" },
        { locale: "ro" },
    ];
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <>
            <Header locale={locale} />
            {children}
            <Footer />
        </>
    );
}
