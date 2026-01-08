import Image from "next/image";

export default function DownloadPageRo() {
    return (
        <section className="px-6 py-24 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">
                Descarcă CamGuard
            </h1>

            <p className="mt-6 text-lg text-gray-600">
                Alege platforma și începe să monitorizezi inteligent.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                <a
                    href="https://play.google.com/store/apps/details?id=com.camGuard.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700"
                >
                    <Image src="/android.svg" alt="Android" width={24} height={24} />
                    Descarcă pentru Android
                </a>

                <a
                    href="https://apps.apple.com/app/idXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-black text-white font-semibold hover:bg-gray-800"
                >
                    <Image src="/apple.svg" alt="iOS" width={24} height={24} />
                    Descarcă pentru iOS
                </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
                Disponibil pentru dispozitive Android și iOS.
            </p>
        </section>
    );
}
