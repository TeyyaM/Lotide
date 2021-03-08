# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @teyya/lotide`

**Require it:**

`const _ = require('@teyya/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first item of an array.
* `tail`: returns an array minus the head (first item).
* `middle`: returns an array with the middle item(s) from the array used as the argument (one if odd, two if even).
* `assertEqual`: 
* `eqArrays`: returns if two arrays are deeply equal
* `eqObjects`: returns if two objects are deeply equal
* `assertArraysEqual`: console.logs a statement in regards to if two arrays are deeply equal.
* `assertObjectsEqual`:  console.logs a statement in regards to if two objects are deeply equal.
* `countletters`: returns an object wherein there is a key:value pair with every letter that appears in the string at least once as the keys. The values are the number of instances of that letter there are in the string.
* `countOnly`: With an array as the first argument and an object as the second. The object being possessing keys with only boolean values. countOnly will search all items in the array for any that match keys with a value of TRUE, and return an object with those keys. The value, however, will be the number of instances in which that key/item can be found in the array.
* `findKey`: With the first argument being an object, and the second (callback function) a value presumably IN that object, findKey will return a key with that value.
* `findKeyByValue`: Similar to 'findKey', with the first argument being an obeject and the second a value, it will return a key with that value IF POSSIBLE.
* `flatten`: Given an array with nested array(s) and potentially non-array items inside, will return an array with those nested items 'flattened' and 'retrieved' into a single-level array. Essentially, it removes one level of nested '[]'. 
* `map`: Applies the callback function to all items in an array, returning an array of the same length with the results. 
* `takeUntil`: returns an array that has all the items in the original array up until the 'cut off point', which is when (callback(item)) returns TRUE.
* `without`: Takes in two arrays and returns a new one. Any items in the first that match a one in the second are NOT included in the new array. 