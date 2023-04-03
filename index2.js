console.log('funguju')
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
]

//A)Vypište na výstup všechna čísla, která jsou větší než jejich předchůdce.

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1]) {
    console.log(numbers[i]);
  }
}
//B)Vypište na výstup všechny vrcholy v daném poli. 
//Vrchol je číslo, které je větší než jeho předchůdce i jeho následovník.
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1] && numbers[i]>numbers[i+1]) {
    console.log(numbers[i]);
  }
}

//C)Nejprve spočítejte průměr čísel v poli a výsledek si ulože do proměnné mean. 
//Poté spočítejte součet druhých mocnin vzdáleností všech čísel od průměru.
let sum = 0 
for(let i=0; i< numbers.length; i++) {
  sum+=numbers[i]
}
let mean = sum/numbers.length

let sumOfDistances= 0
for (let i = 0; i < numbers.length; i++) {
  let distance = numbers[i] - mean
  sumOfDistances += Math.pow(distance,2)
}

console.log("Prumer: " + mean)
console.log("Soucet druhych mocnin vzdalenosti od prumeru: " + sumOfDistances)

//D)Spočítejte směrodatnou odchylku čísel v poli. 
//To provedete tak, že nejprve spočítáte takzvaný rozptyl, 
//což je průměr druhých mocnin vzdáleností všech čísel od průměru. 
//Rozptyl pak odmocníte pomocí funkce Math.sqrt.
//jako moc jsou hodnoty rozptýleny či odchýleny od průměru hodnot.
//Směrodatná odchylka je rovna odmocnině z rozptylu, 
//Rozptyl nám udává, jak moc jsou hodnoty v našem statistickém soubory rozptýleny. 
//Rozptylu se někdy též říká variance.(rozptyl, pokial ziadne cislo neprevazuje )

const smerodatnaOdchylka = Math.sqrt(sumOfDistances / numbers.length)
console.log('Směrodatná odchylka:', smerodatnaOdchylka)

//Najděte v seznamu největší prvek.

let max = numbers[0]
numbers.forEach((number) => {
	if (number > max) {
		max = number
	}
})
console.log('Největší číslo je:', max)

//Najděte v seznamu největší prvek, který je menší než číslo 16.
let maxNumber = null;

numbers.forEach((number) => {
  if (number < 16 && (maxNumber === null || number > maxNumber)) {
    maxNumber = number;
  }
});

console.log(maxNumber);