const transpose = function(matrix) {
  let muse = [];
  for (let col = 0; col < matrix[0].length; col++) {
    muse.push(matrix.map(x => x[col]));
  }
  return muse;
};

module.exports = { transpose };