"use client";

import { useState } from "react";

type Props = {
    dict: any;
};

export default function CarDetectionFAQ({ dict }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const items = [dict.q1, dict.q2, dict.q3, dict.q4];

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">

                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold">
                        {dict.title}
                    </h2>
                </div>

                {/* FAQ items */}
                <div className="space-y-6">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between px-8 py-6 text-left"
                                >
                  <span className="text-lg font-medium">
                    {item.question}
                  </span>

                                    <span
                                        className={`text-gray-400 text-2xl transition-transform ${
                                            isOpen ? "rotate-45" : ""
                                        }`}
                                    >
                    +
                  </span>
                                </button>

                                {isOpen && (
                                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                                        {item.answer}
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
