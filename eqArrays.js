const eqArrays = (array1, array2) => {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index in array1) {
    if (Array.isArray(array1[index])) {
      if (!(eqArrays(array1[index], array2[index]))) {
        return false;
      }
    } else if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

