export declare const NOT_AVAILABLE = "N/A";
/**
 * Return a given word pluralized if value is not 1
 * Given word should be the singular form of the word
 * if the word needs more than an "s" to pluralize.
 * example: pluralize(pluralExpression, "is");
 *
 * @param value
 * @returns {string} pluralized string
 */
export declare function pluralize(value: number, word: string): any;
export declare const formatDate: (date: string | undefined) => string;
export declare function formatNumber(number: number, decimals?: number): string;
export declare function formatCurrency(number?: number | null, decimals?: number): string;
export declare const formatPhoneNumber: (numberStr: string | undefined) => string | null;
export declare const formatContactMethod: (method: string | undefined) => "Any" | "Text and Email Only";
export declare const capitalizeFirstLetter: (string: string) => string;
