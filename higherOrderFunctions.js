// First class citizens: Return functions from functions, store functions in variables, etc
// https://youtu.be/uwupKYlCId4

// With ES5 _________________________________________________________________________
const loggerES5 = function(input1) {
    return function(input2) {
        console.log(input1 + " " + input2) 
    }
}
const someES5Function = loggerES5('someES5Function')
someES5Function('1st call') // logs someES5Function 1st call
someES5Function('2nd call') // logs someES5Function 2nd call


// With ES6 _________________________________________________________________________
// This is the exact same function as above but rewritten with arrow functions

// 1. logger is set to an unnamed function with returns another unnamed function. The 2nd unnamed function just console logs the two inputs.
const logger = (input1) => (input2) => console.log(input1 + " " + input2)
const someFunction = logger('someFunctionText') // 2. Call logger and set it to a var called someFunction. Input1 is passed the string 'someFunctionText'

// 3. Call the someFunction var (which is set to a function, and pass in another param)
someFunction('first call') //logs someFunctionText first call
someFunction('second call') //logs someFunctionText second call
someFunction('third call') //logs someFunctionText third call
someFunction('forth call') //logs someFunctionText forth call

// A Real World Style example with Map _________________________________________________________________________
//

// Trace 4: set the concaterFunction to take in input1, and inside the concaterFunction, set an annonymous function to take in input2,  
// and then concat those two inputs together
const concaterFunction = (input1) => (input2) => (input1 + " " + input2) // note: returning instead of logging

// Trace 2: set updatedData to a mapped data array. We are passing in the inputerFunction, 
//and mapping each element of the data array, and passed each of those elements to input2
const inputerFunction = concaterFunction('inputerFunctionText') // Trace 3: Set the inputerFunction to the concaterFunction, and pass in some text to input1

const data = ['a', 'b', 'c'] 
const updatedData = data.map(inputerFunction) 
console.log(updatedData) // Trace 1: console log updateData
// logs [
//     'inputerFunctionText a',
//     'inputerFunctionText b',
//     'inputerFunctionText c'
//   ]
