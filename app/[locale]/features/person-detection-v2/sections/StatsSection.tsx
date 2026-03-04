export default function StatsSection() {
    return (
        <section className="py-28 px-6 text-center">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">

                <div>
                    <div className="text-5xl font-bold text-blue-600 mb-4">70%</div>
                    <p className="text-gray-600">Fewer False Alerts</p>
                </div>

                <div>
                    <div className="text-5xl font-bold text-blue-600 mb-4">0</div>
                    <p className="text-gray-600">New Hardware Required</p>
                </div>

                <div>
                    <div className="text-5xl font-bold text-blue-600 mb-4">Minutes</div>
                    <p className="text-gray-600">To Activate</p>
                </div>

            </div>
        </section>
    );
}
