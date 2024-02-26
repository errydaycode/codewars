//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
//
// For example:
//
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
//
// Another example (just to make sure it is clear):
//
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


function gimme(triplet) {
    // Find the minimum and maximum values in the triplet
    const minVal = Math.min(...triplet);
    const maxVal = Math.max(...triplet);

    // Iterate through the triplet and find the value that is not the minimum or maximum
    for (let i = 0; i < triplet.length; i++) {
        if (triplet[i] !== minVal && triplet[i] !== maxVal) {
            return i; // Return the index of the element that lies between the other two
        }
    }
}

console.log(gimme([2, 3, 1])); // Output: 0
console.log(gimme([5, 10, 14])); // Output: 1