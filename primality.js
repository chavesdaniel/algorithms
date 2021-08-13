/*
*
*  Determine whether an input number is a prime number
*
*  (1) Try dividing the number by all smaller numbers
*      and return true if it's only divisible by
*      itself and 1
*
*   >>
*
* PRIMALITY TEST
* Time Complexity: O(n)
*  >> Linear Time Complexity
*/
console.log('|  -------------------------------  |');
console.log('|  INICIO DO PROGRAMA - ALGORITMOS  |');
console.log('|  -------------------------------  |');
console.log('');
console.log('   ... isPrime ...');
function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            console.log('    ... por qual numero ?', i);
            return false;
        }
    }
    return true;
}
var numberDetect = 51;
console.log('  :: .... ');
console.log("  >>>>> " + numberDetect + " is prime? " + isPrime(numberDetect));
