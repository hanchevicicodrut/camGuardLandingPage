type Props = {
    dict: any;
};

export default function WhatIsCustomDetection({ dict }: Props) {

    const t = dict.customDetection.whatIs;

    return (
        <section className="py-32 px-6 bg-gray-50">

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* TEXT */}
                <div>

                    <h2 className="text-4xl font-semibold mb-6">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 text-lg mb-6">
                        {t.description}
                    </p>

                    <p className="text-gray-600">
                        {t.description2}
                    </p>

                </div>

                {/* VISUAL */}
                <div className="rounded-2xl bg-white shadow-lg p-8">

                    <div className="aspect-video rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                        {t.previewTitle}
                    </div>

                    <div className="mt-6 space-y-2 text-sm text-gray-600">

                        <div>🚶 {t.examples.person}</div>
                        <div>🚗 {t.examples.vehicle}</div>
                        <div>🐶 {t.examples.animal}</div>
                        <div>📦 {t.examples.object}</div>

                    </div>

                </div>

            </div>

        </section>
    );
}
