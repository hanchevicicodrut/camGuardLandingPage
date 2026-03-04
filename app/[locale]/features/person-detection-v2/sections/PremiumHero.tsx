type Props = {
    dict: any;
};

export default function PremiumHero({ dict }: Props) {
    return (
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT TEXT */}
                <div>
                    <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        {dict.heroTitle}
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-xl">
                        {dict.heroSubtitle}
                    </p>

                    <div className="flex gap-4">
                        <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-[1.02] transition">
                            {dict.cta}
                        </button>
                    </div>
                </div>

                {/* RIGHT VIDEO PLACEHOLDER */}
                <div className="relative">
                    <div className="rounded-3xl bg-white shadow-2xl border border-gray-100 p-6">
                        <div className="h-[400px] rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                            Detection Demo Video Placeholder
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
