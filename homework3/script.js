//###TASK 1
let firstNumber = prompt('Enter first number.');
let secondNumber = prompt('Enter second number');

if (firstNumber>secondNumber){
    alert(`Your first number (${firstNumber}) is bigger than second (${secondNumber}).`)
} else if (firstNumber==secondNumber){
    alert(`Your first number (${firstNumber}) and second (${secondNumber}) are matching.`)
} else {
    alert(`Your second number (${secondNumber}) is bigger than first (${firstNumber}).`)
}

// //###TASK 2
// alert('Hello! I will help you calculate your any two numbers :)')
// let firstNumber = Number(prompt('Enter first number.'));
// let secondNumber = Number(prompt('Enter second number'));
// let operationResult = prompt('What you need as a result? Enter +, -, * or /')

// switch (operationResult){
//     case ('+'):
//         alert(`Result is ${firstNumber+secondNumber}.`);
//         break;
//     case ('-'):
//         alert(`Result is ${firstNumber-secondNumber}.`);
//         break;
//     case ('*'):
//         alert(`Result is ${firstNumber*secondNumber}.`);
//         break;
//     case ('/'):
//         alert(`Result is ${firstNumber/secondNumber}.`);
//         break;
//     default:
//         alert('Hold on, you are not used any of allowed operators :(');
// }

// //###TASK 3
// alert('Welcome at our Roller Coaster Passing Page!');
// let age = prompt('Please, enter your age.');

// if (age<12||age>80){
//     alert('We are sorry, but you can not visit Roller Coaster in your age. :(')
// } else if (age>=12&&age<=18||age>=60&&age<=80){
//     alert('You can visit Roller Coaster only with adult permission.')
// } else {
//     alert('You can freely visit our Roller Coaster! :)')
// }

