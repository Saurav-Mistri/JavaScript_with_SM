class User{
    constructor(userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`Username: ${this.userName}`);
    }
    static createID(){
        return `123`;
    }
}

const newSM = new User("SM")

// console.log(newSM.createID())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const onePlus = new Teacher('onePlus', "onePlus@gmail.com")

// onePlus.createID()
// console.log(onePlus.logMe())
console.log(onePlus.createID())