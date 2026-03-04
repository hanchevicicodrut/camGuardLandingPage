type Props = {
    locale: string;
};

export default function TrustSection({ locale }: Props) {
    const isRO = locale === "ro";

    return (
        <section className="py-32 px-6 bg-black text-white text-center">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-4xl font-semibold mb-10">
                    {isRO ? "Siguranta si Confidentialitate" : "Security & Privacy"}
                </h2>

                <div className="grid md:grid-cols-3 gap-12 text-gray-400">

                    <div>
                        <h3 className="text-white font-medium mb-2">
                            {isRO ? "Procesare securizata" : "Secure Processing"}
                        </h3>
                        <p>
                            {isRO
                                ? "Imaginile sunt analizate in cloud securizat."
                                : "Images are analyzed in secure cloud infrastructure."}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-2">
                            {isRO ? "Conform GDPR" : "GDPR Compliant"}
                        </h3>
                        <p>
                            {isRO
                                ? "Respecta standardele europene de protectie a datelor."
                                : "Fully aligned with European data protection standards."}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-2">
                            {isRO ? "Fara stocare continua" : "No Continuous Storage"}
                        </h3>
                        <p>
                            {isRO
                                ? "Nu se stocheaza flux video permanent."
                                : "No permanent video storage unless configured."}
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
