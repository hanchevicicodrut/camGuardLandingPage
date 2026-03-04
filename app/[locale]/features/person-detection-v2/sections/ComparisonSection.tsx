export default function ComparisonSection() {
    return (
        <section className="py-28 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-semibold text-center mb-16">
                    Motion Detection vs AI Person Detection
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                        <tr className="border-b">
                            <th className="py-4">Feature</th>
                            <th className="py-4">Classic Motion</th>
                            <th className="py-4">CamGuard AI</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-600">
                        <tr className="border-b">
                            <td className="py-4">False Alerts</td>
                            <td className="py-4">Very frequent</td>
                            <td className="py-4 text-blue-600 font-medium">Significantly reduced</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-4">Detects Real People</td>
                            <td className="py-4">No</td>
                            <td className="py-4 text-blue-600 font-medium">Yes</td>
                        </tr>
                        <tr>
                            <td className="py-4">New Hardware</td>
                            <td className="py-4">No</td>
                            <td className="py-4 text-blue-600 font-medium">No</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}
