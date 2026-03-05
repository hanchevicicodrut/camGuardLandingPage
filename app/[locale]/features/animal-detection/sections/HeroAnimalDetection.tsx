type Props = {
    dict: any;
};

export default function HeroAnimalDetection({ dict }: Props) {

    const t = dict.animalDetection.hero;

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

                    <p className="text-lg text-gray-600 mb-8 max-w-xl">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">

                        <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-[1.02] transition">
                            {t.ctaPrimary}
                        </button>

                        <button className="px-8 py-4 rounded-full border border-gray-300 hover:bg-gray-50 transition">
                            {t.ctaSecondary}
                        </button>

                    </div>

                    {/* trust indicators */}
                    <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-500">
                        {t.trust.map((item: string, i: number) => (
                            <span key={i}>{item}</span>
                        ))}
                    </div>

                </div>

                {/* RIGHT VISUAL */}
                <div className="relative">

                    <div className="rounded-2xl bg-white shadow-xl border border-gray-100 p-6">

                        <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
                            Camera Preview
                        </div>

                        <div className="mt-4 space-y-2 text-sm text-gray-600">
                            <div>🐱 {t.preview.cat}</div>
                            <div>🐶 {t.preview.dog}</div>
                            <div>🦌 {t.preview.wildlife}</div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
