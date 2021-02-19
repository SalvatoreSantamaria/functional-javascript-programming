// Memoization is remembering the result of a function for later

// Instead of running this function every time
const sum = (a, b) => a + b
console.log(sum(2, 7))

// Just store the result of it in a cache and look up the answer in the cache
const cache = {
    "2 7": 9
}

// Memoization only makes sense for functions that are referentially transparent- ie pure functions
// It also requires additional memory so it only makes sense for functions that are computationally expensive.
// Library that can help with this is Ramda
