"use client";

import { Shield, Bell, Camera } from "lucide-react";

type Props = {
    dict: any;
};

export default function HeroHomeSecurity({ dict }: Props) {

    const t = dict.homeSecurity.hero;

    return (
        <section className="relative pt-32 pb-28 px-6 overflow-hidden">

            {/* background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div>

                    <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        {t.title}
                    </h1>

                    <p className="text-lg text-gray-600 max-w-xl mb-8">
                        {t.subtitle}
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 mb-10">

                        <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-[1.03] transition">
                            {t.primaryCTA}
                        </button>

                        <button className="px-8 py-4 rounded-full bg-white border border-gray-200 font-medium hover:bg-gray-50 transition">
                            {t.secondaryCTA}
                        </button>

                    </div>

                    {/* TRUST FEATURES */}
                    <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">

                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-blue-600" />
                            {t.points.security}
                        </div>

                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-blue-600" />
                            {t.points.alerts}
                        </div>

                        <div className="flex items-center gap-3">
                            <Camera className="w-5 h-5 text-blue-600" />
                            {t.points.cameras}
                        </div>

                    </div>

                </div>


                {/* RIGHT SIDE VISUAL */}
                <div className="relative">

                    <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">

                        {/* fake camera preview */}
                        <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 text-sm">
                            {t.preview}
                        </div>

                        {/* detection badges */}
                        <div className="absolute -top-5 -left-5 bg-white shadow-md rounded-xl px-4 py-2 text-sm border border-gray-100">
                            🚶 {t.badges.person}
                        </div>

                        <div className="absolute -bottom-5 right-6 bg-white shadow-md rounded-xl px-4 py-2 text-sm border border-gray-100">
                            🚗 {t.badges.vehicle}
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
