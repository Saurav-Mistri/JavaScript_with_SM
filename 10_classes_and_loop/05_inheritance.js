class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        console.log(`Username is ${this.userName}`);
    }
}

class Teacher extends User {
    constructor(userName, email, password) {
        super(userName);
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new course has been added by ${this.userName}`);
    }
}

const newUser = new Teacher("SM", "sm@gmail.com", "123")

newUser.addCourse()

const newUser1 = new User("SM1")

newUser1.logMe();

console.log(newUser === newUser1);

console.log(newUser instanceof Teacher);
console.log(newUser instanceof User);

