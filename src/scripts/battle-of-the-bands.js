// Practice: Take a Number - Battle of the Bands

// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 1

const takeNumber = function(bandName) {
    return `${bandNumber++}. ${bandName}`; //The ++ after bandNumber returns value BEFORE incrementing
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


// Below, I'm playing around with the above assignment. However, I can't get the band to stay on the console and incrementally add more band names... Maybe need to have a form field in HTML and get the value of that to add to the console somehow...

// let bandNumber = 1;

// function bandAssignment(bandName) {
//     bandAssignment = `${bandNumber++}. ${bandName}`; //The ++ after bandNumber returns value BEFORE incrementing
//     console.log(bandAssignment);
// }

// bandAssignment("good band")

