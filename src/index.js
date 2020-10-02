
exports.min = function min (array) {
  let min = 0;
  if (array < 1 || array === undefined ){
  return 0;
  }
  return Math.min.apply(null,array);
}

exports.max = function max (array) {
  let max = 0;
  if (array < 1 || array === undefined){
  return 0;
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  let avg = 0;
  if (array < 1 || array === undefined){
  return 0;
  }
  return array.reduce((a, b) => (a + b)) / array.length;
}
