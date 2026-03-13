type Props = {
    dict: any;
};

export default function WarehouseDetectionTypes({ dict }: Props) {

    const t = dict.warehouseMonitoring.detectionTypes;

    const categories = [
        t.categories.people,
        t.categories.forklifts,
        t.categories.vehicles,
        t.categories.animals
    ];

    return (
        <section className="py-28 px-6 bg-white">

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

                    {categories.map((cat: any, i: number) => (

                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition"
                        >

                            <h3 className="font-semibold text-lg mb-3">
                                {cat.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {cat.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
