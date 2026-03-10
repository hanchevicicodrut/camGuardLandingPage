type Props = {
    dict: any;
};

export default function CarHero({ dict }: Props) {
    return (
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        {dict.title}
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-xl">
                        {dict.subtitle}
                    </p>

                    <div className="flex gap-4">
                        <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-[1.02] transition">
                            {dict.primaryCTA}
                        </button>

                        <button className="px-8 py-4 rounded-full border border-gray-300 font-medium hover:bg-gray-50 transition">
                            {dict.secondaryCTA}
                        </button>
                    </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative">
                    <div className="aspect-video rounded-2xl bg-gray-100 shadow-xl flex items-center justify-center text-gray-400">
                        Camera preview (car detection)
                    </div>

                    {/* Detection badge */}
                    <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl px-4 py-2 text-sm font-medium">
                        🚗 {dict.detectionLabel}
                    </div>
                </div>
            </div>
        </section>
    );
}
