## Instructions to run any of these files:  

In a node environment, run node and the name of the file:  
`node pureFunctions.js`  

Note: make sure you cd into the correct folder if necessary.


Hitesh Choudhary: https://www.youtube.com/watch?v=dAPL7MQGjyM
# Functional Programming: 3 parts

## Functional Programming Style. 
Keep functions and data completely separate

Not Functional:
let score = 100
function addBonus() {
    score = score + 45
    return score
}

functional
```
functionAddBonus(score) {
    return score + 45
}
```

## State Change
Don't change the state of variables, ie, don't update a single variable repeatedly. Instead redeclare variables:

Not Functional:
```
weight = 200
weight = 205
weight = 204
```

Functional:
```
weight = 200
weightSaturday = 205
weightSunday = 204
```

## Functions are treated as first class
