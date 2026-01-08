import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://camguard.app/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://camguard.app/ro",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://camguard.app/download",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://camguard.app/ro/download",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
