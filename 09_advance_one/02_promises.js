// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async Task
//     // DB ChannelSplitterNode, cryptography, network

//     setTimeout(() => {
//         console.log('Async task is completed!');
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log('Promise consumed!');
// })


// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Async task 2 is completed!');
//         resolve();
//     }, 1000);
// }).then(function () {
//     console.log('Promise consumed again!');
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Async task 3 is completed!');
//         resolve({ userName: "saurav_mistri", email: "sauravmistri@gmail.com" });
//     }, 1000);
// })

// promiseThree.then(function (user) {
//     console.log(user);
// })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ userName: "Saurav", password: "123" })
//         } else {
//             reject('ERROR: Something went wrong!')
//         }
//     }, 1000);
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.userName;
// }).then((username) => {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(()=>{
//     console.log("The Promise is either resolved or rejected!");  
// })

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ userName: "JS", password: "123" })
//         } else {
//             reject('ERROR: JS went wrong!')
//         }
//     }, 1000);
// });

// async function consumePromiseFive() {
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();

//         console.log(data);
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/Saurav-Mistri').then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
})
    .catch((error) => console.log(error))