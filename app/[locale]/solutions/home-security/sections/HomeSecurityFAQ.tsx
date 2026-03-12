"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
    dict: any;
};

export default function HomeSecurityFAQ({ dict }: Props) {

    const t = dict.homeSecurity.faq;
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-40 px-6 bg-white mt-16 mb-16">

            <div className="max-w-4xl mx-auto">

                {/* header */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
                        {t.title}
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>

                </div>

                {/* faq items */}
                <div className="space-y-6">

                    {t.items.map((item: any, i: number) => {

                        const isOpen = open === i;

                        return (
                            <div
                                key={i}
                                className="bg-gray-50 rounded-2xl overflow-hidden"
                            >

                                {/* question */}
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >

                  <span className="font-medium text-lg">
                    {item.q}
                  </span>

                                    <ChevronDown
                                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                                    />

                                </button>

                                {/* answer */}
                                {isOpen && (

                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
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
