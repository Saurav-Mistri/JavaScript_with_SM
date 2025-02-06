// ES6

// class User{
//     constructor(userName, email, password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`;
//     }

//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const newUser = new User('sm', 'sm@gmail.com', '123')

// console.log(newUser.encryptPassword());
// console.log(newUser.changeUserName());

// behind the scene

function User(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const newUser1 = new User('sm1', 'sm1@gmail.com', '1234')

console.log(newUser1.encryptPassword());
console.log(newUser1.changeUserName());
