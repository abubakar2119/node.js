//inheritance


class user {
    constructor(username) {
        this.userame= username
    }

    logMe(){

        console.log(`USERNAME IS ${this.userame}`);
        
    }



}


class Teacher extends user{

    
    constructor(username,email,password) {
        super(username)
        this.email=email;
        this.password=password;
        this.username=username;

    }
    addCourse(){
        console.log(`this is a username ${this.username}`);
        

    }
}
const tea= new Teacher("abubakar mustafa","ajsa@","13242");
tea.logMe()
    

const masalachai = new user("masalachai")
masalachai.logMe()

console.log(tea instanceof Teacher);
