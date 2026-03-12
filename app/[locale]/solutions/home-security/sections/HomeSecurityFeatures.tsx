import {
    Shield,
    Car,
    PawPrint,
    Bell,
    Camera,
    Lock
} from "lucide-react";

type Props = {
    dict: any;
};

export default function HomeSecurityFeatures({ dict }: Props) {

    const t = dict.homeSecurity.features;

    const features = [
        { icon: Shield, data: t.items.person },
        { icon: Car, data: t.items.vehicle },
        { icon: PawPrint, data: t.items.animals },
        { icon: Bell, data: t.items.notifications },
        { icon: Camera, data: t.items.cameras },
        { icon: Lock, data: t.items.privacy }
    ];

    return (
        <section className="py-32 px-6 bg-white">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        {t.title}
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>

                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {features.map((feature, i) => {

                        const Icon = feature.icon;

                        return (
                            <div
                                key={i}
                                className="p-8 rounded-2xl bg-gray-50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl"
                            >

                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-5">
                                    <Icon size={22} />
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {feature.data.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {feature.data.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
