// https://youtu.be/LkGxgrSqGsI?t=203

//with error takes in a code and a message, and it returns a function that takes in an optional message. 
//Optional message is assigned a default param of the message. 
const withError = (code, message) => (optionalMessage = message) => {
// assign code and  optionalMessage to native error object 
    throw Object.assign(new Error(), {
        code,
        message: optionalMessage
    })
}

const throwErrorOne = withError(501, 'Error 1');
const throwErrorTwo = withError(502, 'Error 2');
const throwErrorThree = withError(503, 'Error 3');

const foo = () => {
    //invoke function
    throwErrorOne()
}

try {
    foo();
} catch (error) {
    console.log('this is an error from the example! ', error)
}