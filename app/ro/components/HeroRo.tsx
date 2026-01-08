import TrackedLink from "@/components/TrackedLink";
import TrackedButton from "@/components/TrackedButton";

function redirectToStore() {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent)) {
        window.location.href =
            "https://play.google.com/store/apps/details?id=com.camGuard.app";
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        window.location.href =
            "https://apps.apple.com/app/idXXXXXXXXX";
    } else {
        window.location.href = "/download";
    }
}

export default function HeroRo() {
    return (
        <section className="px-6 py-24 text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Monitorizare Camere Inteligentă. Alerte Instant.
            </h1>

            <p className="mt-6 text-lg text-gray-600">
                CamGuard analizează fluxul camerei tale și te notifică instant
                atunci când este detectată o persoană.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <TrackedLink
                    href="#waitlist"
                    label="Hero - Începe Gratuit"
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
                    children="Începe Gratuit"
                >
                </TrackedLink>

                <TrackedButton
                    action="download"
                    className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100"
                    label="Hero - Descarcă Aplicația"
                    children="Descarcă Aplicația"
                >
                </TrackedButton>
            </div>
        </section>
    );
}
