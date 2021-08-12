/*
* items = [3, 4, 7, 7, 1]
*  calculates de sum of all
*
* SUM AS INPUT
* Time Complexity: O(n)
*  > Linear Time Complexity
*/

const array_items = [
	3,
	4,
	7,
	7,
	1,
];

console.log('|  -------------------------------  |');
console.log('|  INICIO DO PROGRAMA - ALGORITMOS  |');
console.log('|  -------------------------------  |');

console.log('');
console.log('... imprimindo array_items ...');
console.log(' >> array_items: ', array_items);

let sum = 0;
for (const item of array_items) {
	sum += item;
	console.log('  . sum está valendo: ', sum);
}

console.log('  :: .... ');
console.log('  >>>>> ', sum);