/*
Target Sum Pair

Sample Input
12

9 
-48 
100 
43 
84 
74 
86 
34 
-37 
60 
-29 
44

160

Sample Output
60, 100
74, 86

COmplexity Analysis for Brute Force Algorithm:
1. Time Complexity = O(N ^ 2)
2. Space Complexity = O(1)

Complexity ANalysis for Optimized Algorithm
1. Time COmplexity = O(N)
2. Space COmplexity = O(N)

The function targetSumPair you provided is intended to find pairs of elements in an array that sum up to a given target value. You've implemented it using an object-based approach to improve the time complexity from O(n^2) to O(n).

Here's a breakdown of your code:

You've commented out a nested loop-based approach (with a time complexity of O(n^2)) for finding pairs that sum up to the target. Instead, you've used a more efficient approach with an object (obj) to achieve the same result.

You initialize an empty object obj to store elements from the array as keys and their corresponding indices as values.

You iterate through the array arr using a for loop.

For each element arr[i], you calculate Math.abs(target - arr[i]) to find the value that, when added to arr[i], equals the target.

You check if this calculated value is present as a key in the obj. If it is, you print both the calculated value (which is the complement needed to reach the target) and the current element arr[i]. These two elements together form a pair that sums up to the target.

If the calculated value is not in the obj, you add arr[i] as a key in the obj, with its index i as the corresponding value. This allows you to later check if other elements in the array can form a pair with arr[i] to reach the target.

This code effectively finds and prints pairs of elements that sum up to the target value. It does so with a time complexity of O(n), making it more efficient than the nested loop-based approach.

Your provided example, using the target value 160 and the input array, should correctly find and print the pairs that meet this condition.

*/

function targetSumPair(arr, target) {
  /*
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = i + 1; j < arr.length; j += 1) {
        if (arr[i] + arr[j] === target) {
          console.log(`${arr[i]}, ${arr[j]}`);
        }
      }
    }
    */

  let obj = {};

  for (let i = 0; i < arr.length; i += 1) {
    if (Math.abs(target - arr[i]) in obj) {
      console.log(target - arr[i], arr[i]);
    } else {
      obj[arr[i]] = i;
    }
  }
}

targetSumPair([9, -48, 100, 43, 84, 74, 86, 34, -37, 60, -29, 44], 160);


/*
import java.io.*;
import java.util.*;

public class Main {

  public static void targetSumPair(int[] arr, int target){
    //write your code here

  }
  public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for(int i = 0 ;i < n; i++){
      arr[i] = scn.nextInt();
    }
    int target = scn.nextInt();
    targetSumPair(arr,target);
  }

}

*/

