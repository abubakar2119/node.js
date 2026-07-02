const tinderuser = new Object();
// const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="abuabakar"
tinderuser.isLoggedIn=false


// console.log(tinderuser);

const firstUser={
    userEmail:"LSJKA@gmail.com",
    userfullname:{
        userfirstname:"abubakar",
        userlastname:"mustafa"

    }
}
// console.log(firstUser.userfullname.userlastname);

const obj1={1:"a",4:"s"}
const obj2={2:"a",5:"s"}
const obj3={3:"a",6:"s"}

// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

const user=[
    
{
    id:"1222",
    email:"anaj@gmail.com"
},
{
    id:"1222",
    email:"anaj@gmail.com"
},
{
    id:"1222",
    email:"anaj@gmail.com"
},

]
user[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(Object.values(tinderuser));

console.log(tinderuser.hasOwnProperty('name'));


const course={
    email:"abubakar@gmail.com",
    name:"abubakar",
    price:"999",
    courseinstaractor:"hitesh sir"


}
// console.log(course);


// course.courseinstaractor    
const {courseinstaractor:instaractor } = course
console.log(instaractor);

{
    "name":"abubakar",
    "course":"js in hindi",
    "price":"8978"

}

[
    {},
    {},
    {},

]