// Practice: ChickenMonkey
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 2 === 0) {
        console.log(currentNumber) // Only 2, 4, 6 will appear
    }
}


for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0) { // Divide the current number by 5, and check if the remainder is 0
        console.log("Chicken", currentNumber) // Only 5, 10, 15, ... will display
    } 
    if (currentNumber % 7 === 0) {
        console.log("Monkey", currentNumber) // Only 7, 14, 21, ... will display
    }
    if (currentNumber % 5 === currentNumber % 7) {
        console.log("ChickenMonkey", currentNumber)
    } 
    else {
        (console.log(currentNumber))
    }
}

