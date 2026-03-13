type Props = {
    dict: any;
};

export default function BenefitsSmallBusiness({ dict }: Props) {

    const t = dict.smallBusiness.benefits;

    const items = [
        t.items.preventTheft,
        t.items.remoteMonitoring,
        t.items.instantAlerts,
        t.items.aiAutomation,
        t.items.multiLocation,
        t.items.cameraCompatibility
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

                {/* Benefits */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12  mt-16">

                    {items.map((item: any, i: number) => (

                        <div
                            key={i}
                            className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition"
                        >

                            <h3 className="text-xl font-semibold mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
