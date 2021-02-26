import { format } from "date-fns";
export const NOT_AVAILABLE = "N/A";
/**
 * Return a given word pluralized if value is not 1
 * Given word should be the singular form of the word
 * if the word needs more than an "s" to pluralize.
 * example: pluralize(pluralExpression, "is");
 *
 * @param value
 * @returns {string} pluralized string
 */
export function pluralize(value, word) {
    const isPlural = value !== 1;
    if (isPlural) {
        const wordMapping = {
            is: "are",
            it: "them",
            was: "were",
        };
        // We should really improve includes() typings to allow any string
        if (Object.keys(wordMapping).includes(word)) {
            // @ts-ignore for some reason this is only an error on CI?
            return wordMapping[word];
        }
        else if (["s", "z"].includes(word.slice(-1))) {
            return word;
        }
        return `${word}s`;
    }
    return word;
}
export const formatDate = (date) => {
    if (!date)
        return NOT_AVAILABLE;
    const toFormatDateTime = new Date(date).getTime();
    let formatType = "hh:mm a";
    const dateNow = Date.now();
    const oneDay = 60 * 60 * 24 * 1000;
    if (dateNow - toFormatDateTime > oneDay * 7) {
        formatType = "dd MMMM yyyy";
    }
    else if (dateNow - toFormatDateTime > oneDay) {
        formatType = "eeee"; // Monday
    }
    return format(toFormatDateTime, formatType);
};
export function formatNumber(number, decimals = 0) {
    if (typeof number !== "number") {
        return "";
    } // direct copy from http://stackoverflow.com/questions/721304/insert-commas-into-number-string
    // done to avoid pulling in entire "numeral" library or deal with manual loops
    return number.toFixed(decimals).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,");
}
export function formatCurrency(number, decimals = 0) {
    if (number === null || number === undefined) {
        return "";
    }
    if (number < 0) {
        return `-$${formatNumber(number * -1, decimals)}`;
    }
    return `$${formatNumber(number, decimals)}`;
}
export const formatPhoneNumber = (numberStr) => {
    if (numberStr) {
        return numberStr.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }
    return null;
};
export const formatContactMethod = (method) => {
    if (method === "any") {
        return "Any";
    }
    // default to no calling
    return "Text and Email Only";
};
export const capitalizeFirstLetter = (string) => {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return "";
};
//# sourceMappingURL=stringUtils.js.map