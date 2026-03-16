"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
    dict: any;
};

export default function PricingFAQ({ dict }: Props) {

    const t = dict.pricing.faq;
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-28 px-6 bg-gray-50">

            <div className="max-w-3xl mx-auto">

                <div className="text-center mb-20">

                    <h2 className="text-4xl font-semibold mb-4">
                        {t.title}
                    </h2>

                    <p className="text-gray-600">
                        {t.subtitle}
                    </p>

                </div>

                <div className="space-y-6">

                    {Object.values(t.items).map((item: any, i: number) => {

                        const isOpen = open === i;

                        return (

                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-sm"
                            >

                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex justify-between items-center p-6 text-left"
                                >

                  <span className="font-medium">
                    {item.q}
                  </span>

                                    <ChevronDown
                                        className={`transition ${isOpen ? "rotate-180" : ""}`}
                                    />

                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-6 text-gray-600">
                                        {item.a}
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
