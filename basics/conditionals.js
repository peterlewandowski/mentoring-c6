// let firstName = "Darie";
// const lastName = "Dorlus";

// if (firstName) {
//   console.log(`Hello world, ${firstName}`);
// } else if (lastName) {
//   console.log("My last name is " + lastName);
// } else {
//   console.log("Hello world, stranger");
// }

// let fullName = firstName && lastName ? `My full name is ${firstName} ${lastName}` : "You are nameless"
// console.log(fullName)

// const today = "Tuesday"
// let result = today === "Monday" ? "Darie is getting paid" : "Darie is broke"
// console.log(result)

// // SWITCH

// let fruit = ""

// switch(fruit){
//     case 'Carambola':
//     case 'Kiwi':
//         let res = fruit === 'kiwi' ? 'kiwi': 'carambola'
//         console.log("This is a kiwi")
//         break;
//     case 'Banana':
//         console.log("This is a banana")
//         break;
//     default:
//         console.log("buy pineapple")
//         break;
// }

// switch(fruit){
//     case "orange":
//         console.log("This is an orange")
//         break;
//     case "apple":
//         console.log("This is my apple")
//         break;
//     default:
//         console.log("We are out of fruits")
// }

function doSomething(){
    console.log("I am actually doing nothing")
}

doSomething()

function doSomethingElse(name){
    return `The name is ${name}`
}



const value = doSomethingElse()
console.log(value)

console.log(doSomethingElse("Ritchell"))

function sum(a, b){
    const result = a + b
    return result
}

let addition = sum(2, 7)
console.log("The sum is", addition)