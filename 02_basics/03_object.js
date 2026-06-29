//singleton
// Object.create


//object literal

const mysym=Symbol("key1");

const jsuser={
    name:"abubakar",
    "full name":"abubakar mustafa",
    age:18,
    [mysym]:"key1",
    email:"abubakar@gmail.com",
    school:"lab",
    isLoggedIn:false,
    lastLoggedIn:['monday','wed']
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"] )
// console.log(jsuser[mysym] )

jsuser.email="abubakar32232@gmail.com"
// Object.freeze(jsuser)

jsuser.email="abubakar32232@djikw.com"
console.log(jsuser);

jsuser.greeting=function() {
    console.log("hello js user");

}
jsuser.greetingtwo=function() {
    console.log(`hello js user,${this.name}`);

}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

