import en from "./dictionaries/en";
import ro from "./dictionaries/ro";

export async function getDictionary(locale: string) {
    switch (locale) {
        case "ro":
            return ro;
        default:
            return en;
    }
}
