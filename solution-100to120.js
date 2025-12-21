function square(n) {
    return n * n;
}

function sum(a, b) {
    return a + b;
}

function greet(name) {
    return "Hello, " + name + "!";
}

function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return n % 2 !== 0;
}

function isBetween1and100(n) {
    return n >= 1 && n <= 100;
}

function isGreater(a, b) {
    return a > b;
}

function isLengthGreaterThan5(str) {
    return str.length > 5;
}

function firstChar(str) {
    return str[0];
}

function lastChar(str) {
    return str[str.length - 1];
}

function longerString(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    return b;
}

function averageOfThree(a, b, c) {
    return (a + b + c) / 3;
}

function numberSign(n) {
    if (n > 0) return "positive";
    if (n < 0) return "negative";
    return "zero";
}

function canVote(age) {
    return age >= 18;
}

function hoursToMinutes(hours) {
    return hours * 60;
}

function minutesToSeconds(minutes) {
    return minutes * 60;
}

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

function triangleArea(base, height) {
    return 0.5 * base * height;
}

function circleArea(r) {
    return Math.PI * r * r;
}

console.log("Q101:", square(2), square(-3), square(0));
console.log("Q102:", sum(5, 7), sum(-2, 10), sum(0, 0));
console.log("Q103:", greet("Neel"), greet(""));
console.log("Q104:", isEven(4), isEven(7), isEven(0));
console.log("Q105:", isOdd(5), isOdd(8), isOdd(0));
console.log("Q106:", isBetween1and100(50), isBetween1and100(1), isBetween1and100(150));
console.log("Q107:", isGreater(10, 5), isGreater(3, 9), isGreater(7, 7));
console.log("Q108:", isLengthGreaterThan5("hello"), isLengthGreaterThan5("javascript"));
console.log("Q109:", firstChar("hello"), firstChar("A"));
console.log("Q110:", lastChar("hello"), lastChar("js"));
console.log("Q111:", longerString("hi", "hello"), longerString("abc", "xyz"));
console.log("Q112:", averageOfThree(3, 6, 9), averageOfThree(10, 20, 25));
console.log("Q113:", numberSign(5), numberSign(-3), numberSign(0));
console.log("Q114:", canVote(17), canVote(18));
console.log("Q115:", hoursToMinutes(2.5));
console.log("Q116:", minutesToSeconds(5));
console.log("Q117:", celsiusToFahrenheit(25));
console.log("Q118:", fahrenheitToCelsius(98.6));
console.log("Q119:", triangleArea(10, 5));
console.log("Q120:", circleArea(3));