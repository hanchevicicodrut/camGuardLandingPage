type Props = {
    locale: string;
};

export default function UpgradePositioningSection({ locale }: Props) {
    const isRO = locale === "ro";

    return (
        <section className="py-28 px-6">
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-4xl font-semibold mb-8">
                    {isRO
                        ? "Upgrade inteligent pentru sistemele CCTV existente"
                        : "Smart Upgrade for Existing CCTV Systems"}
                </h2>

                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    {isRO
                        ? "Majoritatea sistemelor CCTV din Romania folosesc detectie clasica de miscare. CamGuard adauga inteligenta AI fara echipamente noi si fara proiecte IT complexe."
                        : "Most CCTV systems rely on basic motion detection. CamGuard adds AI intelligence without new hardware or complex IT projects."}
                </p>

            </div>
        </section>
    );
}
