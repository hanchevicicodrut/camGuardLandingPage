export default function HowItWorks() {
    return (
        <section className="px-6 py-24 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
                How It Works
            </h2>

            <p className="mt-4 text-center text-gray-600">
                Simple. Fast. Automated.
            </p>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
                {/* Step 1 */}
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                        1
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">
                        Add your camera
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Connect your existing camera using its access link.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                        2
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">
                        Automatic analysis
                    </h3>
                    <p className="mt-2 text-gray-600">
                        CamGuard continuously analyzes images from your camera feed.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                        3
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">
                        Instant notifications
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Receive alerts on your phone when a person is detected.
                    </p>
                </div>
            </div>

            <p className="mt-12 text-center text-gray-500">
                No manual checks. No extra hardware.
            </p>
        </section>
    );
}
