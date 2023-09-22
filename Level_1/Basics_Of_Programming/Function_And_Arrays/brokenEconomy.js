/*
Broken Economy

Problem Discussion:
IIf we take a look at the question, we are essentially required to find the ceil and floor values of the given data, say "d", in a sorted array of n elements.

Now you may ask, what the hell are these ceil and floor values!? No need to be hostile , my friend. Read further.

Ceil value is the least integer that is greater or equal to the given data .Or, ceil value is the smallest of the elements greater than or equal to the given data "d".

Likewise floor value is the greatest integer that is less than or equal to x. Or, floor value is the largest of the elements smaller than or equal to the given data "d".

It's totally possible that you might not have understood their meaning entirely ,so let's discuss a few examples.


We are given the above sorted array arr[ ] of 10 elements.

Example 1 :d = 55

arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
floor = 50
ceil = 60

Example 2: d = 92
floor = 90
ceil = 100

Example 3: d = 40
floor = 40
ceil = 40

Analysis
Time Complexity:
O(logn)

This time complexity is logarithmic since a binary search-like approach is used and the search interval repeatedly gets reduced by half.

SPACE COMPLEXITY:
O(1)

Since no extra space is required for solving the problem therefore the space complexity is constant.

*/

function getCeilAndFloor(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ceil;
  let floor;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      ceil = arr[mid];
      floor = arr[mid];
      break;
    } else if (arr[mid] > target) {
      high = mid - 1;
      ceil = arr[mid];
    } else if (arr[mid] < target) {
      low = mid + 1;
      floor = arr[mid];
    }
  }

  console.log(`Ceil is ${ceil}`);
  console.log(`Floor is ${floor}`);
}

getCeilAndFloor([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 55);
/*
Ceil is 60
Floor is 50
*/
console.log();
getCeilAndFloor([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 92);
/*
Ceil is 100
Floor is 90
*/
console.log();
getCeilAndFloor([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 40);
/*
Ceil is 40
Floor is 40
*/