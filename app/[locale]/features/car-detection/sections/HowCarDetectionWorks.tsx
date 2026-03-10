type Props = {
    dict: any;
};

export default function HowCarDetectionWorks({ dict }: Props) {
    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                        {dict.title}
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {dict.subtitle}
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-10">

                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <div className="text-sm font-semibold text-blue-600 mb-3">01</div>
                        <h3 className="text-xl font-semibold mb-3">
                            {dict.camera.title}
                        </h3>
                        <p className="text-gray-600">
                            {dict.camera.description}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <div className="text-sm font-semibold text-blue-600 mb-3">02</div>
                        <h3 className="text-xl font-semibold mb-3">
                            {dict.ai.title}
                        </h3>
                        <p className="text-gray-600">
                            {dict.ai.description}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <div className="text-sm font-semibold text-blue-600 mb-3">03</div>
                        <h3 className="text-xl font-semibold mb-3">
                            {dict.alerts.title}
                        </h3>
                        <p className="text-gray-600">
                            {dict.alerts.description}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
