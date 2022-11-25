/**
 *
 * @param {number[]} arr - An array that contain elements of different types
 * @returns {number[]} a sorted version of the input array with all the zeros moved to the end while the other element maintain their positions
 */
function moveZeros(arr) {
  const zeros = [];
  const nonZeros = [];
  for (let value of arr) {
    if (value === 0) {
      zeros.push(value);
    } else {
      nonZeros.push(value);
    }
  }
  return [...nonZeros, ...zeros];
}
moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
module.exports = moveZeros;
