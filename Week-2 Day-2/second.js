function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

console.log("Hello World",countVowels("Hello World")); 
console.log("JavaScript",countVowels("JavaScript"));

//----------------------------------------------------------------------------------------------------

function findEvenIndex(arr) {
    let index = 0;
    let foundIndex = -1;
    do {
        if (arr[index] % 2 === 0) {
            foundIndex = index;
            break;
        }
        index++;
    } while (index < arr.length);
    return foundIndex;
}

console.log([1, 3, 4, 7, 9, 10],findEvenIndex([1, 3, 4, 7, 9, 10]));
console.log([1, 3, 7, 9],findEvenIndex([1, 3, 7, 9]));

//-----------------------------------------------------------------------------------------------------

function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log([1,2,3,4,5],findAverage([1, 2, 3, 4, 5])); 
console.log([10,20,30],findAverage([10, 20, 30]));
