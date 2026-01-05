export default function Features() {
    return (
        <section className="px-6 py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Key Features
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                    Everything you need for smart, reliable camera monitoring.
                </p>

                <div className="mt-16 grid gap-10 md:grid-cols-2">
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold">
                            🔔 Real-Time Person Detection
                        </h3>
                        <p className="mt-3 text-gray-600">
                            CamGuard detects human presence in your camera feed and
                            alerts you instantly when someone appears.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold">
                            📱 Mobile Notifications
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Receive instant notifications directly on your phone,
                            wherever you are.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold">
                            ⚙️ Easy Setup
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Works with your existing cameras. No new hardware, no
                            complex configuration.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold">
                            🔒 Privacy First
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Your camera data is processed securely. You stay in full
                            control at all times.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
