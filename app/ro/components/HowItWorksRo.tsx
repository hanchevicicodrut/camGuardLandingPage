export default function HowItWorksRo() {
    return (
        <section className="px-6 py-24 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
                Cum Funcționează
            </h2>

            <p className="mt-4 text-center text-gray-600">
                Simplu. Rapid. Automat.
            </p>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
                {/* Step 1 */}
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                        1
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">
                        Adaugă camera ta
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Conectează camera ta existentă folosind linkul de acces.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                        2
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">
                        Analiză automată
                    </h3>
                    <p className="mt-2 text-gray-600">
                        CamGuard analizează continuu imaginile din fluxul camerei tale.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                        3
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">
                        Notificări instant
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Primești alerte pe telefon atunci când este detectată o persoană.
                    </p>
                </div>
            </div>

            <p className="mt-12 text-center text-gray-500">
                Fără verificări manuale. Fără hardware suplimentar.
            </p>
        </section>
    );
}
