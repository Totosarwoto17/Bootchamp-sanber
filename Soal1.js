const prompt = require('prompt-sync')();

const userInput = prompt('Masukkan bilangan genap: ');

const inputNumber = parseInt(userInput);

if (isNaN(inputNumber) || inputNumber < 0) {
  console.log('Tidak bisa input bilangan negatif');
} else if (inputNumber % 2 !== 0) {
  console.log('Tidak bisa input bilangan ganjil.');
} else {
  const result = Math.sqrt(inputNumber);
  console.log(`Akar pangkat 2 dari ${inputNumber} adalah: ${result}`);
}