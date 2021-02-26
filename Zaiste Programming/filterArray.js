// Filter something out based on a condition. 

let users = [
    { id: 1, orderQty: 10 },
    { id: 2, orderQty: 0 },
    { id: 3, orderQty: 2 },
    { id: 4, orderQty: 9 },
    { id: 5, orderQty: 1 },
    { id: 6, orderQty: 0 },
    { id: 7, orderQty: 0 },
]

// Beginning example, not functional programming ----------------------------------------------------------------------------------
const result = [];
for (let i of users) {
    if (i.orderQty > 0) {
        result.push(i)
    }
}
console.log(result)

// Using functional programming. Abstract into a variable, and pass the variable into a filter function. -------------------------------------
const haveOrder = item => item.orderQty > 0
const result2 = users.filter(haveOrder)
console.log(result2)