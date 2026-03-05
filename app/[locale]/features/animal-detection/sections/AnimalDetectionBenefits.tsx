type Benefit = {
    icon: string;
    title: string;
    description: string;
};

type Props = {
    dict: any;
};

export default function AnimalDetectionBenefits({ dict }: Props) {

    const t = dict.animalDetection.benefits;

    return (
        <section className="py-28 px-6 bg-gray-50">

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

                {/* benefits grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {t.items.map((item: Benefit, i: number) => (
                        <div
                            key={i}
                            className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition"
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
