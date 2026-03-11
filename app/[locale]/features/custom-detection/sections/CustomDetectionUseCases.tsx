type Props = {
    dict: any;
};

export default function CustomDetectionUseCases({ dict }: Props) {

    const t = dict.customDetection.useCases;

    return (
        <section className="py-32 px-6 bg-gray-50">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl font-semibold mb-4">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {t.items.map((item: any, i: number) => (

                        <div
                            key={i}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
                        >

                            <div className="text-3xl mb-4">
                                {item.icon}
                            </div>

                            <h3 className="font-semibold text-lg mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-600">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
