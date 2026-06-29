// const Arr=[1,2,3,4]
// console.log(Arr[3]);

// const nameArr=["abubakar","ali"]
// console.log(nameArr);

//Array method

const myArr=new Array(1,2,3,4,5);

// console.log(myArr[2]);

// myArr.push(6)
// myArr.pop(6)
// myArr.unshift(6)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));
// console.log(myArr);

const newArr=myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//notes
// Manipulate a string → change its text.
// Manipulate an array → add or remove items.
// Manipulate the DOM → change HTML elements on a web page.
  
//slice  +++ splice++++

console.log("A ", myArr)
 
const myn1=myArr.slice(1,3)
console.log(myn1);


console.log("B ", myArr)

const myn2=myArr.splice(1,3)
console.log("c",myArr);

console.log(myn2);



