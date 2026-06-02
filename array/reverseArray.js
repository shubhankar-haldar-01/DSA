//Reverse an array arr[]. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  if (arr.length <= 1) return arr;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
