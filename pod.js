////////////////////////////
//     Challenge 1
////////////////////////////

const repeater = (char, n = 5) =>
  n === 1 ? char : repeater(char + char[0], n - 1);

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j'));// -> 'jjjjj'

////////////////////////////
//     Challenge 2
////////////////////////////

const isEven = (n) => (n === 0 ? true : n === 1 ? false : isEven(n - 2));

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(isEven(0)); // -> true
// console.log(isEven(5)); // -> false
// console.log(isEven(10)); // -> true

////////////////////////////
//     Challenge 3
////////////////////////////

function factorial(num, product = 1) {
  if (num === 0) return product;
  return factorial(num - 1, product * num);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1

////////////////////////////
//     Challenge 4
////////////////////////////

function getLength(array, i = 0) {
  if (!array[i]) return i;
  return getLength(array, i + 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5

////////////////////////////
//     Challenge 5
////////////////////////////

function pow(base, exponent) {
  if (exponent === 0) return 1;
  return pow(base, exponent - 1) * base;
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

////////////////////////////
//     Challenge 6
////////////////////////////

function flow(input, funcArray, i = 0) {
  // if(!funcArray[i]) return input
  // return flow(funcArray[i](input), funcArray, i+1)
  return funcArray.reduce((a, c) => c(a), input);
}
// 2 = input
// a = 2, c = funcArray[0](2)
// c(a) = 4
// a = 4, c = funcArray[1](4)
// c(a) = 11

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) {
  return num * 2;
}
function add7(num) {
  return num + 7;
}
function modulo4(num) {
  return num % 4;
}
function subtract10(num) {
  return num - 10;
}
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7

////////////////////////////
//     Challenge 7
////////////////////////////

function fib(n, last = 0, next = 1) {
  if (n === 0) return last;
  return fib(n - 1, next, next + last);
}

// To check if you've completed the challenge, uncomment this code!
// console.log(fib(1)); // -> 1
// console.log(fib(2)); // -> 1
// console.log(fib(7)); // -> 13

////////////////////////////
//     Challenge 8
////////////////////////////

// function headsOrTails(n) {
// 	if(n===1) return [['heads'],['tails']]
// 	return headsOrTails(n-1).map(el=>[...el,'heads']).concat(headsOrTails(n-1).map(el=>[...el,'tails']))
// }

function headsOrTails(n) {
  let cache = [['heads'], ['tails']];
  if (n === 0) return [];
  for (n; n > 1; n--) {
    let h = cache.map((el) => [...el, 'heads']);
    let t = cache.map((el) => [...el, 'tails']);
    cache = [...h, ...t];
  }
  return cache;
}

// To check if you've completed the challenge, uncomment this code!
// console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
// console.log(headsOrTails(3));
// -> [
//   ['heads', 'heads', 'heads'],
//   ['heads', 'heads', 'tails'],
//   ['heads', 'tails', 'heads'],
//   ['heads', 'tails', 'tails'],
//   ['tails', 'heads', 'heads'],
//   ['tails', 'heads', 'tails'],
//   ['tails', 'tails', 'heads'],
//   ['tails', 'tails', 'tails'],
// ]

////////////////////////////
//     Challenge 9
////////////////////////////

function getAllCombos(arr) {
  let result = [[]];
  for (let value of arr) {
    const str = [...result];
    for (let i of str) {
      result.push(i.concat(value));
    }
  }
  return result;
}

// using length as counter
// if(something is empty) return []

//create an array into indexes
//use loop within a loop

// 012
// 01*
// 02*
// 0**
// *12  bc
// *1*  b
// **2  c
// ***  []

// 01 ab
// 0  a
// 1  b
// *  []

// abc  = 3
// ab   = 2
// a    = 1
// *    = 0

// To check if you've completed the challenge, uncomment this code!
console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
console.log(getAllCombos(['a', 'b', 'c']));
console.log(['a', 'b', 'c']);
// -> [
//   ['a', 'b', 'c'],
//   ['a', 'b'],
//   ['a'],
//   ['b'],
//   ['a', 'c'],
//   ['b', 'c'],
//   ['c'],
//   [],
// ]
