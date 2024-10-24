/**
 * Trims a string to a specified maximum length and appends ellipsis ("...") if necessary.
 *
 * @param {string} text - The input string to be truncated.
 * @param {number} max - The maximum length of the string before truncation.
 * @returns {string} - The truncated string with ellipsis if its length exceeds the specified limit.
 *
 * @example
 * // Returns 'Hello...'
 * textclise('Hello World!', 5);
 *
 * @example
 * // Returns 'Hello'
 * textclise('Hello', 10);
 */
export function textclise (text : string , max : number) {
    if(text.length >= max) return `${text.slice(0 , max)} ... `
     return text ;
 }