type Props = {
    dict: any;
};

export default function SmartVehicleAlerts({ dict }: Props) {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                        {dict.title}
                    </h2>

                    <p className="text-lg text-gray-600 mb-8">
                        {dict.description}
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-blue-600">✔</span>
                            <span>{dict.feature1}</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-blue-600">✔</span>
                            <span>{dict.feature2}</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-blue-600">✔</span>
                            <span>{dict.feature3}</span>
                        </li>
                    </ul>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative">
                    <div className="aspect-video rounded-2xl bg-gray-100 shadow-lg flex items-center justify-center text-gray-400">
                        Notification preview
                    </div>

                    <div className="absolute bottom-6 right-6 bg-white shadow-lg rounded-xl px-4 py-2 text-sm font-medium">
                        🚗 {dict.notificationLabel}
                    </div>
                </div>

            </div>
        </section>
    );
}
