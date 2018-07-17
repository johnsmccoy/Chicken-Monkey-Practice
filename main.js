// Only show even numbers
const numbers = []

for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i]

    // Take the current number, divide by 2, and check if the remainder is 0
    if (currentNumber % 2 === 0) {
        console.log(currentNumber) // Only 2, 4, 6 will appear
    }
}



console.log("Chicken Monkey")

const numbers = []

for (let i = 1; i < 100; i++) {
    const currentNumber = [i]


// console.log(currentNumber)
    // Take the current number, divide by 2, and check if the remainder is 0
    if(currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey")
    }
    else if (currentNumber % 5 === 0) {
        console.log("Chicken")
    }

    else if (currentNumber % 7 === 0) {
        console.log("Monkey")
    }
    else if (currentNumber) {console.log(currentNumber)}

}