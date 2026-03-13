"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
    dict: any;
};

export default function WarehouseFAQ({ dict }: Props) {

    const t = dict.warehouseMonitoring.faq;

    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-28 px-6 bg-white">

            <div className="max-w-3xl mx-auto">

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-semibold">
                        {t.title}
                    </h2>

                </div>

                <div className="space-y-6">

                    {t.items.map((item: any, i: number) => {

                        const isOpen = open === i;

                        return (
                            <div
                                key={i}
                                className="p-6 rounded-xl bg-gray-50"
                            >

                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="flex justify-between items-center w-full text-left"
                                >

                  <span className="font-medium">
                    {item.question}
                  </span>

                                    <ChevronDown
                                        size={18}
                                        className={`transition ${isOpen ? "rotate-180" : ""}`}
                                    />

                                </button>

                                {isOpen && (

                                    <p className="mt-4 text-gray-600 text-sm">
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
