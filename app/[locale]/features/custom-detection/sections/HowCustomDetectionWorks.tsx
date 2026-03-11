type Props = {
    dict: any;
};

export default function HowCustomDetectionWorks({ dict }: Props) {

    const t = dict.customDetection.howItWorks;

    return (
        <section className="py-32 px-6 bg-white">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl font-semibold mb-4">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>

                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-4 gap-8">

                    {t.steps.map((step: any, i: number) => (

                        <div
                            key={i}
                            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition"
                        >

                            <div className="text-3xl mb-4">
                                {step.icon}
                            </div>

                            <h3 className="font-semibold text-lg mb-2">
                                {step.title}
                            </h3>

                            <p className="text-sm text-gray-600">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
