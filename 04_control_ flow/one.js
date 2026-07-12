const IsLoggedIn = true;
const temperature = 30;

// 


const score=200;

if(score>100){
    let power="flying";
    // console.log(`You have: ${power} `);
}
// console.log(`You have: ${power} `); // ReferenceError: power is not defined

const balance = 1000;

// if (balance < 500) console.log("item1"), console.log("item2");NOTE:please do not write code like this, it is not readable and can be confusing because it is not clear which statement belongs to the if condition. It is better to use curly braces to group the statements together for better readability and maintainability.

// if (balance < 500) {
//     console.log("less than 500");
    
// }else if (balance < 750) {
//     console.log("less than 1000");
    
// }else if (balance < 1000) {
//     console.log("equal to 1200");
    
// }else{
//     console.log("less than 1500");
// }   

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromFacebook = true;
if (userLoggedIn && debitCard&& 2==3)
     {
    console.log("You can buy");
}

if(loggedInFromGoogle || loggedInFromFacebook){
    console.log("You are logged in");
}
