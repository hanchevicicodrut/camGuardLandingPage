type Props = {
    dict: any;
};

export default function HeroPricing({ dict }: Props) {

    const t = dict.pricing.hero;

    return (
        <section className="py-36 px-6">

            <div className="max-w-6xl mx-auto text-center">

                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm">
                    {t.badge}
                </div>

                {/* Title */}
                <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                    {t.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-14">
                    {t.subtitle}
                </p>

                {/* Value Points */}
                <div className="flex flex-wrap justify-center gap-8 text-gray-600 mb-12">

                    {Object.values(t.points).map((point: any, i: number) => (

                        <div key={i} className="flex items-center gap-2">

                            <div className="w-2 h-2 bg-blue-500 rounded-full"/>

                            {point}

                        </div>

                    ))}

                </div>

                {/* CTA */}
                <button
                    className="px-10 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-[1.02] transition">
                    {t.primaryCTA}
                </button>

            </div>

        </section>
    );
}
