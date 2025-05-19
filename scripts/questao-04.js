const temperaturaCelsius = [0, 10, 20, 30, 40];
const temperaturasFahrenheit = [];
let contadorArrayFahrenheit = 0;

// Fórmula: F = C * 9/5 + 32

// Varredura do arrey com laço de repetição 
for (let i = 0; i < temperaturaCelsius.length; i++) {
    temperaturasFahrenheit[contadorArrayFahrenheit] =
     (temperaturaCelsius[i] * 9) / 5 + 32;
    contadorArrayFahrenheit++;
}

console.table(temperaturaCelsius);
console.table(temperaturasFahrenheit);
