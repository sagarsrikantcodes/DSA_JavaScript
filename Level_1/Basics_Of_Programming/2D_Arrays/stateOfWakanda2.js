/*
The State Of Wakanda - 2

Problem Discussion:
After reading the problem statement you will understand that all we have to do is to print the upper diagonal of the matrix. Take a look at this illustration for example:

11 12 13 14
21 22 23 24
31 32 33 34
41 42 43 44

Output:
Print Upper Half of the Diagonal
11
22
33 
44
12 
23 
34
13
24
14

Approach:
Run an outer-loop of gaps from 0 to n-1.
Run an inner loop for increasing i and j and printing the element.

Pseudocode:
gap from 0 to n-1

i = 0 and j = gap till j < n

print element {i, j}

increment i

increment j

Quite naturally there will be n diagonals, as you can see in the image below. If we represent an element using this notation of {i, j} it means an element of the i-th row and j-th column. If this element belongs to a diagonal then the next element in the diagonal will be {i+1, j+1}. And the previous element was {i-1, j-1}.

For example:

Look at
{0, 0} {1, 1} {2, 2} ...
{0, 1} {1, 2} {2, 3} ...


Since both the coordinates are increasing and decreasing at the same rate, the difference between them will be constant and unique to a particular diagonal.

When will both the coordinates increase? Let"s say currently you are at (2, 3) now you want to move to the next diagonal element. It will be in (2+1, 3+1) = (3, 4) th position. The next one will be in (4, 5) and so on.

When will both the coordinates decrease? Let"s say currently you are at (2, 3) now you want to move to the previous diagonal element. It will be in (2-1, 3-1) = (1, 2) th position. The previous one will be in (0, 1) and so on.

So, we can just write an outer loop that will iterate through the n diagonals i.e from 0 to n-1 gap. Its inner loop will print the elements in the diagonal such that j - i = gap. But how long should we keep printing. Try to guess it !! Did you find it?

Yes. Until (j < n), in the above image you can see the last elements of the diagonals have 5 as its column index. i.e j = 5. Now, you can move into the coding part. It will be a pretty small code. You can try to write it yourself.

Analysis
Calculating the time complexity, in this case, is pretty simple.

Time Complexity:
When gap = 0, the inner loop run"s n times

When gap = 1, the inner loop run"s n-1 times

When gap = 2, the inner loop run"s n-2 times

.
.
.
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

So considering all the gaps the inner loop will be running:

n + (n-1) + (n-2) + (n-3) + ... times = n*(n+1)/2 which is of the order O(n2).

SPACE COMPLEXITY:
We are not using any auxiliary space and hence the space complexity is O(1).

*/

function stateOfWakanda2(arr) {

  for (let gap = 0; gap < arr.length; gap += 1) {
    for (let i = 0, j = gap; j < arr.length; i += 1, j += 1) {
      console.log(arr[i][j]);
    }
  }

}

let arr = [[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]];
stateOfWakanda2(arr);
