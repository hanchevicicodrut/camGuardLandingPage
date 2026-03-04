import Link from "next/link";

type Props = {
    dict: any;
};

export default function UseCases({ dict }: Props) {
    return (
        <section className="py-32 px-6 bg-gray-50">

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

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {dict.items.map((item: any, index: number) => (

                        <Link
                            key={index}
                            href={item.href}
                            className="group block p-10 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                        >

                            {/* icon */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 text-2xl mb-6">
                                {item.icon}
                            </div>

                            {/* title */}
                            <h3 className="text-lg font-semibold mb-3">
                                {item.title}
                            </h3>

                            {/* description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.text}
                            </p>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    );
}
