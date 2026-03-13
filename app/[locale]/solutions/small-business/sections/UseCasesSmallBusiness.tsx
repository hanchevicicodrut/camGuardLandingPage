type Props = {
    dict: any;
};

export default function UseCasesSmallBusiness({ dict }: Props) {

    const t = dict.smallBusiness.useCases;

    const items = [
        t.items.retail,
        t.items.restaurant,
        t.items.warehouse,
        t.items.office,
        t.items.parking
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

                {/* Use cases */}
                <div className="grid md:grid-cols-2 gap-12 mt-16">

                    {items.map((item: any, i: number) => (

                        <div
                            key={i}
                            className="rounded-2xl border border-gray-100 bg-gray-50 p-10 hover:shadow-lg transition"
                        >

                            <h3 className="text-2xl font-semibold mb-4">
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
