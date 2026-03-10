"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
    dict: any;
};

export default function ObjectsDetectionCategories({ dict }: Props) {

    const t = dict.customDetection.objects;
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-32 px-6 bg-white">

            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl font-semibold mb-4">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 max-w-xl mx-auto">
                        {t.subtitle}
                    </p>

                </div>

                {/* Categories */}
                <div className="space-y-6">

                    {t.categories.map((category: any, i: number) => {

                        const isOpen = open === i;

                        return (

                            <div
                                key={i}
                                className="rounded-2xl bg-white shadow-sm hover:shadow-md transition"
                            >

                                {/* Header */}
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between px-8 py-6 text-left"
                                >

                                    <div>

                                        <h3 className="text-lg font-medium text-gray-900">
                                            {category.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            {category.description}
                                        </p>

                                    </div>

                                    <ChevronDown
                                        className={`transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                        size={20}
                                    />

                                </button>

                                {/* Content */}
                                {isOpen && (

                                    <div className="px-8 pb-8">

                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                                            {category.objects.map((obj: string, j: number) => (

                                                <div
                                                    key={j}
                                                    className="px-4 py-2 rounded-lg bg-gray-50 text-sm text-gray-700 text-center hover:bg-blue-50 hover:text-blue-700 transition"
                                                >
                                                    {obj}
                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                )}

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}
