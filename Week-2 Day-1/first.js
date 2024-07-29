function storeUserData() {
    const user = {
        name: "gnana",
        age: 30,
        salary: 50000,
        skills: ["JavaScript", "HTML", "CSS"]
    };

    if (!validateRegistrationData(user)) {
        console.log("Invalid user data. Data not stored.");
        return;
    }

    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
    console.log("User data stored successfully.");
}

function getUserData() {
    const userJSON = localStorage.getItem('user');

    if (userJSON) {
        const user = JSON.parse(userJSON);

        console.log("Retrieved user data:", user);
    } else {
        console.log("No user data found in localStorage.");
    }
}

storeUserData();
getUserData();

//-----------------------------------------------------------------------------------------------------------------

function validateRegistrationData(user) {
    if (typeof user.name !== 'string' || user.name.trim() === '') {
        return false;
    }

    if (typeof user.age !== 'number' || user.age < 18) {
        return false;
    }

    return true;
}
const userData1 = {
    name: "Jane Doe",
    age: 25,
    salary: 60000,
    skills: ["Python", "Django"]
};

const userData2 = {
    name: "",
    age: 17,
    salary: 40000,
    skills: ["C++", "Java"]
};

console.log(userData1,validateRegistrationData(userData1));
console.log(userData2,validateRegistrationData(userData2));

//-----------------------------------------------------------------------------------------------------------------

function incrementValues(arr, increment) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += increment;
    }
}

const numbers = [1, 2, 3, 4, 5];
incrementValues(numbers, 2);
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}
