/**
 * @return converts a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 * @param {string} word - The word to convert
 */
const duplicateEncode = (word) => {
  let result = "";
  for (let character of word) {
    const count = checkCount(character, word);
    if (count > 1) {
      result = `${result})`;
    } else {
      result = `${result}(`;
    }
  }
  // ...
  return result;
};

/**
 * @retun the number of times a letter occurred in a word
 * @param {string} letter - a letter to find the number of occurrences in the word
 * @param {string} word - The word to check through
 */
const checkCount = (letter, word) => {
  if (letter.trim().length > 1) {
    throw new Error("Letter must be a single character");
  }

  if (word.trim().length === 0) {
    throw new Error("Word cannot be an empty string");
  }

  let count = 0;

  for (let character of word) {
    if (character.toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
};

// Other people's solutions
function duplicateEncode1(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
}

function duplicateEncode2(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

module.exports = { duplicateEncode, checkCount };
