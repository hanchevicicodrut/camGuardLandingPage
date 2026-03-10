"use client";

import { useState } from "react";

type Props = {
    dict: any;
};

export default function ObjectsDetectionCategories({ dict }: Props) {

    const t = dict.customDetection.objects;

    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-28 px-6 bg-white">

            <div className="max-w-6xl mx-auto">

                {/* title */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl font-semibold mb-4">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>

                </div>

                {/* categories */}
                <div className="space-y-4">

                    {t.categories.map((category: any, i: number) => {

                        const isOpen = open === i;

                        return (
                            <div
                                key={i}
                                className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                            >

                                {/* header */}
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                                >

                                    <div>

                                        <h3 className="text-lg font-medium">
                                            {category.title}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            {category.description}
                                        </p>

                                    </div>

                                    <span className="text-gray-400 text-xl">
                                        {isOpen ? "−" : "+"}
                                    </span>

                                </button>

                                {/* objects */}
                                {isOpen && (
                                    <div className="px-6 pb-6">

                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                                            {category.objects.map((obj: string, j: number) => (
                                                <div
                                                    key={j}
                                                    className="px-4 py-2 rounded-full bg-gray-50 text-sm text-gray-700 border border-gray-200"
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
