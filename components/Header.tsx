"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
    locale: string;
};

export default function Header({ locale }: HeaderProps) {
    const basePath = `/${locale}`;


    const pathname = usePathname();

    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

    const enPath = `/en${pathWithoutLocale}`;
    const roPath = `/ro${pathWithoutLocale}`;

    return (
        <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="max-w-[1200px] mx-auto h-[72px] px-8 flex items-center justify-between">

                {/* Logo */}
                <Link href={basePath || "/"} className="flex items-center gap-2 group">
                    <img src="/logo.png" alt="CamGuard" className="h-9 w-auto transition-transform duration-300 group-hover:scale-105" />
                    <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        CamGuard
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-700">

                    <NavLink href={basePath || "/"}>Home</NavLink>

                    {/* FEATURES */}
                    <div className="relative group py-4">
                        <button className="flex items-center gap-1 hover:text-blue-600 transition-all duration-200">
                            Features
                            <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▾</span>
                        </button>

                        <Dropdown>
                            <DropdownLink href={`${basePath}/features/person-detection`}>
                                Person Detection
                            </DropdownLink>
                            <DropdownLink href={`${basePath}/features/animal-detection`}>
                                Animal Detection
                            </DropdownLink>
                            <DropdownLink href={`${basePath}/features/vehicle-detection`}>
                                Vehicle Detection
                            </DropdownLink>
                            <DropdownLink href={`${basePath}/features/custom-detection`}>
                                Custom Detection
                            </DropdownLink>
                        </Dropdown>
                    </div>

                    {/* SOLUTIONS */}
                    <div className="relative group py-4">
                        <button className="flex items-center gap-1 hover:text-blue-600 transition-all duration-200">
                            Solutions
                            <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▾</span>
                        </button>

                        <Dropdown>
                            <DropdownLink href={`${basePath}/solutions/home-security`}>
                                Home Security
                            </DropdownLink>
                            <DropdownLink href={`${basePath}/solutions/small-business`}>
                                Small Businesses
                            </DropdownLink>
                            <DropdownLink href={`${basePath}/solutions/warehouse-monitoring`}>
                                Warehouses
                            </DropdownLink>
                            <DropdownLink href={`${basePath}/solutions/farm-monitoring`}>
                                Outdoor & Farm
                            </DropdownLink>
                        </Dropdown>
                    </div>

                    <NavLink href={`${basePath}/pricing`}>
                        Pricing
                    </NavLink>

                    <NavLink href={`${basePath}/download`}>
                        Download
                    </NavLink>
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-6">

                    {/* Language Switcher */}
                    {/* Language Switcher */}
                    <div className="flex items-center bg-gray-100 rounded-full p-1 text-sm">
                        <Link
                            href={enPath}
                            className={`px-3 py-1 rounded-full transition-all ${
                                locale === "en"
                                    ? "bg-white shadow text-black font-semibold"
                                    : "text-gray-500 hover:text-black"
                            }`}
                        >
                            EN
                        </Link>
                        <Link
                            href={roPath}
                            className={`px-3 py-1 rounded-full transition-all ${
                                locale === "ro"
                                    ? "bg-white shadow text-black font-semibold"
                                    : "text-gray-500 hover:text-black"
                            }`}
                        >
                            RO
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href={`${basePath}/download`}
                        className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full
                        bg-gradient-to-r from-blue-600 to-indigo-600
                        text-white text-sm font-semibold
                        shadow-lg shadow-blue-500/20
                        hover:shadow-xl hover:shadow-blue-500/30
                        hover:scale-[1.02]
                        active:scale-[0.98]
                        transition-all duration-200"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

/* ---------- Components ---------- */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="relative transition-colors duration-200 hover:text-blue-600
            after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0
            after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600
            after:transition-all after:duration-300
            hover:after:w-full"
        >
            {children}
        </Link>
    );
}

function Dropdown({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="
                absolute left-0 top-full
                w-64 bg-white/80 backdrop-blur-xl
                rounded-2xl border border-gray-100
                shadow-[0_20px_60px_rgb(0,0,0,0.08)]
                p-4 flex flex-col gap-1
                opacity-0 translate-y-3 pointer-events-none
                transition-all duration-200
                group-hover:opacity-100
                group-hover:translate-y-0
                group-hover:pointer-events-auto
            "
        >
            {children}
        </div>
    );
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="px-3 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600
            transition-all duration-150"
        >
            {children}
        </Link>
    );
}
