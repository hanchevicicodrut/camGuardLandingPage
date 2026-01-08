"use client";

export default function WaitlistRo() {
    return (
        <section
            id="waitlist"
            className="px-6 py-24 bg-gray-50 text-center"
        >
            <h2 className="text-3xl font-bold text-gray-900">
                Obține Acces Anticipat la CamGuard
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                Înscrie-te pe lista de așteptare și fii printre primii care au acces la
                funcționalități noi, planuri premium și actualizări timpurii.
            </p>

            <form
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="email"
                    required
                    placeholder="Introdu adresa de email"
                    className="px-5 py-3 rounded-xl border border-gray-300 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
                >
                    Alătură-te Listei de Așteptare
                </button>
            </form>

            <p className="mt-4 text-sm text-gray-500">
                Fără spam. Te poți dezabona oricând.
            </p>
        </section>
    );
}
