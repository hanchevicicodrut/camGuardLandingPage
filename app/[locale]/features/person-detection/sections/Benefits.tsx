type Props = {
    dict: any;
};

export default function Benefits({ dict }: Props) {
    return (
        <section className="relative py-32 px-6 overflow-hidden">

            {/* background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/40 to-white" />

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                        {dict.title}
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {dict.description}
                    </p>
                </div>

                {/* BENEFITS GRID */}
                <div className="grid md:grid-cols-3 gap-10">

                    {dict.items.map((item: any, index: number) => (

                        <div
                            key={index}
                            className="group p-10 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                        >

                            {/* icon */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 text-2xl mb-6">
                                {item.icon}
                            </div>

                            {/* title */}
                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            {/* text */}
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.text}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
