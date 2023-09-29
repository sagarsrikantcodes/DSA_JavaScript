/*
Bubble Sort

input:
arr = [7, -2, 4, 1, 3]

Output:
[-2, 1, 3, 4, 7]

Complexity Analysis:
1. Time Complexity = O(N ^ 2)
2. Space Complexity = O(1)


*/


function swap(arr, i, j) {
  console.log("swapping " + arr[i] + " and " + arr[j]);
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function isSmaller(arr, i, j) {
  console.log("Comparing " + arr[i] + " and " + arr[j]);
  return arr[i] < arr[j];
}

function bubbleSort(arr) {
  let n = arr.length;


  for (let pass = 1; pass < n; pass += 1) {
    for (let i = 0; i < arr.length - pass; i += 1) {

      if (isSmaller(arr, i + 1, i)) {
        swap(arr, i, i + 1);
      }
    }
  }
}

let arr = [7, -2, 4, 1, 3];
bubbleSort(arr);
console.log(arr);

/*

import java.io.*;
import java.util.*;

public class Main {

  public static void bubbleSort(int[] arr) {
    //write your code here
    
  }

  // used for swapping ith and jth elements of array
  public static void swap(int[] arr, int i, int j) {
    System.out.println("Swapping " + arr[i] + " and " + arr[j]);
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // return true if ith element is smaller than jth element
  public static boolean isSmaller(int[] arr, int i, int j) {
    System.out.println("Comparing " + arr[i] + " and " + arr[j]);
    if (arr[i] < arr[j]) {
      return true;
    } else {
      return false;
    }
  }

  public static void print(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }
  }

  public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }
    bubbleSort(arr);
    print(arr);
  }

}



*/