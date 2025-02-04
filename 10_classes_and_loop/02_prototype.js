let myName = "SauravName     "
let myChannel = "channelStudypoint     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.saurav = function(){
    console.log(`Saurav is present in all objects!`);
    
}

Array.prototype.heySaurav = function(){
    console.log('Saurav says Hello!');
    
}

// myHeros.saurav()
// heroPower.saurav()
// // heroPower.heySaurav()
// myHeros.heySaurav()

//inheritance

const user = {
    name: "SauravUser",
    email: "sauravmistri@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: true
}

const tASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "MrSM     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);   
}

anotherUserName.trueLength()

"SauravSM".trueLength()