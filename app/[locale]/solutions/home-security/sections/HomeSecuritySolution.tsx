"use client";

import { Brain, Bell, ScanSearch } from "lucide-react";

type Props = {
    dict: any;
};

export default function HomeSecuritySolution({ dict }: Props) {

    const t = dict.homeSecurity.solution;

    return (
        <section className="py-28 px-6 bg-gray-50">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <h2 className="text-4xl font-semibold mb-6">
                        {t.title}
                    </h2>

                    <p className="text-lg text-gray-600 mb-10 max-w-xl">
                        {t.subtitle}
                    </p>

                    <div className="space-y-8">

                        {/* Feature 1 */}
                        <div className="flex gap-4">

                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                <Brain className="w-6 h-6 text-blue-600" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    {t.features.ai.title}
                                </h3>

                                <p className="text-gray-600">
                                    {t.features.ai.description}
                                </p>
                            </div>

                        </div>


                        {/* Feature 2 */}
                        <div className="flex gap-4">

                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                <ScanSearch className="w-6 h-6 text-green-600" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    {t.features.detection.title}
                                </h3>

                                <p className="text-gray-600">
                                    {t.features.detection.description}
                                </p>
                            </div>

                        </div>


                        {/* Feature 3 */}
                        <div className="flex gap-4">

                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                                <Bell className="w-6 h-6 text-purple-600" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    {t.features.alerts.title}
                                </h3>

                                <p className="text-gray-600">
                                    {t.features.alerts.description}
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                {/* RIGHT VISUAL */}
                <div className="relative">

                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

                        <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                            {t.preview}
                        </div>

                        {/* detection overlays */}
                        <div className="absolute top-6 left-6 bg-white shadow-md rounded-lg px-3 py-1 text-sm border border-gray-100">
                            🚶 {t.labels.person}
                        </div>

                        <div className="absolute bottom-8 right-10 bg-white shadow-md rounded-lg px-3 py-1 text-sm border border-gray-100">
                            🚗 {t.labels.vehicle}
                        </div>

                        <div className="absolute top-1/2 left-10 bg-white shadow-md rounded-lg px-3 py-1 text-sm border border-gray-100">
                            🐕 {t.labels.animal}
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
