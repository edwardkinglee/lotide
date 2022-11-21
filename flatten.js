const flatten = (array) => {
  const newArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let item of element) {
        newArray.push(item);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

module.exports = flatten;