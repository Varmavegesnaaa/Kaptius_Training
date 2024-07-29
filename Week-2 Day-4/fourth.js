function capitaliseStrings(arr) {
    let capitalisedBuiltIn = arr.map(str => str.toUpperCase());

    let capitalisedManual = arr.map(str => {
        let upperStr = '';
        for (let i = 0; i < str.length; i++) {
            let upperChar = String.fromCharCode(str.charCodeAt(i) - 32);
            upperStr += upperChar;
        }
        return upperStr;
    });

    return capitalisedBuiltIn;
}

console.log(capitaliseStrings(["hello", "world"]));
console.log(capitaliseStrings(["javascript", "arrays"]));

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

console.log(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findPrimeNumbers([10, 11, 12, 13, 14, 15]));

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