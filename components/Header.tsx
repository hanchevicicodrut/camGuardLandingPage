"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isRO = pathname.startsWith("/ro");

    const enPath = pathname.replace(/^\/ro/, "") || "/";
    const roPath = isRO ? pathname : `/ro${pathname}`;

    return (
        <header className="h-16 px-6 flex items-center justify-between">
            {/* Logo */}
            <Link href={isRO ? "/ro" : "/"} className="flex items-center">
                <img
                    src="/logo.png"
                    alt="CamGuard"
                    className="h-8 w-auto"
                />
            </Link>

            {/* Language switcher */}
            <nav className="text-sm font-medium flex gap-2">
                <Link href={enPath} className={!isRO ? "underline font-semibold" : ""}>
                    EN
                </Link>
                |
                <Link href={roPath} className={isRO ? "underline font-semibold" : ""}>
                    RO
                </Link>
            </nav>
        </header>
    );
}
