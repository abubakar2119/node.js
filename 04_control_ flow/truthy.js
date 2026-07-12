const useremail = []

if (useremail) {
//   console.log("Email is valid");
} else {
//   console.log("Email is invalid");
}   


// falsy values in JavaScript include: false, 0, "", null, undefined,NaN,bigint 0n and  -0.

//truthy values include any value that is ,"0",1,'false',[],{},function(){},true, etc.

// if (useremail.length === 0) {
//   console.log("Email is invalid");
// }

const empobject = {}

if (Object.keys(empobject).length === 0) {
  console.log("Employee object is empty");
}

//nullish coalescing operator (??) is used to provide a default value when the left-hand side is null or undefined.

let val1;
// val1 = 3 ?? 4
 val1 = null ?? 5
//val1 = undefined ?? 7
console.log(val1); 

// condition ? `true` : `false` //ternary operator

const icecreamprice = 100 ;

icecreamprice > 50 ?console.log ("Ice cream is expensive") : console.log("Ice cream is cheap");