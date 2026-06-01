function secondLargest(arr) {
  if (arr.length < 2) {
    return null; // Not enough elements to find the second largest
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest; // Update second largest before updating largest
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num; // Update second largest if it's between largest and current second largest
    }
  }

  return secondLargest === -Infinity ? null : secondLargest; // Return null if there is no second largest
}

// Example usage:
console.log(secondLargest([3, 1, 4, 1, 5, 9])); // Output: 5
console.log(secondLargest([10])); // Output: null
console.log(secondLargest([5, 5, 5])); // Output: null
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
