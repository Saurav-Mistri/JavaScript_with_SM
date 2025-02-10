function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this.email = value;
        },
    })

    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this.password = value;
        },
    })
}

const mrSM = new User("sm@sm.com", "sm")

console.log(mrSM.email);
console.log(mrSM.password);
