// Map - make a new array with transformed elements
// Map applies a given function to each element in the calling array


// Map Basic ----------------------------------------------------------------------------------


const numbers = [1,2,3,44]
const add1 = item => item + 1
const result = numbers.map(add1)
console.log(result) //[ 2, 3, 4, 45 ]



// Map applying given function to each element in the calling array  ----------------------------------------------------------------------------------

const purchases = [
    { product: 'Hammer', quantity: 1 },
    { product: 'Nails', quantity: 10 },
    { product: 'Drill', quantity: 1 },
    { product: 'Screws', quantity: 3 },
    { product: 'Drill Bits', quantity: 5 },
    { product: 'Philips Screwdriver', quantity: 2 },
    { product: 'Level', quantity: 1 },
]

// Original - no destructuring
// const quantityReducer = (item) => {
//     return { product: item.product, availableItems: 10 - item.quantity }
// }

// Using destructuring
const quantityReducer = ({ product, quantity }) => { // using destructuring. pull off the product and quantity properties of the input
    return { product, availableItems: 10 - quantity } // assign product to product, and the result of operation to availableItems
}

const result2 = purchases.map(quantityReducer)
console.log(result2)