declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export const GA_MEASUREMENT_ID = "G-EET0NVE6SF";

export const event = ({
                          action,
                          category,
                          label,
                          value,
                      }: {
    action: string;
    category: string;
    label: string;
    value?: number;
}) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value,
        });
    }
};
