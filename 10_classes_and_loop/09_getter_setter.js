class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
    get password(){
        // return this._password.toUpperCase();
        return `${this._password}mrsm`;
    }
    set password(value){ 
        this._password = value;
    }
}

const mrsm = new User("sm@sm.com", "abc")

console.log(mrsm.email);
console.log(mrsm.password);
