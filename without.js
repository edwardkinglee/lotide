const without = (source, itemsToRemove) => {
  const withoutArray = [];

  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      withoutArray.push(element);
    }
  }

  return withoutArray;
};

module.exports = without;