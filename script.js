// ... - это Rest оператор. Аналог spread, только работает наоборот.
// Rest оператор ставиться в конце аргументов, Spread в начале.
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usege');

// Параметры по умолчанию 
// basis = 5 - параметр по умолчанию. В случае если аргумент basis не будет происан в вызове функции, то он пример параметр по умолчанию равный 5
function calcOrDouble (number, basis = 5) {
    console.log(number * basis);
}

calcOrDouble(3);