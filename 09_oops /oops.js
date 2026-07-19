const user={
    name:"abubakar",
    logincount:8,
    signin:"chrome",

    getuserdetail:function(){

        // console.log("Got user detail from database");


        // console.log(`username:${this.name}`);
        
        // console.log(this);
        
    }

}

// console.log(user.logincount);

// console.log(user.getuserdetail());
// console.log(this);

function User (username,isloggedin,logincount){
            this.username=username;
            this.logincount=logincount;
            this.isloggedin=isloggedin;
//return this;
}

const userOne=new User("abubakar",true,12)
const userTwo=new User("talha",false,11)

console.log(userOne);

console.log(userTwo);

