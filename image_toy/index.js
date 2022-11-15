let empty = [];
let primes = [2, 3, 5, 7, 11];
let misc = [1.1, true, "a", function() {
    console.log('Salom');
}];
console.log(misc);
console.log(empty);
console.log(primes);

let base = 1024;
let table = [base, base + 1, base + 2, base + 3];

console.log(base);
console.log(table);

let b = [[1, {x: 1, y: 2}],
[2, {x: 3, y: 4}],
[3, {x: 5, y: 6}]];
console.log(b)

let c = [[1, 2, 3,], [4, 5, 6, 7],[8, 9, 1, 2, 3]];
console.log(c)

let count = [1, , 3];
let undefs = [, ,];
console.log(count);
console.log(undefs);

let a = [1, 2, 3];
let f = [0, ...a, 4];
let digits = [0, ..."0123456789ABCDEF"];
console.log(digits)
console.log(a);
console.log(f);
