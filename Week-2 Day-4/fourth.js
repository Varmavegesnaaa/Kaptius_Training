function capitaliseStrings(arr) {
    // Using built-in string method
    let capitalisedBuiltIn = arr.map(str => str.toUpperCase());

    // Manually replacing each character with an uppercase letter
    let capitalisedManual = arr.map(str => {
        let upperStr = '';
        for (let i = 0; i < str.length; i++) {
            let upperChar = String.fromCharCode(str.charCodeAt(i) - 32);
            upperStr += upperChar;
        }
        return upperStr;
    });

    return capitalisedBuiltIn; // or return capitalisedManual;
}

console.log(capitaliseStrings(["hello", "world"])); // Output: ["HELLO", "WORLD"]
console.log(capitaliseStrings(["javascript", "arrays"])); // Output: ["JAVASCRIPT", "ARRAYS"]

//----------------------------------------------------------------------------------------------------

function findPrimeNumbers(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    return arr.filter(isPrime);
}

console.log(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]
console.log(findPrimeNumbers([10, 11, 12, 13, 14, 15])); // Output: [11, 13] 

//-----------------------------------------------------------------------------------------------------

function manipulateArray(arr) {
    arr.push(6);

    arr.shift();

    let containsThree = arr.includes(3);

    let newArr = arr.slice(2, 6);

    newArr.sort();

    let resultString = newArr.join(',');

    return resultString;
}

console.log(manipulateArray([1, 2, 3, 4, 5]));
console.log(manipulateArray([5, 2, 7, 1, 9]));