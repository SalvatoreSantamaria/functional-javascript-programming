// Pure Functions: Don't mutute data! ___________________________________________________________
// https://youtu.be/80bbzr1menw

// Mutates original array
let originalArr = ['there', 'hello']
const reverseArray = () => originalArr.reverse().join(' ')
console.log(reverseArray()) // logs hello there
console.log(originalArr) // logs [ 'hello', 'there' ]. The input array has been mutated!!

// Fixing the above  code to NOT mutate original array
let originalArr2 = ['there', 'hey']
const pureReverseArray = (inputArr) => [...inputArr].reverse().join(' ') // copy array by spreading it into a new array
console.log(pureReverseArray(originalArr2)) // logs hey there
console.log(originalArr2) // logs ['there', 'hey' ]

// _______________________________________________________________________________________________

// Mutates original object
const addUserProperties = (user) => {
    user.age = 25;
    user.color = 'green';
    return user
}
const initialUser = {}
const updatedUser = addUserProperties(initialUser)
console.log(updatedUser) // logs { age: 25, color: 'green' }
console.log(initialUser) // logs { age: 25, color: 'green' } // addUserProperties has OVERWRITTEN the initialUser !!!!!


// Fix for NOT mutating original object
const addUserProperties2 = (user) => {
    const updatedUser = { ...user } // spread in old values
    updatedUser.age = 25;
    updatedUser.color = 'green';
    return updatedUser
}
const initialUser2 = {}
const updatedUser2 = addUserProperties2(initialUser2)
console.log(updatedUser2) // logs { age: 25, color: 'green' }
console.log(initialUser2) // logs {} // addUserProperties2 did NOT overwrite the initialUser2