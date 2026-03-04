type Props = {
    dict: any;
};

export default function WhatIsPersonDetection({ dict }: Props) {
    return (
        <section className="py-28 px-6 bg-white">

            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-20">

                    <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                        {dict.title}
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {dict.description}
                    </p>

                </div>

                {/* FLOW */}
                <div className="grid md:grid-cols-3 gap-10 items-center">

                    {dict.cards.map((card: any, index: number) => (

                        <div
                            key={index}
                            className="relative p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition bg-white"
                        >

                            {/* ICON */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6 text-xl">
                                {card.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold mb-3">
                                {card.title}
                            </h3>

                            {/* TEXT */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {card.text}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
