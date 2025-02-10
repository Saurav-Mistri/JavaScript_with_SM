const User = {
    _email: "sm@sm.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value
    }
}

const newUser = Object.create(User)

// both are valid
console.log(newUser.email);
console.log(newUser._password);