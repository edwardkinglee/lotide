# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @edwardkinglee/lotide`

**Require it:**

`const _ = require('@edwardkinglee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Will console.log out if Arrays are === or !==
* `assertEqual(actual, expected)`: Compares two values to see if they are strictly equal === or !==
* `assertObjectsEqual(actual, expected`: Compares two objects to see if they are strictly equal === or !==
* `countLetters(sentence)`: Counts letters in a sentence and returns a object with letter count
* `countOnly(allItems, itemsToCount)`: allItems: an array of strings that we need to look through. itemsToCount: an object specifying what to count
* `eqArrays(array1, array2)`: Compares if two arrays are === or !==
* `findKey(object, callback)`: Uses a callback function to find specified key in a object, returns found key or undefined if not found
* `findKeyByValue(object, value)`:Finds specified value in a object, returns found key or undefined if not found
* `flatten(array)`: Flattens nested array and returns new flattened array
* `head(array)`: Returns value of element at index 0 of array or 'undefined' if array length is 0.
* `letterPositions(sentence)`: Returns object with the index of letter positions from a sentence
* `map(array, callback)`: Takes in a array and returns a new altered array based on callback function
* `middle(array)`:Returns the middle array element if array has a odd number of elements, if even will return middle 2 elements
* `tail(array)`: Returns new array with all array elements starting at index 1, if array lenght is 1 will return []
* `takeUntil(array, callback)`: Returns new array until element provided in callback function states when to stop
* `without(sourceArray, itemsToRemove)`: Returns new array without the elements included in the itemsToRemove array