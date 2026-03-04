type Props = {
    locale: string;
};

export default function UseCasesSection({ locale }: Props) {
    const isRO = locale === "ro";

    return (
        <section className="py-28 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-semibold text-center mb-16">
                    {isRO ? "Pentru Cine Este" : "Who It's For"}
                </h2>

                <div className="grid md:grid-cols-3 gap-10">

                    <div className="bg-white p-8 rounded-3xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-4">
                            {isRO ? "🏠 Proprietari" : "🏠 Homeowners"}
                        </h3>
                        <p className="text-gray-600">
                            {isRO
                                ? "Notificari reale doar cand apare o persoana."
                                : "Receive alerts only when a real person appears."}
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-4">
                            {isRO ? "🏢 Firme" : "🏢 Businesses"}
                        </h3>
                        <p className="text-gray-600">
                            {isRO
                                ? "Reduceti costurile de monitorizare si alarmele inutile."
                                : "Reduce monitoring costs and unnecessary alerts."}
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-4">
                            {isRO ? "🔐 Instalatori" : "🔐 Installers"}
                        </h3>
                        <p className="text-gray-600">
                            {isRO
                                ? "Oferiti clientilor un serviciu AI pe baza de abonament."
                                : "Offer AI subscription services to your clients."}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
