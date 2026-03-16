type Props = {
    dict: any;
};

export default function FarmUseCases({ dict }: Props) {

    const t = dict.farmMonitoring.useCases;

    const items = [
        t.perimeter,
        t.livestock,
        t.equipment,
        t.remote
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

                <div className="grid md:grid-cols-2 gap-12 mt-16">

                    {items.map((item: any, i: number) => (

                        <div key={i} className="p-10 bg-gray-50 rounded-2xl">

                            <h3 className="text-2xl font-semibold mb-4">
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
