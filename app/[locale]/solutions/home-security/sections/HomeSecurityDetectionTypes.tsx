type Props = {
    dict: any;
};

export default function HomeSecurityDetectionTypes({ dict }: Props) {
    const t = dict.homeSecurity.detectionTypes;

    const categories = [
        t.categories.people,
        t.categories.vehicles,
        t.categories.animals,
        t.categories.objects,
    ];

    return (
        <section className="py-28 px-6 bg-gray-50">

            <div className="max-w-7xl mx-auto ">

                {/* header */}
                <div className="text-center mb-24">
                    <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                        {t.title}
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                {/* categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 mt-6">

                    {categories.map((category: any, i: number) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">
                                {category.title}
                            </h3>

                            <div className="flex flex-col gap-4">
                                {category.items.map((item: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 text-gray-600 text-sm"
                                    >
                                        <div className="mt-1 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"/>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>

                {/* note */}
                <p className="text-center mt-24 text-gray-500 text-sm max-w-2xl mx-auto mt-6">
                    {t.note}
                </p>

            </div>

        </section>
    );
}
