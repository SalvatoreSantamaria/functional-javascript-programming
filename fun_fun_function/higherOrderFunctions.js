// https://youtu.be/BMUiFMZr7vk

// Functional programming has:
// Less bugs: easier to reason 
// Build in Less Time: because can reuse code
// functions are values:

//same
// function double(x) {
//     return x * 2
// }

//same: anon function assigned to a variable
// const double = function(x) {
//     return x * 2
// }

//same: using ES6
const double = x => x * 2
const result = double(4)
console.log(result) // logs 8

// an example ***********************************************************************


let users = [
    { id: 1, orderQty: 10 },
    { id: 2, orderQty: 0 },
    { id: 3, orderQty: 2 },
    { id: 4, orderQty: 9 },
    { id: 5, orderQty: 1 },
    { id: 6, orderQty: 0 },
    { id: 7, orderQty: 0 },
]

// 1. ------------------------------------------------------------------------------
// non functional programming 
let activeUsers = []
for (let i = 0; i < users.length; i++) {
    if(users[i].orderQty > 0) {
        activeUsers.push(users[i])
    }
}
console.log(activeUsers) //logs all the users with orders > 0

// 2. ------------------------------------------------------------------------------
// the same with functional programming 
// remember the anon function inside filter is a CALLBACK function
let activeUsersFilter = users.filter((user) => {
    return user.orderQty > 0
})
console.log(activeUsersFilter) //logs all the users with orders > 0

// 3. ------------------------------------------------------------------------------
// breaking out the callback into a separate variable
let hasOrdered = (user) => {
    return user.orderQty > 0
}
let usersThatHaveOrdered = users.filter(hasOrdered)
console.log(usersThatHaveOrdered)
