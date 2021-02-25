// MATT OBJECT (Properties and Methods for numbers)

// Properties
console.log(Math.PI);

// Methods
// Round Method (Rounds the number to the nearest whole number)
let roundNumOne = Math.round(7.7);
console.log(roundNumOne);
let roundNumTwo = Math.round(2.25);
console.log(roundNumTwo);
let roundNumThree = Math.round(-1.1);
console.log(roundNumThree);

// Floor Method (Rounds the number down)
// Removes the numbers after the decimal on a number.
let floorNum = Math.floor(2.9);
console.log(floorNum);

// Random Method (Returns a number from 0 up to less than 1)
let randomNumber = Math.random();
randomNumber *= 6;
randomNumber = Math.floor(randomNumber);
randomNumber++;
// randomNumber = randomNumber * 6;
// For this example returns a random whole number from 1 to 6 
console.log(randomNumber);

// Ceil Method (Rounds the number up)
let ceilNum = Math.ceil(1.2);
console.log(ceilNum);
let ceilZero = Math.ceil(0);
console.log(ceilZero);

// Random whole number using ceil (There is a chance with Math.random, that it can return to zero, but this will usually work)
let randomNum = Math.random();
randomNum *= 2;
randomNum = Math.ceil(randomNum);
// console.log(randomNum);

