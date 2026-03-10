type Props = {
    dict: any;
};

export default function WhyVehicleDetection({ dict }: Props) {
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

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                        <div className="text-3xl mb-4">🚗</div>
                        <h3 className="text-xl font-semibold mb-3">
                            {dict.driveway.title}
                        </h3>
                        <p className="text-gray-600">
                            {dict.driveway.description}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                        <div className="text-3xl mb-4">🅿️</div>
                        <h3 className="text-xl font-semibold mb-3">
                            {dict.parking.title}
                        </h3>
                        <p className="text-gray-600">
                            {dict.parking.description}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                        <div className="text-3xl mb-4">🔔</div>
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
