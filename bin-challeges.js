//http://csbin.io/callbacks
// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log("Hello, world!");

// Challenge 1
/* 
Create a function addTwo that accepts one input and adds 2 to it.
*/
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
//console.log(addS("pizza"));
//console.log(addS("bagel"));

// Challenge 3
/* 
Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
}

//console.log(map([1, 2, 3], addTwo));

// Challenge 4
/* 
The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
*/
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
  alphabet += char;
});
//console.log(alphabet);

// Challenge 5
/* 
In the first part of this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
*/
function mapWith(array, callback) {
  const newArr = [];
  forEach(array, (item) => {
    newArr.push(callback(item));
  });
  return newArr;
}

//console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6
/* 
The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
*/

function reduce(array, callback, initialValue) {
  let accum;
  if (Object.keys(arguments).length > 2) {
    accum = initialValue;
  } else {
    // InitialValue not provided
    accum = array[0];
    array.shift();
  }

  forEach(array, (item) => {
    accum = callback(accum, item);
  });
  return accum;
}
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
//console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
 */
function intersection(...arrays) {
  //this works because if acc is not provided as a param, it is set to the first array. So in subsequent calls we just filter the arrays
  // to return items that were included in the accum array
  return arrays.reduce((acc, array) => {
    return array.filter((item) => acc.includes(item));
  });
}
/*
console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]
*/
// Challenge 8
/* 
Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/
function union(...arrays) {
  return arrays.reduce((acc, array) => {
    const newItem = array.filter((item) => !acc.includes(item));
    return acc.concat(newItem);
  });
}

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
/* 
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
*/
function objOfMatches(array1, array2, callback) {
  return array2.reduce((res, value, index) => {
    if (value === callback(array1[index])) {
      res[array1[index]] = value;
    }
    return res;
  }, Object.create(null));
}
/* 
console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);
*/
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
/* 
Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
*/
function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((accum, item) => {
    accum[item] = arrCallbacks.map((fn) => fn(item));
    return accum;
  }, Object.create(null));
}
/*
console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
*/
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
/* 
Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.
*/
function objectFilter(obj, callback) {
  const newObj = Object.create(null);
  for (let [key, value] of Object.entries(obj)) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      callback(key) === value
    )
      newObj[key] = value;
  }
  return newObj;
}
/* 
const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));
*/
// Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
/* Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.
 */
function majority(array, callback) {
  let trueCount = 0;
  let falseCount = 0;
  array.forEach((item) => {
    callback(item) ? trueCount++ : falseCount++;
  });
  return trueCount > falseCount ? true : false;
}

// /*** Uncomment these to check your work! ***/
/*
const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd));
// should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
*/
// Challenge 13
/* 
Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
*/
function prioritize(array, callback) {
  return array.reduce((accum, item) => {
    callback(item) ? accum.unshift(item) : accum.push(item);
    return accum;
  }, []);
}

// /*** Uncomment these to check your work! ***/
/*
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
);

// should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];
*/
// Challenge 14
/* 
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.
*/

function countBy(array, callback) {
  return array.reduce((obj, item) => {
    let result = callback(item);
    obj[result] ? (obj[result] = obj[result] + 1) : (obj[result] = 1);
    return obj;
  }, Object.create(null));
}

// /*** Uncomment these to check your work! ***/
/*
console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }
*/
// Challenge 15
/* 
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.
*/
function groupBy(array, callback) {
  return array.reduce((obj, item, index, arr) => {
    let res = callback(item);
    obj[res] = arr.filter((element) => parseInt(element) === parseInt(res));
    return obj;
  }, Object.create(null));
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
//console.log(groupBy(decimals, floored));
// should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
/* 
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.
*/
function goodKeys(obj, callback) {
  const arr = [];
  for (let [key, value] of Object.entries(obj)) {
    if (callback(value)) arr.push(key);
  }
  return arr;
}

// /*** Uncomment these to check your work! ***/

const sunny = {
  mac: 'priest',
  dennis: 'calculating',
  charlie: 'birdlaw',
  dee: 'bird',
  frank: 'warthog',
};
/*
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird));
*/
// should log: ['charlie', 'dee']

// Challenge 17
/* 
Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).
*/
function commutative(func1, func2, value) {
  return func1(func2(value)) === func2(func1(value)) ? true : false;
}

// /*** Uncomment these to check your work! ***/
/*
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11));
// should log: true
console.log(commutative(multBy3, subtract5, 10));
// should log: false
console.log(commutative(divBy4, subtract5, 48));
// should log: false
*/
// Challenge 18
/* 
Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object.
*/

function objFilter(obj, callback) {
  const newObj = Object.create(null);
  for (let [key, value] of Object.entries(obj)) {
    if (value === callback(parseInt(key))) newObj[key] = value;
  }
  return newObj;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half));
// should log: { 2: 1, 6: 3 }

// Challenge 19
/* 
Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input.
*/
function rating(arrOfFuncs, value) {
  let trueCnt = arrOfFuncs.reduce((accum, fn) => {
    if (fn(value)) accum++;
    return accum;
  }, 0);
  return (trueCnt / arrOfFuncs.length) * 100;
}

// /*** Uncomment these to check your work! ***/
// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes("6");
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
/* 
Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.
*/
function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((accum, fn) => {
    return fn(accum) || fn(value);
  }, '');
}

// /*** Uncomment these to check your work! ***/
// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, "cat"));
// // should log: 'CATcatCATcat'

// Challenge 21
/* 
Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.
*/
function highestFunc(objOfFuncs, subject) {
  let largest = Number.NEGATIVE_INFINITY;
  let rightKey = undefined;
  for (let [key, fn] of Object.entries(objOfFuncs)) {
    if (fn(subject) > largest) {
      largest = fn(subject);
      rightKey = key;
    }
  }
  return rightKey;
}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
/* 
Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. combineOperations should pass the starting value into the first function in the array. combineOperations should pass the value returned by the first function into the second function, and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array.
*/
function combineOperations(startVal, arrOfFuncs) {
  return arrOfFuncs.reduce((accum, fn) => {
    return fn(accum);
  }, startVal);
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

function addTen(num) {
  return num + 10;
}

// // /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
/* 
Define a function myFunc that takes an array and a callback. myFunc should pass each element from the array (in order) into the callback. If the callback returns true, myFunc should return the index of the current element. If the callback never returns true, myFunc should return -1;
*/

function myFunc(array, callback) {
  return array.findIndex(callback);
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOddAgain(num) {
  return num % 2 !== 0;
}
/*
// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOddAgain)); // Output should be 1
// console.log(myFunc(evens, isOddAgain)); // Output should be -1

// Challenge 24
/* Write a function myForEach that accepts an array and a callback function. Your function should pass each element of the array (in order) into the callback function. The behavior of this function should mirror the functionality of the native .forEach() JavaScript array method as closely as possible.
 */
function myForEach(array, callback) {
  for (let item of array) {
    callback(item);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums2 = [1, 2, 3];
// myForEach(nums2, addToSum);
// console.log(sum); // Should output 6

// Exrcises taken from http://csbin.io/closures
// Some solutions can be found at https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/closures.js
//Closure Exercises

console.log('Hello, world!');
/* Challenge 1
Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works. */
// CHALLENGE 1
function createFunction() {
  function printHello() {
    console.log('hello');
  }
  return printHello;
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');

/* 
Challenge 2
Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
*/

// CHALLENGE 2
function createFunctionPrinter(input) {
  function printInput() {
    console.log(input);
  }
  return printInput;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');

/* 
Challenge 3
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.
*/
// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

// Ryan's Note: Should print 1, 2, 3, 1, 4

function addByX(x) {
  function addByNum(num) {
    return num + x;
  }
  return addByNum;
}

// /*** Uncomment these to check your work! ***/

const addByTwo = addByX(2);

console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); // => should return 4
console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
console.log(addByFour(4)); // => should return 8
console.log(addByFour(5)); // => should return 9

/* 
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/
// CHALLENGE 4
function once(func) {
  let counter = 0;
  let res = undefined;
  function runOnce(num) {
    if (counter === 0) {
      res = func(num);
      counter++;
    }

    return res;
  }
  return runOnce;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

/* 
Challenge 5
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/
// CHALLENGE 5
function after(count, func) {
  let counter = 0;
  function runAfter() {
    counter++;
    if (count === counter) {
      func();
    }
  }
  return runAfter;
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log('hello');
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed

/* 
Challenge 6
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/

// CHALLENGE 6
function delay(func, wait, ...rest) {
  function delayRun() {
    func(...rest);
  }
  setTimeout(delayRun, wait);
}

// CHALLENGE 7
/* Challenge 7
Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
*/
function rollCall(names) {
  let counter = 0;
  function runCall() {
    if (counter < names.length) {
      console.log(names[counter]);
      counter++;
    } else {
      console.log('Everyone accounted for');
    }
  }
  return runCall;
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'

// CHALLENGE 8

/* Challenge 8
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.
*/
function saveOutput(func, magicWord) {
  const log = {};
  function funcAndLog(num) {
    if (num !== magicWord) {
      log[num] = func(num);
      return log[num];
    } else {
      return log;
    }
  }
  return funcAndLog;
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9

/* Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
 */
function cycleIterator(array) {
  let counter = 0;
  function cyclingItems() {
    counter++;
    return array[(counter - 1) % array.length];
  }
  return cyclingItems;
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10

/* 
Challenge 10
Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

*/
function defineFirstArg(func, arg) {
  function insideFn(second) {
    return func(arg, second);
  }
  return insideFn;
}

// /*** Uncomment these to check your work! ***/

const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

// Ryan's Note: THis is basically currying?

// CHALLENGE 11

/* 
Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.
*/
function dateStamp(func) {
  const logTime = {};
  function stamping(input) {
    logTime.date = new Date();
    logTime.output = func(input);
    return logTime;
  }
  return stamping;
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
/* 
Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).
*/
function censor() {
  const phrases = new Map();
  function actualFn(...args) {
    if (args.length === 2) {
      phrases.set(args[0], args[1]);
    } else {
      let input = args[0];
      for (let [key, value] of phrases) {
        let regex = new RegExp(key, 'g');
        input = input.replace(regex, value);
      }
      return input;
    }
  }
  return actualFn;
}

// /*** Uncomment these to check your work! ***/

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.'));

// => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
/* 
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret
*/
function createSecretHolder(secret) {
  let num = secret;
  const obj = {
    getSecret() {
      return num;
    },
    setSecret(n) {
      num = n;
    },
  };
  return obj;
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5);
console.log(obj.getSecret()); // => returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // => returns 2

// CHALLENGE 14
/* 
Write a function, callTimes, that returns a new function. The new function should return the number of times itâs been called.
*/
function callTimes() {
  let counter = 0;
  function insideFn() {
    counter++;
    return counter;
  }
  return insideFn;
}

// /*** Uncomment these to check your work! ***/

let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2

// CHALLENGE 15
/* 
Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.
*/
function russianRoulette(num) {
  let count = 0;
  function closureFn() {
    count++;
    if (count < num) return 'click';
    else if (count === num) return 'bang';
    else return 'reload to play again';
  }
  return closureFn;
}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'

// CHALLENGE 16
/* 
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.
*/
function average() {
  let counter = 0;
  let total = 0;
  function closureFn(num) {
    if (num === undefined) {
      return counter === 0 ? 0 : total / counter;
    }
    counter++;
    total += num;
    return total / counter;
  }
  return closureFn;
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
/* 
Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.
*/
function makeFuncTester(arrOfTests) {
  function closureFn(callback) {
    return arrOfTests.every((couple) => callback(couple[0]) === couple[1]);
  }
  return closureFn;
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
/* 
Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that delted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.
*/
function makeHistory(limit) {
  const memory = [];
  function closureFn(input) {
    if (input !== 'undo') {
      if (memory.length >= limit) memory.shift();
      memory.push(input);
      return input + ' done';
    } else {
      if (memory.length === 0) return 'nothing to do';
      let remove = memory.pop();
      return remove + ' undone';
    }
  }
  return closureFn;
}

// /*** Uncomment these to check your work! ***/

const myActions = makeHistory(2);
console.log(myActions('jump'));
// => should log 'jump done'
console.log(myActions('undo'));
// => should log 'jump undone'
console.log(myActions('walk'));
// => should log 'walk done'
console.log(myActions('code'));
// => should log 'code done'
console.log(myActions('pose'));
// => should log 'pose done'
console.log(myActions('undo'));
// => should log 'pose undone'
console.log(myActions('undo'));
// => should log 'code undone'
console.log(myActions('undo'));
// => should log 'nothing to undo'

// CHALLENGE 19
/* 
Inspect the commented out test cases carefully if you need help to understand these instructions.

Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

On the SECOND invocation of the PLAYER function, it will return either:

the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
the string 'bust' if that sum is over 21.

If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
the string 'bust' if the new sum is over 21.

And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
You may assume that the given array is long enough to give a 'bust' before running out of numbers.

BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.
*/
function blackjack(array) {
  let dealerCount = 0;
  function dealer(a, b) {
    let playerCount = 0;
    let total = a + b;
    function player() {
      if (total === 'bust') return 'you are done!';
      dealerCount++;
      playerCount++;
      if (playerCount === 1) return total;
      total += array[dealerCount - 2];
      if (total > 21) {
        total = 'bust';
        dealerCount--;
      }
      return total;
    }
    return player;
  }
  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([
  2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!

/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  const person = {};
  person.name = name;
  person.age = age;
  return person;
}

const vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

const personStore = {
  greet() {
    console.log('hello');
  },
};

// /********* Uncomment this line to test your work! *********/
//personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
//console.log(sandra.name); // -> Logs 'Sandra'
//console.log(sandra.age); //-> Logs 26
//sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

//sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  this.greet = function () {
    console.log('hello');
  };
}

// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor();
//simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
//console.log(mike.name); // -> Logs 'Mike'
//console.log(mike.age); //-> Logs 30
//mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
PersonConstructor.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

//mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('hello');
  }
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass();
//george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

class DeveloperClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hello World, my name is ${this.name}`);
  }
}

/********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32);
//console.log(thai.name); // -> Logs 'Thai'
//thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

function adminFactory(name, score) {
  const admin = Object.create(adminFunctionStore);
  admin.name = name;
  admin.score = score;
  return admin;
}

const adminFunctionStore = Object.create(userFunctionStore);
adminFunctionStore.type = 'Admin';

/* Put code here for a method called sharePublicMessage*/

const adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/

//console.log(adminFromFactory.sayType);
//adminFromFactory.sayType(); // -> Logs "I am a Admin"
userFunctionStore.sharePublicMessage = function () {
  console.log('Welcome users!');
};
//adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"

/****************************************************************
EXTENSION: MIXINS
****************************************************************/

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!');
  }
}

const robotMixin = {
  skin: 'metal',
  speak: function () {
    console.log(`I have ${this.legs} legs and am made of ${this.skin}`);
  },
};

let robotFido = new Dog();

Object.assign(robotFido, robotMixin);

/********* Uncomment to test your work! *********/
robotFido.speak(); // -> Logs "I am made of metal"

//Exercises taken from http://csbin.io/async

/* CHALLENGE 1 */
/* 
Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? Howdy first or Partnah first?
*/

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// Ryan's Note: Output should be "Partnah" and then "Howdy"
//testMe(); // what order should these log out? Howdy or Partnah first?

/*   CHALLENGE 2 */
/* 
Create a function delayedGreet that console logs welcome after 3 seconds.
*/

function delayedGreet() {
  setTimeout(() => console.log('welcome'), 3000);
}
// Uncomment the following line to check your work!
//delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 
Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.
*/

function helloGoodbye() {
  console.log('hello');
  setTimeout(() => console.log('good bye'), 3000);
}
// Uncomment the following line to check your work!
//helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 
Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.
*/

function brokenRecord() {
  function printHi() {
    console.log('hi again');
  }
  setInterval(printHi, 1000);
}

// Uncomment the following line to check your work!
//brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 
Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.
*/

function limitedRepeat() {
  function printHi() {
    console.log('hi again');
  }
  function clear() {
    clearInterval(id);
  }
  printHi();
  const id = setInterval(printHi, 1000);
  setTimeout(clear, 5000);
}
// Uncomment the following line to check your work!
//limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 
Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.

everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.

Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time.
What do you expect to happen?

*/

function everyXsecsForYsecs(func, interval, duration) {
  const id = setInterval(func, interval * 1000);
  function clear() {
    clearInterval(id);
  }
  setTimeout(clear, duration * 1000);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
//everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 
Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
*/

function delayCounter(target, wait) {
  function closureFn() {
    let i = 1;
    const id = setInterval(() => {
      console.log(i);
      i++;
      if (i > target) clearInterval(id);
    }, wait);
  }
  return closureFn;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
//const countLogger = delayCounter(3, 1000);
//countLogger();
//After 1 second, log 1
//After 2 seconds, log 2
//After 3 seconds, log 3

/* CHALLENGE 8 
Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.

Hint: take a look at the Promise object docs on MDN.
*/

function promised(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), 2000);
  });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
//const createPromise = promised("wait for it...");
//createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.seconds = 0;
    this.id = undefined;
  }
  start() {
    this.id = setInterval(() => {
      this.seconds++;
      this.cb(this.seconds % 60);
    }, 1000);
  }
  reset() {
    this.seconds = 0;
    clearInterval(this.id);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => {
//   console.log(val);
// });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//   clock.reset();
//   console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  let counter = 0;
  let hasRan = false;
  function closureFn() {
    let id = undefined;
    if (!hasRan) {
      ///this is the first run
      id = setInterval(() => counter++, 1);
      hasRan = true;
      return callback();
    } else {
      //for subsequent runs
      if (counter < interval) {
        // Not enough time has elapsed
        counter = 0;
        clearInterval(id);
        id = setInterval(() => counter++, 1);
        return undefined;
      } else {
        //Enough time has elapsed
        counter = 0;
        clearInterval(id);
        id = setInterval(() => counter++, 1);
        return callback();
      }
    }
  }
  return closureFn;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() {
  return 'hi';
}
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function () {
  console.log(giveHiSometimes());
}, 2000); // -> undefined
setTimeout(function () {
  console.log(giveHiSometimes());
}, 4000); // -> undefined
setTimeout(function () {
  console.log(giveHiSometimes());
}, 8000); // -> 'hi'

function printHello() {
  console.log('Hello');
}
function blockFor1Sec() {
  const array = [];
  for (let i = 0; i < 30000000; i++) {
    array.push(i);
  }
  console.log('Array insertion finisheds');
}
setTimeout(printHello, 0);
blockFor1Sec();
console.log('Me first!');
