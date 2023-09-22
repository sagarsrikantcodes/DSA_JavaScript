/*
SubArray of an Array

input: arr = [1, 2, 3]
output: 
[1]
[1, 2]
[1, 2, 3],
[2],
[2, 3],
[3]

Analysis
Time Complexity:
O(n^3)

Double nested "for" loop has been used to print all the subarrays of the given array; travelling the n sized array 3 times makes the time complexity O(n^3).

SPACE COMPLEXITY:
O(1)

Since no extra space is used, therefore space complexity is constant.

*/

function subArraysOfArray(arr) {

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length + 1; j += 1) {
      let subArr = arr.slice(i, j);
      console.log(subArr);
    }
  }
}

subArraysOfArray([1, 2, 3]);
/*
Output:

[1]
[1, 2]
[1, 2, 3]
[2]
[2, 3]
[3]

*/

/*
Code in Java

import java.io.*;

import java.util.*;

public class Main {

  public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt;

    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt;
    }

    for (int i = 0; i < arr.length; i++) {
      for (int j = i; j < arr.length; j++) {
        for (int k = i; k <= j; k++) {
          System.out.print(arr[k] + "	");
        }
        System.out.println();
      }
    }
  }

}




*/