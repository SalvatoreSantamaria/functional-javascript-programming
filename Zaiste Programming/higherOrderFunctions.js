// Higher order functions and functions that can be passed as input to other functions
// or
// returned from other functions as output. 

// The goal is to abstract to hide details. 




//returning functions as output
const profile = (fn) => {
    return (...args) => {
        console.log(`Started at ${Date()}`)
        const result = fn(...args);
        console.log(`Computing ${result}`)
        console.log(`Ended at ${Date()}`)
    }
}

const compute = (x, y) => x + y;
profile(compute)(2,3)





//creating abstractions with functions
const isLargerThan = value => {
    return (number) => {
        return number > value;
    }
}
// const isLargerThan = value => number => number > value // this is how to write above with ES6

const isLargerThan10 = isLargerThan(10)
const isLargerThan100 = isLargerThan(100)

const result = isLargerThan10(14)
console.log(result)