class user {
    constructor(username) {
        this.userame= username
    }
    logMe(){

        console.log(`USERNAME IS ${this.userame}`);
        
    }

    static createId(){

        return 123;

    }
}

const abubakar = new user("abubakar");

console.log(abubakar.createId());
