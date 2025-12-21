let Celsius = 25;   

let F = (Celsius * 9/5) + 32;

console.log(F);

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius());