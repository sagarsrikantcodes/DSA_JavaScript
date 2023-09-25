/*
All Indices of array

Input: arr = [15, 11, 40, 4, 4, 9], x = 4, idx = 0

Output: [3, 4]

Analysis:
Time Complexity:
As n (array's length) calls are made and work is done corresponding to these n calls therefore the time complexity becomes O(n).

Space Complexity:
Since an array has been used to store all the indices which can be, therefore space complexity is constant, however you should know that if the recursion call stack is taken into account, then space complexity will be O(n) as there are n recursive calls.

*/




/*
public static int[] allIndices(int[] arr, int x, int idx, int fsf) {
        // write ur code here
    }



*/
/*
public static int[] allIndices(int[] arr, int x, int idx, int fsf) {
  if (idx == arr.length) {
    return new int[fsf];
  }

  int[] iarr;

  if (arr[idx] == x) {
    iarr = allIndices(arr, x, idx + 1, fsf + 1);
    iarr[fsf] = idx;
  } else {
    iarr = allIndices(arr, x, idx + 1, fsf);
  }

  return iarr;
}
*/

function allIndices(arr, x, idx, fsf) {
  if (idx === arr.length) {
    return new Array(fsf);
  }

  let iarr;

  if (arr[idx] === x) {
    iarr = allIndices(arr, x, idx + 1, fsf + 1);
    iarr[fsf] = idx;
  } else {
    iarr = allIndices(arr, x, idx + 1, fsf);
  }

  return iarr;
}