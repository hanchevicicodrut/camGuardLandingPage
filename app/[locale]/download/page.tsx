import { getDictionary } from "@/lib/getDictionary";
import Download from "@/app/[locale]/download/sections/Download";


interface DownloadPageProps {
    params: Promise<{ locale: string }>;
}

export default async function DownloadPage({ params }: DownloadPageProps) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return <Download dict={dict.download} />;
}
