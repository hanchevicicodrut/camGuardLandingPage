import {event as gaEvent} from "@/lib/ga";


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

export default function Hero() {
    return (<section className="px-6 py-24 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Smart Camera Monitoring. Instant Alerts.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
            CamGuard analyzes your camera feed and notifies you instantly
            when a person is detected.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a

                href="#waitlist"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
                Get Started Free
            </a>

            <button

                className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100"
            >
                Download App
            </button>
        </div>
    </section>);
}
