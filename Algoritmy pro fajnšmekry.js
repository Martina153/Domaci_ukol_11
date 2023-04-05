console.log('Algoritmy pro fajnšmekry')
const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

//Vypište na výstup délku nejdelší rostoucí sekvence čísel, 
//které v poli následují přímo po sobě.
let longestSequence = 0;
let currentSequence = 0;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1]) {
    currentSequence++;
  } else {
    if (currentSequence > longestSequence) {
      longestSequence = currentSequence;
    }
    currentSequence = 0;
  }
}

console.log(longestSequence + 1);

//Vypište na výstup délku nejdelší 
//rostoucí nebo klesající sekvence čísel, které v seznamu následují přímo po sobě.
let longestIncreasingSequence = 0;
let currentIncreasingSequence = 0;

for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] < numbers[i+1]) {
    currentIncreasingSequence++;
    if (currentIncreasingSequence > longestIncreasingSequence) {
      longestIncreasingSequence = currentIncreasingSequence;
    }
  } else {
    currentIncreasingSequence = 0;
  }
}

console.log(`Nejdelší rostoucí sekvence má délku ${longestIncreasingSequence + 1}`);

// Hledání nejdelší klesající sekvence čísel
let longestDecreasingSequence = 0;
let currentDecreasingSequence = 0;

for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] > numbers[i+1]) {
    currentDecreasingSequence++;
    if (currentDecreasingSequence > longestDecreasingSequence) {
      longestDecreasingSequence = currentDecreasingSequence;
    }
  } else {
    currentDecreasingSequence = 0;
  }
}
console.log(`Nejdelší klesající sekvence má délku ${longestDecreasingSequence + 1}`);

//Najděte nejnižší vrchol a nejvyšší údolí. 
//Údolí je číslo, které je menší než jeho předchůdce i následovník.
let min = numbers[0]
numbers.forEach((number) => {
  if (number < min) {
    min = number
  }
})
console.log(min)

