/*
Power Logarithm:

input:
x = 2
n = 5

output:
32

input:
x = 2
n = 4

output:
16

Pseudo Code for power (x, n) Function
If n is 0, then return 1.
Else
Get the value of power(x,n/2) in a variable named "xpnb2"
If n is odd, then return x*xpnb2*xpnb2
Else (n is even), return xpnb2*xpnb2

Analysis
Time Complexity :
O(log2 n)

Since you are recursively calling for a subproblem with n/2 from n, hence at max log2 (n) recursive calls will be made. You can also count the number of recursive calls in the call stack. So the time complexity turns out to be log2 (n) (which is independent of the value of x).

Are you wondering how reducing n to n/2 brings down the number of recursive calls from O(n) to O(log n)? Can you think of a mathematical proof?

Hint: Try finding the pattern in the values of n in recursive calls and find the count of recursive calls using this sequence.

Proof of Logarithmic Time Complexity:

When you will draw the recursion call stack, you will see that the value of n reduces by a factor of 2 always, i.e. it reduces in the following sequence:

n,n/2, n/4,n/8, n/16, .... upto 1. (Leaving the base case for better understanding).

Can you see that the above pattern forms a geometric progression (G.P.) ?

Indeed, it is a geometric progression with the first term a = 1 and the constant ratio r = 1/2.

Let the number of recursive calls be k (which is in turn equal to the number of terms in G.P.)

Then, you can apply the formula of the kth term of G.P. which will be:

img
On solving the above equation we get, n=2k-1, then taking log2 on both sides of the equation we get k=1+n , i.e. k is O(log2 n).

Since k is the number of recursive calls, hence the time complexity of the above solution is proved to be O(log2 n).

To follow this proof, you can go to the same video Power Logarithmic, and watch the section.

SPACE COMPLEXITY :
O(1)

There is no data structure used, thus no auxiliary space is used. Hence, space complexity is O(1).

If the recursion call stack is taken into account, then space complexity will be O(log2 n) as there are k = (log2 n) recursive calls.
*/

function power(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n % 2 === 0) {
    return power(x, Math.floor(n / 2)) * power(x, Math.floor(n / 2));
  } else {
    return x * power(x, Math.floor(n / 2)) * power(x, Math.floor(n / 2));
  }

}

console.log(power(2, 5)); // 32
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8

