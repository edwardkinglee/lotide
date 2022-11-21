const findKey = (obj, callback) => {
  
  for (let element in obj) {
    if (callback(obj[element])) {
      return element;
    }
  }
  return undefined;
};

module.exports = findKey;