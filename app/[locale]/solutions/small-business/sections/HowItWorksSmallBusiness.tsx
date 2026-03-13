type Props = {
    dict: any;
};

export default function HowItWorksSmallBusiness({ dict }: Props) {

    const t = dict.smallBusiness.howItWorks;

    const steps = [
        t.steps.connect,
        t.steps.analyze,
        t.steps.detect,
        t.steps.alert
    ];

    return (
        <section className="py-28 px-6 bg-gray-50">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-24">

                    <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                        {t.title}
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t.subtitle}
                    </p>

                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

                    {steps.map((step: any, i: number) => (

                        <div
                            key={i}
                            className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition"
                        >

                            {/* Step number */}
                            <div className="w-10 h-10 mb-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                                {i + 1}
                            </div>

                            <h3 className="text-xl font-semibold mb-4">
                                {step.title}
                            </h3>

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
