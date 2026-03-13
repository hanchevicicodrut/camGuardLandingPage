type Props = {
    dict: any;
};

export default function WarehouseCTA({ dict }: Props) {

    const t = dict.warehouseMonitoring.cta;

    return (
        <section className="py-32 px-6 bg-blue-600 text-white">

            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl font-semibold mb-6">
                    {t.title}
                </h2>

                <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
                    {t.subtitle}
                </p>

                <button className="px-8 py-4 rounded-full bg-white text-blue-600 font-medium shadow hover:scale-[1.02] transition">
                    {t.button}
                </button>

            </div>

        </section>
    );
}
