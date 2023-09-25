/*
Display Array Reverse

input:
arr = [3, 1, 0, 7, 5]
idx = 0

output:

5
7
0
1
3

Approach :
We have a recursive formula displayArrRev(arr, idx).

Check if idx is a valid index. If not simply return. This is our base case.
Make a recursive call with parameters arr and idx+1
Print the value at the index idx i.e arr[idx].


Analysis
Time Complexity :
O(n)

Let's try to understand our time complexity. It will be similar to the previous problem. Since we are making at most n recursion calls and in each call we are performing O(1) operations (printing a data is constant time) so our overall time complexity is n*O(1) = O(n).

SPACE COMPLEXITY :
O(n)

Also, we know for each recursion call the parameters, address of the array are stored in the runtime stack, and since the recursive call stack is of n length it will also take n space in the stack. Although we are not using any array the space complexity will still be O(n).

*/

function displayArrayReverse(arr, index) {
  if (index === arr.length) {
    return;
  }

  displayArrayReverse(arr, index + 1);
  console.log(arr[index]);
}

displayArrayReverse([3, 1, 0, 7, 5], 0);