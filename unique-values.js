/**
 * Finds the number of unique values in array using
 * JavaScript's built-in Set object
 * @param {Array} arr - Array to find unique values from
 * @returns {Number} - An integer value representing number of unique values
 */
function unqVals_Set(arr) {
  let unq = new Set(arr);
  return unq.size;
}

module.exports = { unqVals_Set };