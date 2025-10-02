console.log("Error Handling & Debugging")

i = 0

if (i === 0) {
    x = [1,2,3]
}
else {
    x = function(x) { console.log("Doubling ",x); return x+x }
}

try {
    x(2)
}
catch (error) {
    console.error("error = ",error.message)
}
finally {
    // closing files or databases
    console.log("done playing with this example")
}

try {
    let data = JSON.parse("{ invalid json }")
}
catch (error) {
    console.error("error = ",error.message)
}
finally {
    console.log("continuing...")
}

function b(x) {
    return x + 1 + y
    // try {
    //     return x + 1 + y
    // }
    // catch {
    //     return x + 1 + 6
    // }
}

function a(x) {
    return b(x) * 2

    // try {
    // }
    // catch (error) {
    //     return x * 2
    // }
}

try {
    console.log(a(3))
}
catch (error) {
    console.log("oh, well...")
}

function divide(a,b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero")
    }
    return a/b
}

try {
    divide(3,0)
}
catch (error) {
    console.log(error.message)
}

class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

function checkName(name) {
    if (name.length < 6) {
        throw new ValidationError("name is too short")
    }
}

// checkName("bob")

console.log("text")
console.error("error text")
console.warn("warning text")
//console.trace()
console.table([1,2,[1,2,3]])

console.table([[1,2,3],[4,5,6]])
