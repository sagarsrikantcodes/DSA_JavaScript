/*
Print All Permutations Of A String Iteratively

Approach :
What?

We will iterate through the numbers 0 to (n! - 1).
For each number, divide it first by n, then by n-1, then by n-2, and so on.
Whatever comes as the remainder in each case we will remove that char from the string print it and use the quotient for the next division purpose. [we will not make any direct changes in the original string, we will make changes to a copy].
Why?

This way for every iteration from 0 to n! -1 we will get one string of length n. Interestingly all these strings will be unique permutations of the given string.

Let"s understand by an example. We will consider a string of length 3 "abc" and iterate from 0 to 5 [ 3! - 1 ].

Here we have started with 0.

img
0 divided 3 gives 0 as remainder so we will print the 0-th character i.e "a" and remove it from "abc".

Now we have "bc" and since the previous quotient was 0 we will divide 0 by 2 this time and find that again we get 0 as remainder. So now we will print "b" and remove it from "bc".

Again we will get 0 as the quotient and divide it again by 1 and get 0 as remainder hence we print "c".

So, we actually printed "abc".

Let"s take a different example, say 4. 4 lies between 0 and 5. Let"s see what it gives us.

img
4 is first divided by 3, quotient = 1 and remainder = 1, so 1-th char of "abc" will be printed and removed i.e b. The temp string becomes "ac".

Now we will divide 1 by 2, quotient = 0 and remainder = 1, so 1-th char of "ac" will be printed and removed i.e c. The temp string is "a" now.

Now we will divide 0 by 1, the remainder is 0 so the 0-th char of "a" will be printed.

This gave us "bca", which is another permutation of "abc".

If you are facing any difficulty understanding this operation I would suggest you watch the solution video given below. But if you have understood this operation, take out a pen and paper and try to do this for the rest of the 4 numbers 1, 2, 3, and 5, and then check if your answer matches with that of the video or not.

Analysis
Let"s now find out the time complexity.

Time Complexity :
O(n! * n) = O(n!)

We are looping from 1 to n! in the outer loop. And in the inner loop, we are performing some operations which are running n times. Here n represents the length of the string. Thus, we have a total time complexity of O(n! * n).

SPACE COMPLEXITY :
O(n)

For space complexity, we are not storing the permutations but we are using a StringBuilder for the string operations. So the auxiliary space will remain O(n).O(n).

*/

function factorial(n) {
  let fact = 1;

  for (let i = 1; i <= n; i += 1) {
    fact *= i;
  }

  return fact;
}

function displayPermutationsOfString(str) {
  const len = str.length;
  const total = factorial(len);

  for (let number = 0; number < total; number++) {
    let sb = str.split('');
    let temp = number;

    for (let divisor = len; divisor >= 1; divisor--) {
      const q = Math.floor(temp / divisor);
      const r = temp % divisor;

      process.stdout.write(sb[r]);
      sb.splice(r, 1);
      temp = q;
    }
    console.log();
  }
}

displayPermutationsOfString("abc");

/*
public static void solution(String str) {
    int len = str.length();
    int total = factorial(len);

    for (int number = 0; number < total; number++) {
      StringBuilder sb = new StringBuilder(str);
      int temp = number;

      for (int divisor = len; divisor >= 1; divisor--) {
        int q = temp / divisor;
        int r = temp % divisor;

        System.out.print(sb.charAt(r));
        sb.deleteCharAt(r);
        temp = q;
      }
      System.out.println();
    }



*/