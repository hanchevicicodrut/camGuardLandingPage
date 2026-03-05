type FAQ = {
    question: string;
    answer: string;
};

type Props = {
    dict: any;
};

export default function AnimalDetectionFAQ({ dict }: Props) {

    const t = dict.animalDetection.faq;

    return (
        <section className="py-28 px-6 bg-white">

            <div className="max-w-4xl mx-auto">

                {/* title */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        {t.title}
                    </h2>

                    <p className="text-lg text-gray-600">
                        {t.subtitle}
                    </p>

                </div>

                {/* faq list */}
                <div className="space-y-6">

                    {t.items.map((item: FAQ, i: number) => (
                        <div
                            key={i}
                            className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition"
                        >

                            <h3 className="font-semibold text-lg mb-2">
                                {item.question}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.answer}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
