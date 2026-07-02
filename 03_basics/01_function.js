

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
        console.log("please enter a user name");
        return  
    }
    return `${username} just logged in`
    
}
//  console.log (loginusermessage("abubakar"))
 console.log (loginusermessage("abubakar"))

