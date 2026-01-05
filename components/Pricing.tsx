import TrackedLink from "@/components/TrackedLink";

export default function Pricing() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Pricing
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                    Start free. Upgrade only when you need more.
                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <div className="border rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-semibold">Free</h3>
                        <p className="mt-2 text-gray-600">
                            For personal and basic monitoring
                        </p>

                        <p className="mt-6 text-4xl font-bold">€0</p>

                        <ul className="mt-6 space-y-2 text-gray-600">
                            <li>✔ 1 camera</li>
                            <li>✔ Person detection</li>
                            <li>✔ Instant notifications</li>
                        </ul>
                        <TrackedLink href="#waitlist" label="Pricing - Get Started Free"
                                     className="mt-8 inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
                                     children="Get Started Free">
                        </TrackedLink>
                    </div>

                    {/* Premium Plan */}
                    <div className="border rounded-2xl p-8 text-center bg-gray-50">
                        <h3 className="text-xl font-semibold">Premium</h3>
                        <p className="mt-2 text-gray-600">
                            For advanced monitoring needs
                        </p>

                        <p className="mt-6 text-4xl font-bold">Coming Soon</p>

                        <ul className="mt-6 space-y-2 text-gray-600">
                            <li>✔ Multiple cameras</li>
                            <li>✔ Extended history</li>
                            <li>✔ Advanced alerts</li>
                        </ul>
                        <TrackedLink href="#waitlist" label="Pricing - Join Waitlist"
                                     className="mt-8 inline-block px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100"
                                     children="Join Waitlist">
                        </TrackedLink>

                    </div>
                </div>
            </div>
        </section>
    );
}
