type Animal = {
    icon: string;
    title: string;
    description: string;
};

type Props = {
    dict: {
        animalDetection: {
            selectAnimals: {
                title: string;
                subtitle: string;
                animals: Animal[];
            };
        };
    };
};

export default function SelectAnimalsFeature({ dict }: Props) {

    const t = dict.animalDetection.selectAnimals;

    return (
        <section className="py-28 px-6 relative overflow-hidden">

            <div className="max-w-7xl mx-auto">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        {t.title}
                    </h2>

                    <p className="text-lg text-gray-600">
                        {t.subtitle}
                    </p>
                </div>

                {/* cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {t.animals.map((animal: Animal, i: number) => (
                        <div
                            key={i}
                            className="group p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >

                            <div className="text-4xl mb-6">
                                {animal.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {animal.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {animal.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
