const eqArrays = require('./eqArrays');

const isObject = (object) => {
  return object !== null && typeof object === "object";
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a false
const eqObjects = function(object1, object2) {
  const objOneLength = Object.keys(object1).length;
  const objTwoLength = Object.keys(object2).length;

  const object1keys = Object.keys(object1);
  const object2keys = Object.keys(object2);

  if (objOneLength === objTwoLength) {
    for (let element of object1keys) {
      //if object2 doesn't have the same keys as object1 return false
      if (!object2keys.includes(element)) {
        return false;
      }
      //added to check if both nested objects have the same length to fix bug
      if (Object.keys(object1[element]).length !== Object.keys(object2[element]).length) {
        return false;
      }

      if (Array.isArray(object1[element])) {
        if (!eqArrays(object1[element], object2[element])) {
          return false;
        }
        //added check to make sure !isObject is false so it only compares values
      } else if (object1[element] !== object2[element] && !isObject(object1[element]) && !isObject(object2[element])) {
        return false;
      } else if (isObject(object1[element]) || isObject(object2[element])) {
        eqObjects(object1[element], object2[element]);
      }

    }
    return true;
  }
  //if object1 length !== object2 length returns false
  return false;
};

module.exports = eqObjects;