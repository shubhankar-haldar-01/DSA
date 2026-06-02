// Given an array of n integers, the task is to find the third largest element.
function thirdLargestElement(arr) {
  if (arr.length < 3) {
    return null; // Not enough elements to find the third largest
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      thirdLargest = secondLargest; // Update third largest before updating second largest
      secondLargest = largest; // Update second largest before updating largest
      largest = num;
    } else if (num > secondLargest && num < largest) {
      thirdLargest = secondLargest; // Update third largest before updating second largest
      secondLargest = num; // Update second largest if it's between largest and current second largest
    } else if (num > thirdLargest && num < secondLargest) {
      thirdLargest = num; // Update third largest if it's between second largest and current third largest
    }
  }

  return thirdLargest === -Infinity ? null : thirdLargest; // Return null if there is no third largest
}

// Example usage:
console.log(thirdLargestElement([3, 1, 4, 1, 5, 9])); // Output: 4
console.log(thirdLargestElement([10])); // Output: null
console.log(thirdLargestElement([5, 5, 5])); // Output: null
console.log(thirdLargestElement([1, 2, 3, 4, 5])); // Output: 3
