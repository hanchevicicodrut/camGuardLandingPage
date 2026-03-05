type AnimalItem = {
    icon: string;
    name: string;
};

type Props = {
    dict: any;
};

export default function DetectableAnimals({ dict }: Props) {

    const t = dict.animalDetection.detectableAnimals;

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

                {/* animals grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

                    {t.animals.map((animal: AnimalItem, i: number) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition"
                        >
                            <div className="text-4xl mb-3">
                                {animal.icon}
                            </div>

                            <span className="text-sm font-medium text-gray-700">
                                {animal.name}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
