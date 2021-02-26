// Predicates: A function that returns a boolean value

const greaterThan10 = value => value > 10
console.log(greaterThan10(11)) //true

// predicates use functions names that are 'questions'
// isEmpty
// isNull
// hasKey
// areAvailable

// can use the style with 'P' for 'predicate'
// emptyP
// nullP

// use predicates to check the type:
const isNumber = value => {
    return !isNaN(value) && isFinite(value)
}
console.log(isNumber(2)) //true


