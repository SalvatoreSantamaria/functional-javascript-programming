// https://youtu.be/CQqwU2Ixu-U

// closures: the externalVariable is globally accessed

let externalVariable = 0

const addOne = () => {    
    externalVariable++
    console.log(externalVariable)
}

addOne() // logs 1
addOne() // logs 2
addOne() // logs 3
addOne() // logs 4
console.log(externalVariable) // logs 4
