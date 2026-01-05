import Image from "next/image";

export default function AppPreview() {
    return (
        <section className="px-6 py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    See CamGuard in Action
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                    A simple, clean interface designed to keep you informed at a glance.
                </p>

                <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
                    {/* Screenshots */}
                    <div className="flex justify-center gap-6">
                        <Image
                            src="/img.png"
                            alt="CamGuard notification screen"
                            width={240}
                            height={480}
                            className="rounded-2xl shadow-lg"
                        />
                        <Image
                            src="/img.png"
                            alt="CamGuard camera monitoring screen"
                            width={240}
                            height={480}
                            className="rounded-2xl shadow-lg hidden sm:block"
                        />
                    </div>

                    {/* Benefits */}
                    <div>
                        <ul className="space-y-4 text-gray-700">
                            <li>✔ Instant person detection alerts</li>
                            <li>✔ Clear event history</li>
                            <li>✔ Easy-to-use mobile interface</li>
                            <li>✔ Designed for everyday monitoring</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
