function checkAvailability(bookingDateStr) {
    let currentDate = new Date();
    let bookingDate = new Date(bookingDateStr);

    return bookingDate > currentDate;
}

console.log(checkAvailability("2024-07-15"));
console.log(checkAvailability("2022-12-31"));

//----------------------------------------------------------------------------------------------------

function calculateDaysLeft(deadlineStr) {
    let currentDate = new Date();
    let deadline = new Date(deadlineStr);

    let utcCurrentDate = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    let utcDeadline = Date.UTC(deadline.getFullYear(), deadline.getMonth(), deadline.getDate());

    let msPerDay = 24 * 60 * 60 * 1000;
    let daysLeft = (utcDeadline - utcCurrentDate) / msPerDay;

    return Math.ceil(daysLeft);
}

const deadline = "2024-07-15";
const daysLeft = calculateDaysLeft(deadline);
console.log(daysLeft); 

//-----------------------------------------------------------------------------------------------------

function convertStringToNumber(str) {
    return Number(str);
}

console.log(convertStringToNumber("42"));
console.log(convertStringToNumber("3.14"));

function convertNumberToString(num) {
    return String(num);
}

console.log(convertNumberToString(42));
console.log(convertNumberToString(3.14));

function convertBooleanToString(bool) {
    return String(bool);
}

console.log(convertBooleanToString(true));
console.log(convertBooleanToString(false));

function convertNumberToBoolean(num) {
    return Boolean(num);
}

console.log(convertNumberToBoolean(0));
console.log(convertNumberToBoolean(1));
console.log(convertNumberToBoolean(-1));
console.log(convertNumberToBoolean(42));
