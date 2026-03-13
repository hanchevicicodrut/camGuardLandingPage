type Props = {
    dict: any;
};

export default function WarehouseUseCases({ dict }: Props) {

    const t = dict.warehouseMonitoring.useCases;

    const items = [
        t.items.intrusion,
        t.items.forklift,
        t.items.loading,
        t.items.restricted
    ];

    return (
        <section className="py-28 px-6 bg-gray-50">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-24">

                    <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">
                        {t.title}
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-10  mt-16">

                    {items.map((item: any, i: number) => (

                        <div
                            key={i}
                            className="p-10 bg-white rounded-2xl shadow-sm"
                        >

                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
