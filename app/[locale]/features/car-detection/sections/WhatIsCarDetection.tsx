type Props = {
    dict: any;
};

export default function WhatIsCarDetection({ dict }: Props) {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                    {dict.title}
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                    {dict.description}
                </p>

            </div>
        </section>
    );
}
