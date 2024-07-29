function countOccurrences(str, target) {
    let count = 0;
    let pos = str.indexOf(target);
    while (pos !== -1) {
        count++;
        pos = str.indexOf(target, pos + target.length);
    }
    return count;
}

console.log("hello world", "l",countOccurrences("hello world", "l"));
console.log("abababab", "aba",countOccurrences("abababab", "aba"));

//----------------------------------------------------------------------------------------------------

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }
    return str;
}

console.log("JavaScript is awesome", 10,truncateString("JavaScript is awesome", 10));
console.log("Hello World!", 20,truncateString("Hello, world!", 20)); 

//-----------------------------------------------------------------------------------------------------

function highlightSearchTerm(text, searchTerm) {
    let low = 0;
    let high = searchTerm.length;

    while (high <= text.length) {
        if (text.substring(low, high) === searchTerm) {
            text = text.substring(0, low) + '*' + searchTerm + '*' + text.substring(high);
            high += 2;
        }
        low += 1;
        high += 1;
    }
    
    return text;
}


console.log(highlightSearchTerm("JavaScript is a programming language. JavaScript is widely used.", "JavaScript"));
console.log(highlightSearchTerm("The quick brown fox jumps over the lazy dog.", "dog"));