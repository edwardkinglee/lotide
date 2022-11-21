const assertEqual = require('../assertEqual');

const head = (array) => {
  return array.length !== 0 ? array[0] : undefined;
};

//Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");