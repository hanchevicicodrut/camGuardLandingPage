// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "CamGuard",
    description: "Smart camera monitoring app",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html>
        <head>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-EET0NVE6SF"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EET0NVE6SF');
          `}
            </Script>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
