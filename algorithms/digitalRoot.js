/**
 *
 * @param {number} n The input will be a non-negative integer.
 * @returns {number} Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced
 */
function digitalRoot(n) {
  return n.toString().length === 1
    ? n
    : digitalRoot(
        n
          .toString()
          .split("")
          .reduce((a, b) => a + Number(b), 0)
      );
}

module.exports = digitalRoot;
