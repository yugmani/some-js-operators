// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Remainder %
console.log(10 % 4); // when 10 is divided by 4, remainder is 2;
const totalCost = 35000;
const rate = 9;
console.log(totalCost % rate); //8;

//Exponentian **
console.log(4 ** 3); // 4³ = 64
const cube = 21;
console.log(cube ** 3); //9261
console.log(25 ** (1 / 2)); // square root of 25 = 5
console.log(324 ** 0.5); // square root of 324 = 18
console.log(8 ** (1 / 3)); // cube root of 8 = 2

// Chaining assignments
let a, b, c;
a = 20;
b = a;
c = b;
console.log('a: ' + a); // 20
console.log('b: ' + b); // 20
console.log('c: ' + c); // 20
a === c ? console.log('a = c') : console.log('a != c'); // a = c

//MODIFY IN PLACE
let n = 5;
n = n + 3;
console.log(n); // 8
n += 2;
console.log(n); // 8 + 2 = 10;

let m = 11;
m = m - 2;
console.log(m); // 9
m -= 3;
console.log(m); // 6;

let p = 4;
p = p * 3;
console.log(p); // 12
p *= 2;
console.log(p); //24

let q = 30;
q = q / 5;
console.log(q); // 6
q /= 2;
console.log(q); // 3

// INCREMENT & DECREMENT
let counter = 10;
counter++; //postfix form
console.log(counter); //11
++counter; //prefix form
console.log(counter); // 12

let countDown = 9;
countDown--; //postfix form
console.log(countDown); //8
--countDown; //prefix form
console.log(countDown); //7;

// Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.
// The prefix form returns the new value
// while the postfix form returns the old value (prior to increment/decrement).

let count = 3;
let newCount = ++count;
console.log(newCount); // 3 + 1 = 4

let id = 100;
let newId = id++;
console.log(newId); // 100 (? prvious value of id is assigned to newId);
console.log(id); // 101  (but value of id is canged)

// Boolean is the result
// All comparison operators return a boolean value:

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.
console.log(2 > 1); //true
console.log(3 < 1); //false
console.log(2 != 1); //true
console.log(1 === 2 - 1); //true
console.log('1' === 2 - 1); //false

let isTrue = 3 > 1;
console.log(isTrue); //true

console.log('Z' > 'A'); //true
console.log('Glow' > 'Glee'); //true
console.log('Bee' > 'Be'); //true
console.log('2' > 1); //true
console.log('01' == 1); //true
console.log('01' === 1); //false
console.log(true == 1); //true
console.log(true === 1);
false;
console.log(false == 1); //false
console.log(false == 0); //true
console.log(false === 0); //false
console.log('' == false); //true
console.log('' === false); //false
console.log('is null = undefined? ', null == undefined); // true

console.log('is null strictly same as undefined? ', null === undefined); // false
// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.
console.log('Is null greater than undefined? ', null > undefined); // false
console.log('Is null not equal to undefined? ', null != undefined); // false
console.log('Is null not strictly equal to undefined? ', null !== undefined); // true

// Strange result: null vs 0
console.log('Is null greater than null?', null > 0); //false
console.log('Is null equal to 0?', null > 0); //false
console.log('Is null greater than or equal to null?', null >= 0); //true
// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

// An incomparable undefined
console.log('Is undefined greater than 0?', undefined > 0); //false
console.log('Is undefined less than to 0?', undefined < 0); //false
console.log('Is undefined strictly equal to 0?', undefined == 0); //false

// Why does it dislike zero so much? Always false!

// We get these results because:

// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// The equality check (3) returns false because undefined only equals null, undefined, and no other value.

// A funny consequence
// It is possible that at the same time:

// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.
let r = 0;

let s = '0';

console.log(Boolean(r)); //false;
console.log(Boolean(s)); //true;

console.log(r == s); //true
console.log(r === s); //false

// From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.

// Tasks from https://javascript.info/comparison
// Comparisons
// What will be the result for these expressions?
console.log(5>4);   //true;
console.log('apple' > 'pineapple'); false
console.log('2' > '12');  // true (why?)
console.log(undefined == null);   //true;
console.log(undefined === null);    //false
console.log(null == '\n0\n'); //false
console.log(null === +'\n0\n'); //false (different types)
