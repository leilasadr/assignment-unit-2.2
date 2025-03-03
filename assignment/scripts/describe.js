// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to the string value Dane. 
// Then if the variable name is exactly the same as the string value Mary, 
// We console.log 'Hi, Mary!'
// Otherwise we console. log 'how do you do?' 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a decleration that the value called secret exists from here on out.
// As well as make another variable called code and set it to the number value of 123.
// If the variable code exactly equals 123, then variable secret equals the string value super and the code variable equals its own value times two, which is 246, 
// and if the variable code is greater than 250 then the value of the variable secret equals to the string value duper then we console.log the variable secret. 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable named isStudent and give it the true value. 
// We also make a variable named age and set it to the number value of 34.
// And lastly make another variable named zip and set it to the number value of 55407.
// if the variable isStudent is exactly true AND the variable zip is greater than 80000 then console.log 'You're a student on the West Coast!'
// Otherwise if the variable isStudent is exactly false OR the variable age is less than the number value 30 then console.log 'What are your hobbies?'
// But if the variable isStudent is exactly true then console.log 'Welcome to Prime!'
// But if all above fails then console.log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - let colorOne = 'red' is set to string value red but in the instructions it says to set it to 'blue'
// Should be let colorOne = 'blue'
let colorOne = 'red';
//FIX - let colorTwe = 'blue' is set to string value blue but in the instructions it says to set it to 'red'
// Should be let colorTwo = 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX - colorOne = 'purple' is set for colorOne to only be 'purple' but the instruction says that both variables colorOne AND colorTwo be set on 'purple'
// Should add on the next line after colorOne = 'purple' this code block colorTwo = 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - const time = 4; says that time is a constant, but the instructions says it's a variable.
// should be let time = 4 
const time = 4;

if (temp > 39 || time >= 4) {
// FIX - if (temp > 39 || time >= 4) checks is temp is higher than 39 OR if time is greater or equal to 4, but the instructions wants both to be true.
// should be if(temp > 39 && time >= 4)
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// FIX - const minAge = 21 says that minAge is a constant, but the instruction states that minAge is a variable.
// should be let minAge = 21
const minAge = 21;

// FIX - if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
} is checking if the variable minAge is less than or equal to the variable age, and if so, console.log 'no entry' otherwise log 'enter'
// should be 

if (age >= minAge) {
  console.log('entry');
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

