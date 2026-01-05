"use client";

function redirectToStore() {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
        window.location.href =
            "https://play.google.com/store/apps/details?id=com.camguard";
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        window.location.href =
            "https://apps.apple.com/app/idXXXXXXXXX";
    } else {
        window.location.href = "/download";
    }
}

export default function FinalCTA() {
    return (
        <section className="px-6 py-24 bg-blue-600 text-white text-center">
            <h2 className="text-3xl font-bold">
                Protect What Matters Most
            </h2>

            <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
                Start monitoring smarter with CamGuard today.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <button
                    onClick={redirectToStore}
                    className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100"
                >
                    Download the App
                </button>

                <a
                    href="#waitlist"
                    className="px-8 py-4 rounded-xl border border-white font-semibold hover:bg-blue-500"
                >
                    Get Started Free
                </a>
            </div>
        </section>
    );
}
