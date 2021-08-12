/*
* items = [
*	 {id: 'a', val:10, w: 3}
*  {id: 'b', val:6, w: 8}
*  {id: 'c', val:3, w: 3}
 ]
 maxWeight = 8
*
* KNAPSACK PROBLEM
*/

const items = [
	{id: 'a', val: 10, w: 3},
	{id: 'b', val: 6, w: 8},
	{id: 'c', val: 3, w: 3},
	{id: 'd', val: 7, w: 1},
	{id: 'f', val: 5, w: 3},
];

console.log('|  -------------------------------  |');
console.log('|  INICIO DO PROGRAMA - ALGORITMOS  |');
console.log('|  -------------------------------  |');

console.log('');
console.log('... imprimindo items ...');
console.log(' >> items: ', items);

const maxWeight = 8;
let actualWeight = 0, possiveisCombinacoes = [];
let segundaSacola = [];

for (let index = 0; index < items.length; index++) {
	const elementoPrimeiroArray = items[index];

		let pesoAtual = elementoPrimeiroArray.w;

		if (pesoAtual > maxWeight) {
			continue;
		}

		for (let index2 = index + 1; index2 < items.length; index2++) {
			const elementoComparacao = items[index2];

			if ((pesoAtual + elementoComparacao.w) < maxWeight) {
				console.log('>>> colocando na segunda sacola');
				segundaSacola.push([elementoPrimeiroArray, elementoComparacao]);
			}

		}
}

console.log('segundaSacola', segundaSacola);