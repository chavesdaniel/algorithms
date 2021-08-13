/*
* items = [1, 1, 2, 3, 5, 8, 13, ...]
*  calculates de NTH element
*
* FIBONACCI SEQUENCE
* Time Complexity: O(n)
*  >> Linear Time Complexity
*/

console.log('|  -------------------------------  |');
console.log('|  INICIO DO PROGRAMA - ALGORITMOS  |');
console.log('|  -------------------------------  |');

console.log('');
console.log('   ... calculatesNTHFibonacci ...');

function calculatesNTHFibonacci(nth: number): number {
	const numbers = [1, 1];

	console.log('  :: inicio numbers :: ', numbers);
	for (let i = 2; i < (nth + 1); i++) {
		numbers.push(numbers[i-2] + numbers[i-1]);
		console.log('   ... numbers estah valendo: ', numbers);
	}

	return numbers[nth];
}

const nthElement = 5;

console.log('  :: .... ');
console.log(`  >>>>> ${nthElement}th element ${calculatesNTHFibonacci(nthElement)}`);