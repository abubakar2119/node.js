const user ={
    name : "abubakar",
    price : 400,

    welcomeuser : function () {
        console.log(`welcome ${this.name} , to the website`)
        console.log(this)
    }
}

// user.welcomeuser()

// user.name = "saim"
// user.welcomeuser()

// console.log(this)

// function myfunction() {
//     username = "abubakar"
//     console.log(this.username)
// }

// myfunction()

// const myobject = function () {  
//         username = "abubakar"
//     console.log(this.username)
// }


const myobject = () => {  
        username = "abubakar"
    console.log(this)
}

// myobject()

// const myobject2 = (num1,num2)=> {
//     return num1 + num2

// }
//     console.log(myobject2(5,6))

// const myobject2 = (num1,num2)=>  num1 + num2

// const myobject2 = (num1,num2)=> ( num1 + num2)

const myobject2 = (num1,num2)=> ({Username :"abubakar"})

    console.log(myobject2(5,6))