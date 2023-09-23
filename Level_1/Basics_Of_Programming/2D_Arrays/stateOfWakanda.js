/*
STate of Wakanda 1

Problem Discussion:
The historic state of Wakanda has various monuments and souvenirs which are visited by many travelers every day. The guides follow a prescribed route of visiting the monuments which improve their understanding of the relevance of each monument.

The route of the monument is fixed and expressed in a 2-d matrix where the travelers visit the prescribed next monument.

For example

1  2  3 
4  5  6 
7  8  9 

The prescribed route and the visitors travels this path:

1->2->3->4->5->6->7->8->9

However, a certain visitor decides to travel a different path as follows:

He first travels southwards till no further south places are available.
He then moves only 1 place eastwards.
He starts to move again towards north till any further north moves are available.
This continues till all the places are covered.

For example, the monuments are named as follows:

1  2  3 
4  5  6 
7  8  9 

Path followed by these travelers: 1->4->7->8->5->2->3->6->9, which maps as follow:

Input: 

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

Output:
1
4
7
8
5
2
3
6
9

Algorithm:
1. Iterate through the array by keeping column, j fixed.
  - If j is even 
    - Iterate through the array using index, i from 0 to 2.
      - Print arr[i][j]
  - Else
    - Iterate through the array using index, i from z to 0
      - Print arr[i][j]



Complexity Analysis:
1. Time Complexity = O(N ^ 2)
2. Space Complexity = O(1)

Analysis
Time Complexity:
O(n^2)

As there is nested for loop and the outer for loop runs n times. There are two inner for loops. Either one will run in each iteration.

Making the time complexity: O(n)*(O(n/2)+O(n/2))= O(n^2).

SPACE COMPLEXITY:
O(1)

Since, we are not using any auxiliary space and hence the space complexity is O(1).



*/

function stateOfWakanda(arr) {
  let res = [];

  for (let j = 0; j < arr[0].length; j += 1) {
    if (j % 2 === 0) {
      for (let i = 0; i < arr.length; i += 1) {
        res.push(arr[i][j]);
      }
    } else {
      for (let i = arr.length - 1; i >= 0; i -= 1) {
        res.push(arr[i][j]);
      }
    }
  }

  return res;
}

console.log(stateOfWakanda([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

