

function myname(){
console.log("A");
console.log("B");
console.log("U");
console.log("B");
console.log("A");
console.log("K");
console.log("A");
console.log("R");

}

// myname()

// function addnum(number1,number2) {
//     console.log(number1+number2);
    
// }
function addnum(number1,number2) {
// let result=number1+number2;
// console.log("abu bakar");
// return result   

//notes 
//console.log("abu bakar");//this progrm is not execute beacuse is it return value
return number1+number2

}

const result =addnum(3,6)
// console.log("Result",result);

function loginusermessage(username="saim") {
    if(username=== undefined){
        // console.log("please enter a user name");
        return  
    }
    return `${username} just logged in`
    
}
//  console.log (loginusermessage("abubakar"))
//  console.log (loginusermessage("abubakar"))

//++++++++++++++++++++//

function calculatecartprice(val1,val2,...number1){
    return number1

}
// console.log(calculatecartprice(200,304,400,500));
const user={
    username:"abubakar",
    prices:459,

}
function handleobject(anyobject) {
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
}

// handleobject(user)

handleobject({
    name:"abubakar",
    price:323

})

function returnSecondValue(getArray) {
    return getArray[1];
}

const mynewArray = [200, 400, 100, 600];

// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,400,100,600]));