type Props = {
    dict: any;
};

export default function HeroWarehouseMonitoring({ dict }: Props) {

    const t = dict.warehouseMonitoring.hero;

    return (
        <section className="relative pt-32 pb-28 px-6 overflow-hidden">

            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
                <div>

                    <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        {t.title}
                    </h1>

                    <p className="text-lg text-gray-600 mb-10 max-w-xl">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">

                        <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-[1.02] transition">
                            {t.primaryCTA}
                        </button>

                        <button className="px-8 py-4 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                            {t.secondaryCTA}
                        </button>

                    </div>

                    <div className="flex flex-col gap-3 text-sm text-gray-600">

                        <div>✓ {t.points.security}</div>
                        <div>✓ {t.points.operations}</div>
                        <div>✓ {t.points.alerts}</div>

                    </div>

                </div>

                {/* RIGHT VISUAL */}

                <div className="relative">

                    <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl flex items-center justify-center text-white text-sm">
                        Warehouse Camera Feed
                    </div>

                </div>

            </div>

        </section>
    );
}
