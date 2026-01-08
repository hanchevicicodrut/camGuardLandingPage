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

            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                <a
                    href="https://play.google.com/store/apps/details?id=com.camGuard.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/gpbadge_ro.svg"
                        alt="Disponibil pe Google Play"
                        className="h-14"
                    />
                </a>

                <a
                    href="https://apps.apple.com/app/idXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/asbadge_ro.svg"
                        alt="Descarcă din App Store"
                        className="h-14"
                    />
                </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
                Disponibil pentru dispozitive Android și iOS.
            </p>
        </section>
    );
}
