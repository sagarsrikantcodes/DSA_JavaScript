/*
Display Arrays

Input:
arr = [3, 1, 0, 7, 5]
index = 0

Output:
3
1
0
7
5

Analysis
Time Complexity :
O(n)

Let"s try to understand our time complexity. Since we are making at most n recursion calls and in each call we are performing O(1) operations (printing a data is constant time) so our overall time complexity is n*O(1) = O(n).

SPACE COMPLEXITY :
O(n)

Also, we know for each recursion call the parameters, address of the array are stored in the runtime stack, and since the recursive call stack is of n length it will also take n space in the stack. Although we are not using any array the space complexity will be O(n).

*/

function displayArrays(arr, index) {
  if (index === arr.length) {
    return;
  }

  console.log(arr[index]);
  displayArrays(arr, index + 1);
}

displayArrays([3, 1, 0, 7, 5], 0);