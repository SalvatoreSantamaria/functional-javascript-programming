// https://youtu.be/Wl98eZpkp-c

let orders = [
    { amount: 10 },
    { amount: 17 },
    { amount: 1 },
    { amount: 0 },
    { amount: 55 },
    { amount: 3 },
    { amount: 0 }
]

//basic reduce getting a total
const result = orders.reduce((total, order) => {
    return total + order.amount
}, 0)
console.log(result)

//pratical reduce making a new arr of orders > 0
const result2 = orders.reduce((arr, order) => {
    if (order.amount > 0) {
        arr.push(order.amount)
    }
    return arr
}, [])
console.log(result2)