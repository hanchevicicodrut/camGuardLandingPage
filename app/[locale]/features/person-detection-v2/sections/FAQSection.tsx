"use client";
import { useState } from "react";

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);

    const items = [
        {
            q: "Does it require new hardware?",
            a: "No. It works with your existing IP cameras."
        },
        {
            q: "Is footage stored?",
            a: "Continuous recording is not stored unless configured."
        },
        {
            q: "Is it GDPR compliant?",
            a: "Yes. Processing follows strict data protection standards."
        }
    ];

    return (
        <section className="py-28 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-4xl font-semibold text-center mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {items.map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl border p-6">
                            <button
                                className="w-full text-left font-medium"
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                {item.q}
                            </button>
                            {open === i && (
                                <p className="mt-4 text-gray-600">{item.a}</p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
