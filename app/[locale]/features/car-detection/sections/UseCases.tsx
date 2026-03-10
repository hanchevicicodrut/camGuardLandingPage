type Props = {
    dict: any;
};

export default function CarDetectionUseCases({ dict }: Props) {
    return (
        <section className="py-24 px-6 bg-white">
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

                {/* Use cases */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
                        <div className="text-3xl mb-4">🏠</div>
                        <h3 className="font-semibold mb-2">{dict.driveway.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {dict.driveway.description}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
                        <div className="text-3xl mb-4">🅿️</div>
                        <h3 className="font-semibold mb-2">{dict.parking.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {dict.parking.description}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
                        <div className="text-3xl mb-4">🏢</div>
                        <h3 className="font-semibold mb-2">{dict.business.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {dict.business.description}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
                        <div className="text-3xl mb-4">🚪</div>
                        <h3 className="font-semibold mb-2">{dict.garage.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {dict.garage.description}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
