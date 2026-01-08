export default function FeaturesRo() {
    return (
        <section className="px-6 py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Funcționalități Cheie
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                    Tot ce ai nevoie pentru o monitorizare video inteligentă și sigură.
                </p>

                <div className="mt-16 grid gap-10 md:grid-cols-2">
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold">
                            🔔 Detectare Persoane în Timp Real
                        </h3>
                        <p className="mt-3 text-gray-600">
                            CamGuard detectează prezența umană în fluxul camerei tale și
                            te alertează instant atunci când apare cineva.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold">
                            📱 Notificări Mobile
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Primești notificări instant direct pe telefon, oriunde te-ai afla.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold">
                            ⚙️ Configurare Ușoară
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Funcționează cu camerele tale existente. Fără hardware nou,
                            fără configurări complicate.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold">
                            🔒 Confidențialitate pe Primul Loc
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Datele camerei tale sunt procesate în siguranță. Tu deții
                            controlul complet în orice moment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
