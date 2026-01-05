"use client";

import {event} from "@/lib/ga";

type ActionType = "download" | "scroll";

type Props = {
    label: string;
    action : ActionType;
    href? : string;
    className: string;
    children: React.ReactNode
}

export default function TrackedButton({ label, action, href, className, children} : Props) {
    const handleClick = () => {
        event({
            action: "cta_click",
            category: "CTA",
            label,
        });

        if (action === "download") {
            const userAgent = navigator.userAgent || navigator.vendor;

            if (/android/i.test(userAgent)) {
                window.location.href =
                    "https://play.google.com/store/apps/details?id=com.camGuard.app";
            } else if (/iPad|iPhone|iPod/.test(userAgent)) {
                window.location.href =
                    "https://apps.apple.com/app/idXXXXXXXXX";
            } else {
                window.location.href = "/download";
            }
        }

        if (action === "scroll" && href) {
            window.location.href = href;
        }
    };
    return (
        <button className={className}
                onClick={handleClick}>
            {children}
        </button>
    );
}
