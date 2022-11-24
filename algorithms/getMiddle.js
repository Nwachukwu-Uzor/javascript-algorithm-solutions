
/**
 * @return {string} returns the middle character of the word
 * @param {string} s the word as an input
 */

function getMiddle(s) {
  const wordLength = s.length;
  const mid = Math.ceil(wordLength / 2);
  if (wordLength % 2 === 0) {
    const result = s.substr(mid - 1, 2);
    return result;
  }
  const result = s[mid - 1];
  return result;
}

module.exports = getMiddle;
