// Reduce is a process of recombining an input array into a single value by applying a function to each element of the array


// Basic use ---------------------------------------------------------------
const items = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
]

const add = (stored, current) => {
    return stored + current.number
}
const result = items.reduce(add, 0)
console.log(result) // logs 6 

// Flatten an array ---------------------------------------------------------------
const arrays = [
    [0,1],
    [2,3],
    [4,5],
]
const flatten = (stored, current) => stored.concat(current)
const result2 = arrays.reduce(flatten, [])
console.log(result2) // logs [ 0, 1, 2, 3, 4, 5 ]

// Convering Arrays Into Objects by Id: IE Make it a Hash ---------------------------------------------------------------
const inventory = [
    { id: 1, product: 'Hammer', quantity: 1 },
    { id: 2, product: 'Nails', quantity: 10 },
    { id: 3, product: 'Drill', quantity: 1 },
    { id: 4, product: 'Screws', quantity: 3 },
    { id: 5, product: 'Drill Bits', quantity: 5 },
    { id: 6, product: 'Philips Screwdriver', quantity: 2 },
    { id: 7, product: 'Level', quantity: 1 },
]

const byId = (stored, current) => {
    return { ...stored, [current.id]: current } //take whats already stored in the accumulator. | put the id as the key with `[current.id]:` and set its value to current item
}

const inventoryById = inventory.reduce(byId, {})
console.log(inventoryById)

//