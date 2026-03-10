type Props = {
    dict: any;
};

export default function WhyChooseCamGuard({ dict }: Props) {
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

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <div className="text-3xl mb-4">🤖</div>
                        <h3 className="font-semibold mb-2">{dict.ai.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {dict.ai.description}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <div className="text-3xl mb-4">⚡</div>
                        <h3 className="font-semibold mb-2">{dict.speed.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {dict.speed.description}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <div className="text-3xl mb-4">📱</div>
                        <h3 className="font-semibold mb-2">{dict.mobile.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {dict.mobile.description}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <div className="text-3xl mb-4">🔒</div>
                        <h3 className="font-semibold mb-2">{dict.security.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {dict.security.description}
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
