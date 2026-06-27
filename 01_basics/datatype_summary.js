//primittive


//7types: string,boolean,null,undefined,symbol,object,bigint
// const score=100
// const anotherscore=100.4

// const IsLoggedIn=false
// const outsidetemp=null
// let userId;

const  Id=Symbol("123")
const anotherId=Symbol("123")
console.log(Id===anotherId);
// const BigNumber=2234567890n


//(referance) non primittive

//Array, object,function

const heros=["ali" ,"talha"]
{

    const name="abubakar";
    const age=18


}

const myfunction=function(){
    console.log("hello world");
    
}
console.log( typeof heros);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//stack(primittive) ;  heap(non primittive)

let mycollegename="ilm college"
let anothercollegename="mycollegename"
anothercollegename="aspire colege kasur"
console.log(anothercollegename);
console.log(mycollegename);

let userone ={
    email: "abubakar@gmail.com",
    jazzcash:"jazzcash.com"


}
let usertwo=userone
usertwo.email="talha@google.com"

console.log(userone.email);
console.log(usertwo.email);
