/*
Pivot Sorted Rotated Array

Pseudo Code
lo = 0

hi = n-1

while lo is less than hi:

mid = (lo + hi)/2

if arr[mid] > arr[hi]

lo = mid + 1 // pivot lies in second half

else

hi = mid // pivot lies in first half

now lo == hi so we can return arr[lo] or arr[hi]

Complexity Analysis:
1. Time Complexity = O(logN)
2. Space Complexity = O(1)

Analysis
Time Complexity :
O(logn)

Here every time the length of the array gets halved. Now if you have an array of length 8 how many times can you half it until it becomes an array of length 1. First, 8 can be halved to 4, then 2nd time if you half it, it will become 2 and then 3rd time it will become 1. So 3 times. Every time we are halving we are dividing the array and the log is nothing but repeated division. So, the number of times we can divide an array of length n will be log2n. So time complexity is O(log2n).

SPACE COMPLEXITY :
O(1)

No auxiliary arrays are used, hence the space complexity remains O(1) i.e constant.

*/

function findPivot(arr) {
  let low = 0, high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < arr[high]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return arr[low];
}

console.log(findPivot([40, 50, 10, 20, 30])); // 10
console.log(findPivot([10, 20, 30, 40, 50])); // 10
console.log(findPivot([40, 50, 10, 20, 30])); // 10


/*
import java.io.*;

import java.util.*;

public class Main {

  public static int findPivot(int[] arr) {
    int lo = 0, hi = arr.length - 1;
    while (lo < hi) {
      int mid = (lo + hi) / 2;
      if (arr[mid] > arr[hi]) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return arr[lo];
  }

  public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }
    int pivot = findPivot(arr);
    System.out.println(pivot);
  }
}

*/