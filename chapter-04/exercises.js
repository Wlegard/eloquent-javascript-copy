////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// create a function with parameter start, end and a incrementer/decrementer
function range(start, end, step = 1) {
    // Return an empty array if start is equal to end
    if (start === end) {
        return [];
    }
    //Initialize output array
    let output = [];
    
    // If step is positive, count up
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            output.push(i);
        }
    } else { // If step is negative, count down
        for (let i = start; i >= end; i += step) {
            output.push(i);
        }
    }

    return output;
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, total = 0) {
 
        for (var i = 0; i < array.length; i ++){
            total += array[i]
    }
    return total;
    }


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
    var output = []
    for(var i = array.length -1;i >= 0; i --){
        output.push(array[i])
    }
    return output
}
////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
    const n = array.length; // Get the length of the array

    // Loop through half of the array
    for (var i = 0; i < Math.floor(n / 2); i++) {
        // Swap elements at index i and n - 1 - i
        let temp = array[i]; // Store the current element
        array[i] = array[n - 1 - i]; // Move the last element to the current position
        array[n - 1 - i] = temp; // Place the stored element in the last position
    }

    // The array is modified in place; no need to return anything

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array ) {
    if (array.length === 0) return null;

    // Start building the linked list from the last element
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
    var array = []; // Initialize an empty array
    
    // Traverse the linked list
    for (var node = list; node !== null; node = node.rest) {
        array.push(node.value); // Add the current node's value to the array
    }
    
    return array; // Return the resulting array

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
    return { value: element, rest: list };

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, position) {
   // If position is negative, return undefined
   if (position < 0) {
    return undefined;
}

var current = list; // Start with the head of the list
for (var i = 0; i < position; i++) {
    if (current === null) return undefined; // If we've reached the end before the position
    current = current.rest; // Move to the next node
}
return current ? current.value : undefined; // Return the value or undefined
}


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
      // Check if both values are strictly equal
      if (a === b) {
        return true;
    }

    // Check if both are objects
    if (a == null || b == null || typeof a !== 'object' || typeof b !== 'object') {
        return false; // If one is null or not an object, they are not equal
    }

    // Get the keys of both objects
    var keysA = Object.keys(a);
    var keysB = Object.keys(b);

    // Check if the number of properties is the same
    if (keysA.length !== keysB.length) {
        return false;
    }

    // Compare properties and values recursively
    for (var key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false; // If keys are not the same or values are not equal
        }
    }

    return true; // If all properties match
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};