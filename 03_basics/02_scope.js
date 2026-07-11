
// {} curly braces is scope
let b = 100
if (true) {
    const a = 10
    let b = 20
    // var c = 30
// console.log("inner block", a, b, c)
}

// console.log(a)
// console.log(b)  
// console.log(c)


function myfunction() {
  const name = "abubakar"
  

  function myinnerfunction() {
    const website = "abubakar.com"
    // console.log(name)
  }
//   console.log(website)  

myinnerfunction()

}
myfunction()

if (true) {
    const name = "abubakar"
  if (name === "abubakar") {
    const website = "     google.com"
    //console.log(name + website)
  }
//   console.log(website)
}   


// console.log(name)  


//+++++++++++interseting example++++++++++++++//
// console.log(addone(5))

// function addone(number) {
// return number + 1

// }

addtwo(5)

const addtwo = function (num) {
 return num + 2   
}
