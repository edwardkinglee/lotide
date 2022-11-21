const findKeyByValue = (obj, value) => {
  // eslint-disable-next-line no-prototype-builtins
  for (const index in obj) {
    if (obj[index] === value) {
      return index;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;