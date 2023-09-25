/*
Last Index

input: arr = [15, 11, 40, 4, 4, 9], x = 4, idx = 0
output: 4

Analysis
Time Complexity :
O(n)

As n (array"s length) calls are made and work is done corresponding to these n calls therefore the time complexity becomes O(n).

SPACE COMPLEXITY :
O(1)

Since no extra space is used, therefore space complexity is constant, however you should know that if the recursion call stack is taken into account, then space complexity will be O(n) as there are n recursive calls.


*/

function lastIndex(arr, idx, x) {
  if (idx === arr.length) {
    return -1;
  }

  let li = lastIndex(arr, idx + 1, x);
  if (li === -1) {
    if (arr[idx] === x) {
      return idx;
    } else {
      return -1;
    }
  } else {
    return li;
  }
}

console.log(lastIndex([15, 11, 40, 4, 4, 9], 0, 4)); // 4

/*
Code in Java 

public static int lastIndex(int[] arr, int idx, int x) {
    if (idx == arr.length) {
      return -1;
    }

    int liisa = lastIndex(arr, idx + 1, x);
    if (liisa == -1) {
      if (arr[idx] == x) {
        return idx;
      } else {
        return -1;
      }
      else {
        return liisa;
      }
    }




*/