// TEMPLATE LITERALS
// It's a new way to create and concatenate strings.

// Example of Template Literal
// Need to use backticks (``) instea of quotes ('' or "")
const example = `This is a Template Literal`;
console.log(example);

// Template Literals recognize line breaks
// Example of line break in a regular string
const linesOne = "First line\nSecond line";
console.log(linesOne);
// const linesOne = "First line
// Second line";

// Example of line break in a Template Literal
const linesTwo = `First line
Second line`;
console.log(linesTwo);

// Example of sting concatenation
const myName = "Stephanie" + " " + 'Miller';
console.log(myName);

// Example of Expression Interpolation (AKA String Concatenation) with a template literal
// Uses ${} instead of using plus sign +
let fullName = `Stephanie${" "}Miller`;
console.log(fullName);
const middleName = `Roxanne`;
fullName = `Stephanie ${middleName} Miller`;
console.log(fullName);

let nameAge = `My name is Stephanie and I am ${2021-1988} years old`;
console.log(nameAge);
let currentYear = 2021;
const birthYear = 1987;
nameAge = `My name is Stephanie and I am ${currentYear - birthYear} years old.`;
console.log(nameAge);




