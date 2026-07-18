


// let firstPromise = new Promise((resolve,reject) => {

// setTimeout(function saymyname() {
//     console.log("MY name is abubakar");
    
    
// },1500)

// resolve (1);

// })

let promise3 =new Promise(function(resolve,reject){
    let succsess=false;
    if(succsess){
        resolve("promise is fulfilled");
    }else{
        reject("promise rejected");
        
    }

    
});

 promise3.then(function(message) {
     console.log("first message is:",message);
    return20;
 });
  promise3.then(function(message) {
     console.log("second  message is:",message);
    return30;
 });
  promise3.then(function(message) {
     console.log("third message is:",message);
    return40;
 }).catch(function(ERRER){
        console.log("first error",ERRER);
        return 40;

 }).finally (function(message){
    console.log("ma tu chalu jaf")
 })





// promise3.then(function(message) {
//     console.log("message is:",message);
    
    
// }).catch(function(error){
//  console.log("Error :",error);
 
// });



