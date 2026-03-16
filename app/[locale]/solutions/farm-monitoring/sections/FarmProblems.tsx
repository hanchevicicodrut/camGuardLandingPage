type Props = {
    dict: any;
};

export default function FarmProblems({ dict }: Props) {

    const t = dict.farmMonitoring.problems;

    const items = [
        t.largeAreas,
        t.nightActivity,
        t.wildAnimals,
        t.equipmentTheft
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

                    {items.map((item: any, i: number) => (

                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-gray-50"
                        >

                            <h3 className="text-xl font-semibold mb-4">
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
