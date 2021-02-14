// https://youtu.be/iZLP4qOwY8I?t=231
// currying: when a function doesn't take all of its arguments up front
// instead, it gradually passes in params to anonymous functions


// 1. --------------------------------------------------------------------------------
// Not using currying
let dog = (dogName, size, breed) => {
    return dogName + ' is a ' + size + ' ' + breed + ' dog!' 
}
let result = dog('Kuma', 'small', 'Yorkie')
console.log(result)

// 2. --------------------------------------------------------------------------------
// Using currying
let dogCurrying = dogName2 => size2 => breed2 => {
    return dogName2 + ' is a ' + size2 + ' ' + breed2 + ' dog!' 
}
let resultCurrying = dogCurrying('Kuma')('small')('Yorkie')
console.log(resultCurrying)

// can also run like this: by assigning to variables and then calling
// let resultCurrying = dogCurrying('Kuma')
// let two = resultCurrying('small')
// let three = two('Yorkie')
// console.log(three)

// 3. --------------------------------------------------------------------------------
// Using curring from above, but with optional syntax, for easy reference
// let dogCurrying = (dogName2) => {
//     (size2) => {
//         (breed2) => {
//             return dogName2 + ' is a ' + size2 + ' ' + breed2 + ' dog!' 
//         }
//     }
// }