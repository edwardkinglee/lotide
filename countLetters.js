const countLetters = (sentence) => {
  const letterCount = {};

  for (const letter of sentence) {
    // eslint-disable-next-line no-prototype-builtins
    if (letterCount.hasOwnProperty(letter)) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;
