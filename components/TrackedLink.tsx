"use client";

import {event} from "@/lib/ga"

type Props = {
    href: string;
    label: string;
    className?: string;
    children: React.ReactNode
}

export default function TrackedLink({href, label, className, children}: Props) {
    return (
        <a href={href}
           className={className}
           onClick={() =>
               event({
                   action: "cta_click",
                   category: "CTA",
                   label
               })}>
            {children}
        </a>)
};


