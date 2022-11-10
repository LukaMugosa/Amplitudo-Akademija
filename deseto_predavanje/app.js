const person = {
    name: 'Luka',
    hello: function () {
        console.log(this);
    },
    talk() {
        console.log('Talk 1');
    },
    talk2: () => {
        console.log('Talk 2');
    },
    test() {
        console.log(this);
        console.log(`Hello ${this.name}`);
        this.talk2();
    }
};

console.log(person);
console.log(person.name);
console.log(person.hello);
person.hello();

person.talk();

person.talk2();

const talk = person.talk;

talk();

person.test();

// const test = person.test;
const test = person.test.bind(person);

test();

// functions

const square = function (number) {
    return number * number;
}

// const squareArrowFunc = (number) => {
//     return number * number;
// }
const squareArrowFunc = number => number * number;

console.log(square(5), squareArrowFunc(5));

const jobs = [
    {
        id: 1,
        isActive: true,
    },
    {
        id: 2,
        isActive: true
    },
    {
        id: 3,
        isActive: false
    },
];

console.log(jobs);

const activeJobs = jobs.filter(function (job){
    return job.isActive;
});

console.log(activeJobs)

const activeJobs2 = jobs.filter((job) => job.isActive);

console.log(activeJobs2);

// const person2 = {
//     talk() {
//         let self = this;
//         setTimeout(function () {
//             console.log('self', self);
//         }, 1000)
//     }
// }
const person2 = {
    talk() {
        setTimeout(() => {
            console.log('this', this);
        }, 1000);
    }
}

person2.talk();

const colors = ['red', 'green', 'blue'];

const colorList = colors.map((color) => {
    console.log(color);
    return `<li>${color}</li>`
});

console.log(colorList);

colors.push('yellow');
console.log(colors);

const lastItem = colors.pop();
console.log(lastItem);
console.log(colors);

const firstItem = colors.shift();
console.log(firstItem);
console.log(colors);
// find, splice

const address = {
    city: 'Podgorica',
    country: 'Motenegro',
    street: 'Bul Sv. Petra Cetinjskog'
}

// const city = address.city;
// const country = address.country;
// const street = address.street;

// const {city: c, country: ct, street: st} = address;
const {city, country, street} = address;

console.log(city, country, street);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1);
console.log(arr2);
const mergedArr = arr1.concat(arr2);
console.log(mergedArr);

const mergerArr2 = [...arr1, 'a', ...arr2, 'b'];

console.log(mergerArr2);

const arr1Cloned = [...arr1];

console.log(arr1Cloned);

const firstObj = {
    name: 'Luka',
    age: 23
}

console.log(firstObj);

const secondObj = {
    city: 'Podgorica',
    country: 'Motenegro',
    street: 'Bul Sv. Petra Cetinjskog'
}

console.log(secondObj);

const combinedObj = {...firstObj, ...secondObj};

console.log(combinedObj);


const person11 = {
    name: 'Luka',
    hello() {
        console.log('Hello')
    }
}

const person12 = {
    name: 'Petar',
    hello() {
        console.log('Hello')
    }
}

const personInstance = new Person('Luka');

console.log(personInstance);

const teacher = new Teacher('Teacher', 'MSc');
console.log(teacher);
