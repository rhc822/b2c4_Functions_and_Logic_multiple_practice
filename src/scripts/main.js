// Practice: ChickenMonkey
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 5, and check if the remainder is 0
//     if (currentNumber % 5 === 0) {
//         console.log("Chicken", currentNumber) // Only 5, 10, 15, ... will display
//     } 
//     if (currentNumber % 7 === 0) {
//         console.log("Monkey", currentNumber) // Only 7, 14, 21, ... will display
//     }
//     if (currentNumber % 5 === currentNumber % 7) {
//         console.log("ChickenMonkey", currentNumber)
//     } 
//     else {
//         (console.log(currentNumber))
//     }
// }







// Practice: Take a Number - Battle of the Bands

// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

// let bandNumber = 1

// const takeNumber = function(bandName) {
//     return `${bandNumber++}. ${bandName}`; //The ++ after bandNumber returns value BEFORE incrementing
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console


// Below, I'm playing around with the above assignment. However, I can't get the band to stay on the console and incrementally add more band names... Maybe need to have a form field in HTML and get the value of that to add to the console somehow...

// let bandNumber = 1;

// function bandAssignment(bandName) {
//     bandAssignment = `${bandNumber++}. ${bandName}`; //The ++ after bandNumber returns value BEFORE incrementing
//     console.log(bandAssignment);
// }

// bandAssignment("good band")











// Practice: Cookout
// Copy the following objects into your JavaScript file.

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.

function grill (currentObject) {
    
        // Modify the food so that it is cooked
        currentObject.cooked = true;
    
        // Put the cooked food into the appropriate array
        cookedFood.push(currentObject);
    };

// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

// for (i = 0; i < foods.length; i++) {
// grill(foods[i]);
// }

// console.log(cookedFood);


//This is another way to accomplish what I did above
// foods.forEach(function(stuff){
// grill(stuff)
// })

// console.log(cookedFood);