// VARIABLES (For storing values)
/*
Syntax for Variables

variableType variableName = value;
*/

// LET is the variable type
// STUDENTS is the varible name
// 28 is the value being set/assigned to the varibale
let students = 28;
// students = 30;
// students = students + 2;
// students += 2;
// students = students - 2;
// students -= 2;
// students++;
students--;
// students = "All students";
// students = false;
console.log(students);

let campbellsvilleStudents = 20;
// console.log(campbellsvilleStudents);

let bowlingGreenStudents = students - campbellsvilleStudents;
// console.log(bowlingGreenStudents);


// OTHER TYPES OF VARIABLES
// Const (Used for varibles with a value that will not change)
const locations = 2;
// Cannot update the value of a const variable
// locations = 3;
console.log(locations);

// Var (The OG Variable)
var theRealOG = 1995;

// STRING VARIABLES
const firstName = "Stephanie"
const lastName = "Miller"
// const fullName = "Stephanie" + " " + "Miller";
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log("Stephanie" +  " " + "Miller");
console.log(fullName.length);
console.log(fullName[2]);
console.log(fullName[9]);