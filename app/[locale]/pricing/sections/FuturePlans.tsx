type Props = {
    dict: any;
};

export default function FuturePlans({ dict }: Props) {

    const t = dict.pricing.future;

    return (
        <section className="py-32 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl font-semibold mb-4">
                        {t.title}
                    </h2>

                    <p className="text-gray-600">
                        {t.subtitle}
                    </p>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-10">

                    {Object.values(t.plans).map((plan: any, i: number) => (

                        <div
                            key={i}
                            className="relative border border-gray-200 rounded-3xl p-10 bg-gray-50"
                        >

                            <div className="opacity-60">

                                <h3 className="text-2xl font-semibold mb-3">
                                    {plan.name}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {plan.devices}
                                </p>

                            </div>

                            <span
                                className="absolute top-6 right-6 text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
        {plan.label}
      </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
