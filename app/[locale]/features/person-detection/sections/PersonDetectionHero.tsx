type Props = {
    dict: any;
};

export default function PersonDetectionHero({ dict }: Props) {
    return (
        <section className="relative pt-36 pb-28 px-6 overflow-hidden">

            {/* background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

            {/* background glow */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-200/30 blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        {dict.heroTitle}
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-xl">
                        {dict.heroSubtitle}
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 mb-10">
                        <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-[1.03] transition">
                            {dict.ctaPrimary}
                        </button>

                        <button className="px-8 py-4 rounded-full border border-gray-300 hover:bg-gray-50 transition">
                            {dict.ctaSecondary}
                        </button>
                    </div>

                    {/* trust points */}
                    <div className="flex flex-col gap-2 text-gray-600 text-sm">

                        <div className="flex items-center gap-2">
                            <span className="text-blue-600">✔</span>
                            Reduce false alerts with AI filtering
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-blue-600">✔</span>
                            Instant notifications when a person is detected
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-blue-600">✔</span>
                            Works with most IP security cameras
                        </div>

                    </div>

                </div>

                {/* RIGHT VISUAL */}
                <div className="relative">

                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">

                        <img
                            src="/person-detection-preview.png"
                            alt="AI person detection security camera"
                            className="w-full"
                        />

                    </div>

                    {/* floating badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg px-6 py-4 border border-gray-100">
                        <div className="text-sm text-gray-500">Detection accuracy</div>
                        <div className="text-xl font-semibold">95%+</div>
                    </div>

                </div>

            </div>
        </section>
    );
}
