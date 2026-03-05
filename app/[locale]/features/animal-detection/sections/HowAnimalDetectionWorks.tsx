type Step = {
    number: string;
    title: string;
    description: string;
};

type Props = {
    dict: any;
};

export default function HowAnimalDetectionWorks({ dict }: Props) {

    const t = dict.animalDetection.howItWorks;

    return (
        <section className="py-28 px-6 bg-gray-50">

            <div className="max-w-7xl mx-auto">

                {/* title */}
                <div className="text-center max-w-3xl mx-auto mb-20">

                    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        {t.title}
                    </h2>

                    <p className="text-lg text-gray-600">
                        {t.subtitle}
                    </p>

                </div>

                {/* steps */}
                <div className="grid md:grid-cols-3 gap-10">

                    {t.steps.map((step: Step, i: number) => (
                        <div
                            key={i}
                            className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition"
                        >

                            <div className="text-blue-600 font-semibold text-sm mb-4">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
