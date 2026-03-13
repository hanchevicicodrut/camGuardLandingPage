"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
    dict: any;
};

export default function FAQSmallBusiness({ dict }: Props) {

    const t = dict.smallBusiness.faq;
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-28 px-6 bg-white">

            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
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
                                className="bg-gray-50 rounded-2xl p-6 transition"
                            >

                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between text-left"
                                >

                  <span className="text-lg font-medium">
                    {item.question}
                  </span>

                                    <ChevronDown
                                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                                        size={20}
                                    />

                                </button>

                                {isOpen && (
                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {item.answer}
                                    </p>
                                )}

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
