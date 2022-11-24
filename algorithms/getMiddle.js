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
