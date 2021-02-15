

const counter = (num) => {
    if (num === 0) {
        return
    }
    num -= 1
    console.log(num)
    counter(num)
} 

counter(10)