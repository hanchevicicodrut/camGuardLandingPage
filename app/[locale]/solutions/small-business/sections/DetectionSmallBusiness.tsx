type Props = {
    dict: any;
};

export default function DetectionSmallBusiness({ dict }: Props) {

    const t = dict.smallBusiness.detection;

    const items = [
        t.items.people,
        t.items.vehicles,
        t.items.animals,
        t.items.suspicious,
        t.items.objects,
        t.items.custom
    ];

    return (
        <section className="py-28 px-6 bg-white">

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

                {/* Detection grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

                    {items.map((item: any, i: number) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition"
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
