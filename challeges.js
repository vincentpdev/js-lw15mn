/***************************  Third Interview   ***********************************/

/*  Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.

Example: countTimes([1, 8, 9, 9, 10], 9) -> 2   */

function countTimes(array, value) {}

// console.log(countTimes([1, 8, 9, 9, 10], 9));

/*  Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for "wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.

Example: wordSearchLetterCounter(
  [
["D", "E", "Y", "H", "A", "D"],
["C", "B", "Z", "Y", "J", "K"],
["D", "B", "C", "A", "M", "N"],
["F", "G", "G", "R", "S", "R"],
["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.  */

function wordSearchLetterCounter(array1, letter) {}

// console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D"))

/*  Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'  */

// console.log(changeCase('a'))
// console.log(changeCase('B'))



/*  Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.  */

// console.log(effectString('hello WORLD', changeCase))

/*  Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.  */

function countTimes(arr, value) {}

// console.log(countTimes([1, 8, 9, 9, 10], 9)); //2

/* function countTimes(arr, value){
return arr.reduce((accum, element) => { 
(element === value) ? (accum += 1): accum; 
return accum; 
}, 0);
} */

/*  Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.
*/

function wordSearchLetterCounter(arr, value) {
}

// console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D")); // ➞ 3

/*  Create a function called "shorten". "shorten" takes three arguments (an array, a function, and an initial value). "shorten" is designed to shorten this array's multiple values to just one value by applying the callback function to each of the values in the array.
This is how it works:
- The shorten function will have an "accumulator value" which will initially be set to the initialValue argument. Its job is to accumulate the outputs of each call to the callback function.
- The array is iterated over, passing the accumulator value and the next array element to the callback function.
- The callback function's returned value becomes the new accumulator value
- The next loop executes with the new accumulator value.  */



function shorten(array, callbackFn, initial) {
  return array.reduce(callbackFn, initial);
}

/*
array.reduce(callbackFn, initialValue)

callbackFn(previousValue, currentValue) 
---> the callbackFn return value is added to an accumulator
---> after looping through the array, the (hidden) accumulator is returned

from test case:
accumulator = initialValue = 'Programming'

first loop:
accumulator = accumulator + " " + "is"
"Programming" + " is"

second loop:
accumulator = accumulator = " " + "so"
"Programming is" + " so"

etc...


*/

function concatWithSpace(str1, str2) {
  return `${str1} ${str2}`;
}

// function summation(array, callbackFn, initial){
//   return array.reduce(callbackFn,initial);
// }

// function sumTwoNum(num1, num2){
//   return num1 + num2;
// }

// console.log(summation([1,1,1], sumTwoNum, 5));

// Check that your 'shorten' function is working correctly by passing an array to it with the string values -- 'is', 'so', 'much' and 'fun!' as the first argument.
// console.log(shorten(['is', 'so', 'much','fun!'], concatWithSpace ,"Programming"))

//Write a function multiply() that multiples 2 numbers:

//If multiply(num1, numb2) is invoked with 2 arguments, it should return the multiplication of the 2 arguments.

//But if invoked with 1 argument const anotherFunc = multiply(num1), the function should return another function. The returned function when called anotherFunc(num2) performs the multiplication num1 * num2.



// console.log(multiply(4, 1))
// console.log(multiply(3, 3)); // => 9
// const double = multiply(2);
// console.log(double(5));  // => 10
// console.log(double(11)); // => 22

/*WEBSITE ANSWER */
function multiply(number1, number2) {
  
}

//Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

function createFunction() {}
/*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

console.log('Hello Brandon!');



/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
//ex : 5 - 1+2+3+4+5
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/


function addNumbers(num) {
}

// console.log(addNumbers(5))

// Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function

// console.log(addNumbers(number))

/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/



// function isPalindrome (str){}
// console.log(isPalindrome('LEVEL'))

/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

function between50And500(number) {}

/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

function divBy100(number) {}

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/


function negativeOrEven(number) {}
/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

// function passAllTests(arr,value){}
// const array = [negativeOrEven,divBy100]
// console.log(passAllTests(array, -100))

/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/


//const passArr = [between50And500,divBy100,negativeOrEven]
//console.log(passAllTests(passArr,300))
//console.log(passAllTests(passArr,250))


/*
QUESTION 1
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.
*/

//Example:
// const isOdd = num => num % 2 === 1;
// const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter()); // -> { true: 0, false: 0 }
// console.log(oddCounter(3)); // -> true
// console.log(oddCounter(2)); // -> false
// console.log(oddCounter()); // -> { true: 1, false: 1 }


// QUESTION 2
// Create a function "countChar" that takes two arguments (an input string and a target string).
// "countChar" will return the number of times the target string is found in the input string.

// Example:
// console.log(countChar('hello world', 'o'));// -> 2
// console.log(countChar('javascript', 'j')); // -> 1
// Note: Do not use any native JS methods, or loops.
//count char is problem 2


// console.log(countChar('hello world', 'o'));
// console.log(countChar('javascript', 'j'));

/*************************** Second Interview ***********************************/

/*
Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.

Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/



// console.log(countTimes([1, 8, 9, 9, 10], 9))// -> 2)

/*
  Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
  "wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.
  
  Example:
  wordSearchLetterCounter([
    ["D", "E", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "G", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "S", "S"]
  ], "D") ➞ 3
  "D" shows up 3 times: twice in first row, once in third row.
  */



// console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D"))

/*
  Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
  If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
  If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.
  
  Example:
  const isOdd = num => num % 2 === 1;
  const oddCounter = checkerLogger(isOdd);
  oddCounter(); -> { true: 0, false: 0 }
  oddCounter(3); -> true
  oddCounter(2); -> false
  oddCounter(); -> { true: 1, false: 1 }
  */

function checkerLogger(func) {}

// const isOdd = num => num % 2 === 1;
// const oddCounter = checkerLogger(isOdd);

// console.log(oddCounter())//; -> { true: 0, false: 0 }
// console.log(oddCounter(3)); //-> true
// console.log(oddCounter(2)); //-> false
// console.log(oddCounter()); //-> { true: 1, false: 1 }

/*************************** First Interview ***********************************/

/*
  Create a function "countChar" that takes two arguments (an input string and a target string).
  "countChar" will return the number of times the target string is found in the input string.
  
  Example:
  countChar('hello world', 'o'); -> 2
  countChar('javascript', 'j'); -> 1
  Note: Do not use any native JS methods, or loops.
  */



/*
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.
example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/



function memoryMaker() {
}

const iRemember = memoryMaker();
// console.log(iRemember('hello')); //-> ['hello']
// console.log(iRemember(1)); //-> ['hello', 1]
// console.log(iRemember('world')); //-> ['hello', 1, 'world']
// iRemember(true); //-> ['hello', 1, 'world', true]

/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
*/

/

function sumAllElements(array, initial, sum = 0, i = 0) {}


// console.log(sumAllElements([1,2,3,4], 10)) //-> 20

/*
I have an array stock_prices_yesterday where:
- The indices are the time in minutes past trade opening time, which was 9:30am local time
- The values are the prices in dollars of Apple stock at the time
For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
Write a function 'bestProfit' for computing the best profit I could have made from 1 purchase
and 1 sale of 1 Apple stock yesterday
Return 0 if no profit is possible OR if input is invalid.
More examples:
bestProfit([ 100, 1, 123, 120 ]); // 122
bestProfit([ 100, 100, 100, 100 ]); // 0
bestProfit([ 100, 88, 44, 2 ]); // 0
bestProfit([ 100, 88, 99, 300 ]); // 212
*/




console.log(bestProfit([100, 1, 123, 120])); // 122
console.log(bestProfit([100, 100, 100, 100])); // 0
console.log(bestProfit([100, 88, 44, 2])); // 0
console.logbestProfit([100, 88, 99, 300]); // 212

//Create a function "fastCache" that takes one argument (a function) and returns a function. When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function (cb) again.



// const multiplyBy2 = num => num * 2;
// const cachedMultiplyBy2 = fastCache(multiplyBy2);
// console.log(cachedMultiplyBy2(100)); // -> 200
// console.log(cachedMultiplyBy2(150)); // -> 300
// console.log(cachedMultiplyBy2(100)); // -> 200 // from the cache object

// function fastCache(cb) {
//   let obj = {};
//   return function(num) {
//     if (obj[num]) return obj[num];
//     else  obj[num] = cb(num);
//       return cb(num);
//   };
// }


/*Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
To illustrate:
largestSwap(27) ➞ false
largestSwap(43) ➞ true

If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.*/

//input: number
//output: boolean
// swap input's integer place
// if input < integer place swapper return boolean 

// const largestSwap = (num) => {
//   let first = num % 10
//   let second = num % 100 - first
//   let firstDigit= second/10
//   let secondDigit = first*10
//   let newNum =firstDigit + secondDigit
//   if (newNum > num){
//     return false
//   }else{
//     return true
//   }
// }

// function largestSwap(num) {
// 	let swap = num.toString().split("").reverse().join("")
// 	if (num >= swap) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// function largestSwap(num) {
//   if(Math.floor(num/10)>= num%10) return true;
//   // first (10's) digit = Math.floor(num/10)
//   // second (1's) digit = num%10
//   return false;
// }
//Examples
// console.log(largestSwap(14)); //➞ false
// console.log(largestSwap(53)); //➞ true
// console.log(largestSwap(99)); //➞ true




// Create a function to return the amount of potatoes there are in a string.

// function spudFinder(str){
//   let potatoArr = str.split('')
//   let counter = 0
//   for (let i =0; i<potatoArr.length; i++) {
//     if (potatoArr[i]=== "p" && potatoArr[i+1]=== "o" && potatoArr[i+2]=== "t" && potatoArr[i+3]=== "a" && potatoArr[i+4]=== "t" && potatoArr[i+5]=== "o") {
//       counter += 1;
//     }
//   }
//   return counter
// }

// function potatoes(string) {
//    //const newStr = string.split("potato").length - 1;
//    const newStr = string.split("potato").length - 1;
//   //  console.log(newStr);
// }

// function potatoes(string, count = 0){
//   if(string.length === 0){return count}
//   let potato = "potato";
//   let innerCounter = 0
//   for(let i = 0; i <=potato.length-1; i++){
//     if(potato[i]===string[i]){innerCounter += 1}
// 	}
//   if(innerCounter === potato.length)(count+=1)
//  	return potatoes(string.slice(1), count)
// }

//
//function potatoes(str){
//return str.match(/potato/g).length;
//};
//
//
//
//console.log(potatoes("potato")); // ➞ 1
//console.log(potatoes("potatopotato")); // ➞ 2
//console.log(potatoes("potatoapple")); // ➞ 1