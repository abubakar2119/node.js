// class name {
//     constructor(username,email,password) {
//         this.email=email;
//         this.password=password;
//         this.username=username;

//     }

//      encryptPassword(){

//         return `${this.password}abc`

//      }
//      changeUsername(){
//        return `${this.username.toUpperCase()}`

//      }

// }


// const chai= new name("abubakar","ajsa@","13242");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//Behind the scene


function user (username,email,password){
    
        this.email=email;
        this.password=password;
        this.username=username;

    
}
user.prototype.encryptPassword = function(){

 return `${this.username.toUpperCase()}`
}
user.prototype.changeUsername = function(){

 return `${this.password}abc`
}

const tea= new user("talha","ajsa@","13242");
console.log(tea.changeUsername());
console.log(tea.encryptPassword());