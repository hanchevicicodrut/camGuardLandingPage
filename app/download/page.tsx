import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Download CamGuard – Android & iOS",
    description:
        "Download the CamGuard app for Android or iOS and start monitoring your cameras with AI-powered alerts.",
};

import Image from "next/image";

export default function DownloadPage() {
    return (
        <section className="px-6 py-24 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">
                Download CamGuard
            </h1>

            <p className="mt-6 text-lg text-gray-600">
                Choose your platform and start monitoring smarter.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                <a
                    href="https://play.google.com/store/apps/details?id=com.camGuard.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/gpbadge_en.svg"
                        alt="Get it on Google Play"
                        className="h-14"
                    />
                </a>

                <a
                    href="https://apps.apple.com/app/idXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/asbadge_en.svg"
                        alt="Download on the App Store"
                        className="h-14"
                    />
                </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
                Available for Android and iOS devices.
            </p>
        </section>
    );
}

