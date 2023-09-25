/*
Tower Of Hanoi

Input:
3
10
11
12

Output:
1[10 -> 11]
2[10 -> 12]
1[11 -> 12]
3[10 -> 11]
1[12 -> 10]
2[12 -> 11]
1[10 -> 11]

*/

function towerOfHanoi(n, t1, t2, t3) {
  if (n === 0) {
    return;
  }

  towerOfHanoi(n - 1, t1, t3, t2);
  console.log(n + "[" + t1 + " -> " + t2 + "]");
  towerOfHanoi(n - 1, t3, t2, t1);
}

towerOfHanoi(3, 10, 11, 12);

/*
1[10 -> 11]
2[10 -> 12]
1[11 -> 12]
3[10 -> 11]
1[12 -> 10]
2[12 -> 11]
1[10 -> 11]

*/