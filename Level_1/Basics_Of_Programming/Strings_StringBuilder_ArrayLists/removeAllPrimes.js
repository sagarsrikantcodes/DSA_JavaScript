/*
Remove All Primes

input: arr = [3, 12, 13, 15]
output:

Primes are 3 and 13

*/

function isPrime(number) {

  let count = 0;

  for (let div = 2; div * div <= number; div += 1) {
    if (number % div === 0) {
      count += 1;
      break;
    }
  }

  if (count === 0) {
    return true;
  } else {
    return false;
  }

}
/*
console.log(isPrime(3)); // true
console.log(isPrime(12)); // false
console.log(isPrime(13)); // true
console.log(isPrime(15)); // false
*/

function removePrimes(arr) {
  let res = arr.filter(num => !(isPrime(num)));
  return res;
}

console.log(removePrimes([3, 12, 13, 15])); // [12, 15]

