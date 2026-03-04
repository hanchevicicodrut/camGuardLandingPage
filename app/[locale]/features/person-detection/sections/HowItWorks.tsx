type Props = {
    dict: any;
};

export default function HowItWorks({ dict }: Props) {
    return (
        <section className="py-32 px-6 bg-gray-50">

            <div className="max-w-5xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-20">

                    <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                        {dict.title}
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {dict.description}
                    </p>

                </div>

                {/* TIMELINE */}
                <div className="relative">

                    {/* vertical line */}
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

                    <div className="space-y-12">

                        {dict.steps.map((step: any, index: number) => (

                            <div key={index} className="relative flex items-start gap-6">

                                {/* step circle */}
                                <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold shadow-md">
                                    {index + 1}
                                </div>

                                {/* content */}
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition w-full">

                                    <h3 className="text-lg font-semibold mb-2">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.text}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}
