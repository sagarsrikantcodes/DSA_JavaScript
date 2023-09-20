/*
Permutations nPr Calculator

P(n, r) = n! / (n - r)!

Permutation
The number of ways to choose a sample of r elements from a set of n distinct objects where order does matter and replacements are not allowed. 

*/

function factorial(n) {
  let nfact = 1;
  for (let i = 1; i <= n; i += 1) {
    nfact *= i;
  }

  return nfact;
}

let n = 5;
let r = 2;
let nfact = factorial(n);
let nmrfact = factorial(n - r);
console.log(n + "P" + r + " = " + Math.floor(nfact / nmrfact));

