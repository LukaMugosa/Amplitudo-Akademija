// CALLBACKS

function firstFunction(params, callback) {
    // radi nesto sa parametrima
    console.log("Radi")
    callback();
}
//
// function secndFunction() {
//     console.log("Callback");
// }
//
// firstFunction("param", (callback) => {
//     callback(() => {
//         ()
//     })
// });


// PROMISE
//
// const myPromise = new Promise((resolve, reject) => {
//     let error = false;
//     if(!error) {
//         resolve('Resolve');
//     }else {
//         reject('Reject');
//     }
// });
//
// console.log(myPromise);
//
// myPromise
//     .then((value) => {
//         return value + " test";
//     })
//     .then((newValue) => {
//         console.log(newValue);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
//
// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('myNextPromise');
//     }, 3000);
// })
//
// myNextPromise
//     .then((value) => {
//         console.log(value);
//     });
//
// console.log("TEST");
//
// const users = fetch("https://jsonplaceholder.typicode.com/users");
//
// users
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         data.forEach((user) => {
//             console.log(user);
//             console.log(user.asd);
//         })
//     });

// ASYNC - AWAIT

const myUsers = {
    usersList: []
};

const myFunc = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    myUsers.usersList = data;
    console.log(myUsers);
}

myFunc();

console.log(myUsers);

let jokeObject = null
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET", // POST DELETE PUT PATCH GET
        headers: {
            Accept: "application/json"
        }
    });
    const data = await response.json();
    jokeObject = data;
    console.log(jokeObject);
    console.log(jokeObject.joke);
}

getDadJoke();
console.log(jokeObject);

const user = {
    gender: "MALE",
    firstName: "Luka",
    lastName: "Mugosa",
    age: 23,
    registered: true
}

const onePostMethod = async (payload) => {
    console.log("Sent data", payload);
    const response = await fetch("https://httpbin.org/post", {
        method: "POST", // POST DELETE PUT PATCH GET
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const resJson = await response.json();
    console.log(resJson);
}

onePostMethod(user);

const agify = async (firstName) => {
    const response = await fetch(`https://api.agify.io?name=${firstName}&country_id=ME`);
    const resJson = await response.json();
    console.log(resJson);
}

agify("Luka");
