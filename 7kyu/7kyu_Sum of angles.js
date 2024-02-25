// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
    return (n - 2) * 180;
}

console.log(angle(5)); // Output: 540
console.log(angle(6)); // Output: 720
console.log(angle(8)); // Output: 1080