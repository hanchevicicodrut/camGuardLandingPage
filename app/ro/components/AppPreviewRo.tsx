import Image from "next/image";

export default function AppPreviewRo() {
    return (
        <section className="px-6 py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Vezi CamGuard în Acțiune
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                    O interfață simplă și clară, concepută pentru a te ține informat dintr-o privire.
                </p>

                <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">

                    <div className="flex justify-center gap-6">
                        <Image
                            src="/img.png"
                            alt="Ecran notificare CamGuard"
                            width={240}
                            height={480}
                            className="rounded-2xl shadow-lg"
                        />
                        <Image
                            src="/img.png"
                            alt="Ecran monitorizare cameră CamGuard"
                            width={240}
                            height={480}
                            className="rounded-2xl shadow-lg hidden sm:block"
                        />
                    </div>

                    <div>
                        <ul className="space-y-4 text-gray-700">
                            <li>✔ Alerte instant pentru detectarea persoanelor</li>
                            <li>✔ Istoric clar al evenimentelor</li>
                            <li>✔ Interfață mobilă ușor de utilizat</li>
                            <li>✔ Conceput pentru monitorizare zilnică</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
