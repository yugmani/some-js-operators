// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// Remainder %
console.log(10 % 4);  // when 10 is divided by 4, remainder is 2;
const totalCost = 35000;
const rate = 9;
console.log(totalCost % rate); //8;

//Exponentian **
console.log(4 ** 3)   // 4³ = 64
const cube = 21;
console.log(cube ** 3);   //9261
console.log(25 ** (1/2));   // square root of 25 = 5
console.log(324 ** 0.5);   // square root of 324 = 18
console.log(8 ** (1/3));  // cube root of 8 = 2

// Chaining assignments
let a, b, c;
a = 20;
b = a;
c = b;
console.log("a: " + a);   // 20
console.log("b: " + b);  // 20
console.log("c: " + c);   // 20
a === c ? console.log("a = c") : console.log("a != c");   // a = c

//MODIFY IN PLACE
let n = 5;
n = n + 3;
console.log(n); // 8 
n += 2;
console.log(n); // 8 + 2 = 10;

let m = 11;
m = m - 2;
console.log(m);   // 9
m -= 3;
console.log(m); // 6;

let p = 4;
p = p * 3;
console.log(p);   // 12
p *= 2;
console.log(p);   //24

let q = 30;
q = q / 5;
console.log(q); // 6
q /= 2;
console.log(q); // 3


// INCREMENT & DECREMENT
let counter = 10;
counter++;    //postfix form
console.log(counter); //11
++counter;    //prefix form
console.log(counter); // 12

let countDown = 9;
countDown--;    //postfix form
console.log(countDown); //8
--countDown;    //prefix form
console.log(countDown); //7;


// Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.
// The prefix form returns the new value 
// while the postfix form returns the old value (prior to increment/decrement).

let count = 3;
let newCount = ++count;
console.log(newCount);  // 3 + 1 = 4

let id = 100;
let newId = id++;
console.log(newId);   // 100 (? prvious value of id is assigned to newId);
console.log(id);  // 101  (but value of id is canged)