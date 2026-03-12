"use client";

import { AlertTriangle, Clock, EyeOff } from "lucide-react";

type Props = {
    dict: any;
};

export default function HomeSecurityProblems({ dict }: Props) {

    const t = dict.homeSecurity.problems;

    return (
        <section className="py-28 px-6 bg-white">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-20 max-w-2xl mx-auto">

                    <h2 className="text-4xl font-semibold mb-6">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 text-lg">
                        {t.subtitle}
                    </p>

                </div>


                {/* PROBLEM CARDS */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* CARD 1 */}
                    <div className="group bg-gray-50 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition">

                        <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                            <EyeOff className="w-6 h-6 text-red-600" />
                        </div>

                        <h3 className="text-xl font-semibold mb-3">
                            {t.items.recording.title}
                        </h3>

                        <p className="text-gray-600">
                            {t.items.recording.description}
                        </p>

                    </div>


                    {/* CARD 2 */}
                    <div className="group bg-gray-50 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition">

                        <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-6">
                            <AlertTriangle className="w-6 h-6 text-yellow-600" />
                        </div>

                        <h3 className="text-xl font-semibold mb-3">
                            {t.items.falseAlerts.title}
                        </h3>

                        <p className="text-gray-600">
                            {t.items.falseAlerts.description}
                        </p>

                    </div>


                    {/* CARD 3 */}
                    <div className="group bg-gray-50 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition">

                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                            <Clock className="w-6 h-6 text-blue-600" />
                        </div>

                        <h3 className="text-xl font-semibold mb-3">
                            {t.items.missedEvents.title}
                        </h3>

                        <p className="text-gray-600">
                            {t.items.missedEvents.description}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}
