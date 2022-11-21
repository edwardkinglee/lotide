const tail = (array) => {
  return array.length > 1 ? array.slice(1) : [];
};

module.exports = tail;
