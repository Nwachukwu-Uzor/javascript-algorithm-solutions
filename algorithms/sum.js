/**
 * @return the sum of a number of argument
 */

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

module.exports = sum;