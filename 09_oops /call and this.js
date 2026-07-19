function SetUsername (username){
   //complex DB call 
   this.username = username;

}

function createuser(username,email,password){
    SetUsername.call(this,username)

    this.email=email
    this.password=password


}


const chai=new createuser("abubakar","ansaj@yt","1234")
console.log(chai);
