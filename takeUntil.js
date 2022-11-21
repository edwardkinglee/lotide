const takeUntil = function(array, callback) {
  const newArray = [];
  
  for (let element of array) {
    if (callback(element)) {
      break;
    }
    newArray.push(element);
  }
  return newArray;
};

module.exports = takeUntil;