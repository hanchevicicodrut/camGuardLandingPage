import { Check } from "lucide-react";

type Props = {
    dict: any;
};

export default function PricingPlans({ dict }: Props) {

    const t = dict.pricing.plans;
    const features = Object.values(t.free.features);

    return (
        <section className="py-28 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl font-semibold mb-4">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>

                </div>

                {/* Pricing Grid */}
                <div className="flex justify-center">

                    <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 p-12 max-w-xl w-full">

                        {/* Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">

              <span className="px-4 py-1 text-sm bg-blue-600 text-white rounded-full shadow">
                {t.free.badge}
              </span>

                        </div>

                        {/* Plan */}
                        <div className="text-center mb-10">

                            <h3 className="text-3xl font-semibold mb-2">
                                {t.free.name}
                            </h3>

                            <p className="text-gray-500 mb-6">
                                {t.free.devices}
                            </p>

                            <div className="text-5xl font-semibold">

                                {t.free.price}

                                <span className="text-lg text-gray-500 ml-1">
                  {t.free.period}
                </span>

                            </div>

                        </div>

                        {/* Features */}
                        <div className="space-y-4 mb-10">

                            {features.map((feature: any, i: number) => (

                                <div key={i} className="flex items-center gap-3">

                                    <Check size={18} className="text-blue-600"/>

                                    <span className="text-gray-700">
                    {feature}
                  </span>

                                </div>

                            ))}

                        </div>

                        {/* CTA */}
                        <div className="text-center">

                            <button className="w-full py-4 rounded-full bg-blue-600 text-white font-medium shadow hover:scale-[1.02] transition">
                                {t.free.button}
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
