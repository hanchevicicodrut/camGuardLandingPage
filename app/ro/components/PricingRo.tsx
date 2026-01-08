import TrackedLink from "@/components/TrackedLink";

export default function PricingRo() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Prețuri
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                    Începe gratuit. Fă upgrade doar când ai nevoie de mai mult.
                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">

                    <div className="border rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-semibold">Gratuit</h3>
                        <p className="mt-2 text-gray-600">
                            Pentru uz personal și monitorizare de bază
                        </p>

                        <p className="mt-6 text-4xl font-bold">€0</p>

                        <ul className="mt-6 space-y-2 text-gray-600">
                            <li>✔ 1 cameră</li>
                            <li>✔ Detectare persoane</li>
                            <li>✔ Notificări instant</li>
                        </ul>
                        <TrackedLink
                            href="#waitlist"
                            label="Pricing RO - Începe Gratuit"
                            className="mt-8 inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
                            children="Începe Gratuit"
                        >
                        </TrackedLink>
                    </div>

                    <div className="border rounded-2xl p-8 text-center bg-gray-50">
                        <h3 className="text-xl font-semibold">Premium</h3>
                        <p className="mt-2 text-gray-600">
                            Pentru nevoi avansate de monitorizare
                        </p>

                        <p className="mt-6 text-4xl font-bold">În curând</p>

                        <ul className="mt-6 space-y-2 text-gray-600">
                            <li>✔ Mai multe camere</li>
                            <li>✔ Istoric extins</li>
                            <li>✔ Alerte avansate</li>
                        </ul>
                        <TrackedLink
                            href="#waitlist"
                            label="Pricing RO - Alătură-te Listei de Așteptare"
                            className="mt-8 inline-block px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100"
                            children="Alătură-te Listei de Așteptare"
                        >
                        </TrackedLink>

                    </div>
                </div>
            </div>
        </section>
    );
}
