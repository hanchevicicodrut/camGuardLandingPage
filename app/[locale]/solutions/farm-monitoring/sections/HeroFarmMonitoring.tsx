type Props = {
    dict: any;
};

export default function HeroFarmMonitoring({ dict }: Props) {

    const t = dict.farmMonitoring.hero;

    return (
        <section className="relative pt-32 pb-28 px-6 overflow-hidden">

            {/* background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white"/>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">


                {/* LEFT */}
                <div>

                    <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-8">
                        {t.title}
                    </h1>

                    <p className="text-xl text-gray-600 mb-10 max-w-xl">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">

                        <button
                            className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow hover:scale-[1.02] transition">
                            {t.primaryCTA}
                        </button>

                        <button
                            className="px-8 py-4 rounded-full border border-gray-300 font-medium hover:bg-gray-50 transition">
                            {t.secondaryCTA}
                        </button>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="bg-gray-100 rounded-2xl h-[420px] flex items-center justify-center text-gray-400">

                    Camera Monitoring Preview

                </div>

            </div>

        </section>
    );
}
