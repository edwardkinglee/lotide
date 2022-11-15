const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed \u2705: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed \u274C: ${actual} !== ${expected}`);
  }
};

const tail = (array) => {
  return array.length > 1 ? array.slice(1) : [];
};

//Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const resultEmptyArray = tail([]);
assertEqual(resultEmptyArray.length, 0);//emplty array should have 0 elements
const oneElementArray = tail([1]);
assertEqual(oneElementArray.length,0);//1 element arrary should have 0 tail elements