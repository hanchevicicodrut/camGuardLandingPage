type Props = {
    dict: any;
};

export default function HomeSecurityHowItWorks({ dict }: Props) {
    const t = dict.homeSecurity.howItWorks;

    const steps = [
        t.steps.connect,
        t.steps.analyze,
        t.steps.alerts,
    ];

    return (
        <section className="py-32 px-6 bg-gray-50">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        {t.subtitle}
                    </p>

                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-12">

                    {steps.map((step: any, i: number) => (
                        <div key={i} className="relative text-center">

                            {/* Number */}
                            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-semibold shadow-md">
                                {i + 1}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
