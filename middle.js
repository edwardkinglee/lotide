const middle = (array) => {
  const middleIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return array.slice(middleIndex, middleIndex + 1);
  } else {
    return array.slice(middleIndex - 1, middleIndex + 1);
  }
  
};

module.exports = middle;
