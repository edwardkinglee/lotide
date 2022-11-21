const assertEqual = require('./assertEqual');

const head = (array) => {
  return array.length !== 0 ? array[0] : undefined;
};
