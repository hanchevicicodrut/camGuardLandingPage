type Props = {
    dict: any;
};

export default function HomeSecurityUseCases({ dict }: Props) {
    const t = dict.homeSecurity.useCases;

    const items = [
        t.items.intruder,
        t.items.package,
        t.items.night,
        t.items.vehicle,
        t.items.animals,
        t.items.family,
    ];

    return (
        <section className="py-32 px-6 bg-white">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        {t.subtitle}
                    </p>

                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {items.map((item: any, i: number) => (
                        <div
                            key={i}
                            className="group p-8 rounded-2xl bg-gray-50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl"
                        >
                            <h3 className="text-xl font-semibold mb-3">
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
