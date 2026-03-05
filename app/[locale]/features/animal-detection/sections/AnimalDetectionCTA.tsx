type Props = {
    dict: any;
};

export default function AnimalDetectionCTA({ dict }: Props) {

    const t = dict.animalDetection.cta;

    return (
        <section className="py-28 px-6 relative overflow-hidden">

            {/* background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                    {t.title}
                </h2>

                <p className="text-lg text-gray-600 mb-10">
                    {t.subtitle}
                </p>

                <div className="flex justify-center gap-4 flex-wrap">

                    <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-[1.02] transition">
                        {t.primaryButton}
                    </button>

                    <button className="px-8 py-4 rounded-full border border-gray-300 hover:bg-gray-50 transition">
                        {t.secondaryButton}
                    </button>

                </div>

            </div>

        </section>
    );
}
