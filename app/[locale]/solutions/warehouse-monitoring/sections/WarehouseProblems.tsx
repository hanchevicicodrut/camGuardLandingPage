type Props = {
    dict: any;
};

export default function WarehouseProblems({ dict }: Props) {

    const t = dict.warehouseMonitoring.problems;

    const items = [
        t.items.theft,
        t.items.unauthorized,
        t.items.accidents,
        t.items.blindSpots
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10  mt-16">

                    {items.map((item: any, i: number) => (

                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
                        >

                            <h3 className="font-semibold text-lg mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
