type Props = {
    dict: any;
};

export default function HeroSmallBusiness({ dict }: Props) {

    const t = dict.smallBusiness.hero;

    return (
        <section className="relative pt-32 pb-28 px-6 overflow-hidden">

            {/* background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT TEXT */}
                <div>

                    <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        {t.title}
                    </h1>

                    <p className="text-lg text-gray-600 mb-10 max-w-xl">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">

                        <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-[1.02] transition">
                            {t.primaryCTA}
                        </button>

                        <button className="px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition">
                            {t.secondaryCTA}
                        </button>

                    </div>

                </div>

                {/* RIGHT VISUAL */}
                <div className="relative">

                    <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-6">

                        <div className="aspect-video rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                            Camera feed preview
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
