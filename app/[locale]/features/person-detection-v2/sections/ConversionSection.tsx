type Props = {
    locale: string;
};

export default function ConversionSection({ locale }: Props) {
    const isRO = locale === "ro";

    return (
        <section className="py-28 px-6 text-center">
            <div className="max-w-3xl mx-auto">

                <h2 className="text-4xl font-semibold mb-6">
                    {isRO
                        ? "Transforma camerele tale existente in sisteme inteligente."
                        : "Transform Your Existing Cameras Into Intelligent Systems."}
                </h2>

                <p className="text-gray-600 mb-10">
                    {isRO
                        ? "Testeaza gratuit si elimina alarmele false."
                        : "Start your free trial and eliminate false alerts."}
                </p>

                <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-[1.02] transition">
                    {isRO ? "Testeaza Gratuit" : "Start Free Trial"}
                </button>

            </div>
        </section>
    );
}
