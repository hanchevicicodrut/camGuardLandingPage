type UseCase = {
    icon: string;
    title: string;
    description: string;
};

type Props = {
    dict: any;
};

export default function AnimalDetectionUseCases({ dict }: Props) {

    const t = dict.animalDetection.useCases;

    return (
        <section className="py-28 px-6 bg-white">

            <div className="max-w-7xl mx-auto">

                {/* title */}
                <div className="text-center max-w-3xl mx-auto mb-20">

                    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        {t.title}
                    </h2>

                    <p className="text-lg text-gray-600">
                        {t.subtitle}
                    </p>

                </div>

                {/* cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {t.items.map((item: UseCase, i: number) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition bg-white"
                        >

                            <div className="text-4xl mb-5">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
