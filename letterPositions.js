const letterPositions = function(sentence) {
  const results = {};
  const sentenceArray = sentence.split('');

  sentenceArray.forEach((letter, index) => {
    
    // eslint-disable-next-line no-prototype-builtins
    if (results.hasOwnProperty(letter)) {
      results[letter].push(index);
    } else if (letter !== ' ') {
      results[letter] = [index];
    }
     
  });
  return results;
};

module.exports = letterPositions;