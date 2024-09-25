// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Flattening an Array of Arrays: This means converting a nested array structure, where you have arrays within an array, into a single array containing all the individual elements.
//fucntion flatten has parameter arrayofArrays
function flatten(arrayOfArrays) {
  //reduce iterates through each sub-array within arrayOfArray
  //accumulator: Initially set to the empty array [] (specified as the second argument to reduce).
//currentArray: Represents each sub-array from arrayOfArrays.
  return arrayOfArrays.reduce(function(accumulator, currentArray) {
    //For each currentArray, the concat method combines it with accumulator.
//This adds the elements of currentArray to accumulator, which builds up the flattened array over each iteration.
    return accumulator.concat(currentArray);
  }, []);
}



// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//value: The initial value for the loop.
//test: A function that determines if the loop should continue.
//update: A function that calculates the next value.
//body: A function that performs an action on the current value.


function loop(value, test, update, body) {
  //the test function is used to check if the loop should continue. 
  //It takes the current value and returns true or false. 
  //If test(value) returns false, the loop stops.
  if (test(value)) {
    //If the test function returns true, the body function is executed with the current value. 
    body(value); // Execute the body function with the current value
    //the update function is called to generate the new value for the next iteration. 
    //The loop function is then called recursively with this updated value, along with the same test, update, and body functions. 
    //This recursion continues until the test function returns false.
    loop(update(value), test, update, body); // Recursively call loop with the updated value
  }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//everyfunctions (array, predicate) takes two arguments:
//array: The array to be checked.
//predicate: A function that returns true or false when called with an element of the array.
function every(array, predicate) {
  // Iterate through each element in the array
  for (var i = 0; i < array.length; i++) {
    // Apply the predicate function to the current element
    if (!predicate(array[i])) {
      //!predicate(array[i]) checks if the result of the predicate function is false. If it is, the if condition evaluates to true
      // If any element does not satisfy the predicate, return false
      return false;
    }
  }
  // If all elements satisfy the predicate, return true
  return true;
}
// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function characterScript(char) {
  // Define Unicode ranges for different writing directions
  const rtlRanges = [
    [0x0600, 0x06FF], // Arabic
    [0x0750, 0x077F], // Arabic Supplement
    [0x08A0, 0x08FF], // Arabic Extended-A
    [0xFB00, 0xFB4F], // Alphabetic Presentation Forms
    [0xFE70, 0xFEFF], // Arabic Presentation Forms
    [0x1EE00, 0x1EEFF] // Arabic Mathematical Alphabet
  ];

  const ltrRanges = [
    [0x0041, 0x005A], // Latin uppercase
    [0x0061, 0x007A], // Latin lowercase
    [0x0030, 0x0039], // Digits
    // Add more Latin ranges or other LTR scripts as needed
  ];

  const ttbRanges = [
    [0x4E00, 0x9FFF]  // Common Chinese characters
    // Add more TTB ranges as needed
  ];

  // Function to check if a code point is in any of the ranges
  function isInRanges(codePoint, ranges) {
    return ranges.some(([start, end]) => codePoint >= start && codePoint <= end);
  }

  const codePoint = char.codePointAt(0);
  if (isInRanges(codePoint, rtlRanges)) return { direction: 'rtl' };
  if (isInRanges(codePoint, ltrRanges)) return { direction: 'ltr' };
  if (isInRanges(codePoint, ttbRanges)) return { direction: 'ttb' };

  return { direction: null }; // Default direction
}

// Function to compute the dominant writing direction
function dominantDirection(text) {
  const counts = text.split('').reduce((acc, char) => {
    const { direction } = characterScript(char);
    if (direction) {
      acc[direction] = (acc[direction] || 0) + 1;
    }
    return acc;
  }, { 'ltr': 0, 'rtl': 0, 'ttb': 0 });

  // Determine the direction with the highest count
  const dominantDirection = Object.keys(counts).reduce((maxDir, dir) => {
    return counts[dir] > counts[maxDir] ? dir : maxDir;
  }, 'ltr'); // Default to 'ltr' if all counts are zero

  return dominantDirection;
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};