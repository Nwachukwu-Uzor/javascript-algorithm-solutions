/**
 * @return converts a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 * @param {string} word - The word to convert
 */
const duplicateEncode = (word) => {
  return word
    .toLowerCase()
    .split("")
    .map((ch, i, w) => {
      return w.lastIndexOf(ch) === i && w.indexOf(ch) === i ? "(" : ")";
    })
    .join("");
};

module.exports =  duplicateEncode
