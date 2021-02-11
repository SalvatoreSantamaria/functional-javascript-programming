// https://youtu.be/bwl3txDNlmw

// This function does the same thing as the abstract with utilty function below. 
const doMath = (num) => {
    const added = num + 2
    const multiply = added * 2
    const divide = multiply / 2
    return divide
}
console.log(doMath(5)) // logs 7


// abstract with utility functions _____________________________________________
const addTwo = (num) => num + 2
const multiplyTwo = (num) => num * 2
const divideTwo = (num) => num / 2

const doMathTwo = (num) => {
    const added2 = addTwo(num)
    const multiply2 = multiplyTwo(added2)
    const divide2 = divideTwo(multiply2)
    return divide2
}
console.log(doMathTwo(5)) // logs 7

// then can use Ramda: Pseudo code: _____________________________________________

// const doMathComposedRamdaPseudo = Ramda.compose(
//     divideTwo, 
//     multiplyTwo, 
//     addTwo,
// )
// console.log(doMathComposedRamdaPseudo(5)) // would log 7

// ___________________________

//https://youtu.be/bwl3txDNlmw?t=952 detailed explaination of the below
////doMathComposed 3: (...funcs) is taking in below functions as params and adding them to an array
const compose = (...fns) => (arg) => { 
    //doMathComposed 4: reverse functions, call reduce
    //doMathComposed 5: reduce over the list of functions because we want a single value back
    //doMathComposed 6: arg is the starting accumulator for reduce
    return fns.reverse().reduce((value, func) => {
    //doMathComposed 7: return value of each function in the list of functions, and reutrn the value from that invoked funciton
    //doMathComposed 8: ie: value is 5. return func(value) is return divideTwo(5)
        return func(value);
    }, arg)
}

//doMathComposed 1: set function composed to take in other utility functions
const doMathComposed = compose( 
    divideTwo, //calls third
    multiplyTwo, // calls second
    addTwo //doMathComposed 2: calls this function first
)

let result = doMathComposed(5);
console.log(result) //logs 7