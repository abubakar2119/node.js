
// {} curly braces is scope
let b = 100
if (true) {
    const a = 10
    let b = 20
    // var c = 30
console.log("inner block", a, b, c)
}

// console.log(a)
console.log(b)  
// console.log(c)