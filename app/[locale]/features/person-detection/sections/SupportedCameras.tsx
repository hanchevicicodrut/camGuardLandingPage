type Props = {
    dict: any;
};

export default function SupportedCameras({ dict }: Props) {
    return (
        <section className="py-32 px-6 bg-white">

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

                {/* CAMERA GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                    {dict.items.map((item: any, index: number) => (

                        <div
                            key={index}
                            className="flex items-center justify-center p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition duration-300"
                        >

              <span className="font-medium text-gray-700">
                {item}
              </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
