/*
* items = [3, 4, 7, 7, 1]
*  calculates de sum of all
*
* SUM AS INPUT
* Time Complexity: O(n)
*  > Linear Time Complexity
*/
var array_items = [
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
var sum = 0;
for (var _i = 0, array_items_1 = array_items; _i < array_items_1.length; _i++) {
    var item = array_items_1[_i];
    sum += item;
    console.log('  . sum está valendo: ', sum);
}
console.log('  :: .... ');
console.log('  >>>>> ', sum);
