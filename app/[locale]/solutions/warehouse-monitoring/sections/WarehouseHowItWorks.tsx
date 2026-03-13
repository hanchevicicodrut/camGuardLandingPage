type Props = {
    dict: any;
};

export default function WarehouseHowItWorks({ dict }: Props) {

    const t = dict.warehouseMonitoring.howItWorks;

    const steps = [
        t.steps.connect,
        t.steps.analyze,
        t.steps.detect,
        t.steps.alert
    ];

    return (
        <section className="py-28 px-6 bg-gray-50">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-24">

                    <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                        {t.title}
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t.subtitle}
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12  mt-16">

                    {steps.map((step: any, i: number) => (

                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-white shadow-sm"
                        >

                            <div className="text-sm font-medium text-blue-600 mb-3">
                                Step {i + 1}
                            </div>

                            <h3 className="font-semibold mb-3">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
