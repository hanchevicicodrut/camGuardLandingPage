export default function UseCases() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Who Is CamGuard For?
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                    CamGuard adapts to different monitoring needs, at home or at work.
                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 rounded-2xl bg-gray-50 text-center">
                        <h3 className="text-lg font-semibold">🏠 Home Security</h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Know when someone approaches your home, even when you’re away.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 text-center">
                        <h3 className="text-lg font-semibold">🏢 Office & Business</h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Monitor entrances and sensitive areas in your workplace.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 text-center">
                        <h3 className="text-lg font-semibold">🚪 Property Monitoring</h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Receive alerts when someone enters restricted or private zones.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 text-center">
                        <h3 className="text-lg font-semibold">🌳 Outdoor Areas</h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Detect activity around your property and outdoor spaces.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
