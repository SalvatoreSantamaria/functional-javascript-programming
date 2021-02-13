// https://youtu.be/bCqtb-Z5YGQ

let users = [
    { id: 1, orderQty: 10 },
    { id: 2, orderQty: 0 },
    { id: 3, orderQty: 2 },
    { id: 4, orderQty: 9 },
    { id: 5, orderQty: 1 },
    { id: 6, orderQty: 0 },
    { id: 7, orderQty: 0 },
]

// 1. ---------------------------------------------------------------------------------------
// without functional programming: getting ids using a for loop

let ids = []
for (let i = 0; i < users.length; i++) {
    ids.push(users[i].id)
}
console.log(ids) //logs all the user ids

// 2. --------------------------------------------------------------------------------------- 
// with functional programming: getting ids with map

let mappedIds = users.map((user) => user.id)
console.log(mappedIds) //logs all the user ids