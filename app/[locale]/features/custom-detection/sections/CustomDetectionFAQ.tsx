"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
    dict: any;
};

export default function CustomDetectionFAQ({ dict }: Props) {
    const t = dict.customDetection.faq;
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-28 px-6 bg-white">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold mb-4">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 max-w-xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-6">

                    {t.items.map((item: any, i: number) => {

                        const isOpen = open === i;

                        return (
                            <div
                                key={i}
                                className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
                            >

                                {/* Question */}
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between px-8 py-6 text-left"
                                >
                  <span className="text-lg font-medium text-gray-900 pr-6">
                    {item.question}
                  </span>

                                    <ChevronDown
                                        size={22}
                                        className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {/* Answer */}
                                {isOpen && (
                                    <div className="px-8 pb-7 pt-2 text-gray-600 leading-relaxed">
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
