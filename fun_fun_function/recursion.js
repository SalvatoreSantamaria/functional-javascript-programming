// recursion: function that continually calls itself.
// don't forget that it needs an exit statement

const counter = (num) => {
    if (num === 0) {
        return
    }
    num -= 1
    console.log(num)
    counter(num)
} 
counter(10)