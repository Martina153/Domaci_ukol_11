console.log('Těžší algoritmy')
const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ]
//Vypište na výstup všechna čísla, která jsou větší než jejich předchůdce.
for (i=1; i<numbers.length;i++) {
    if(numbers[i]>numbers[i-1]) {
        console.log(numbers[i])
    }
}
//Vypište na výstup všechny vrcholy v daném poli. 
//Vrchol je číslo, které je větší než jeho předchůdce i jeho následovník.
for (i=1; i<numbers.length;i++) {
    if(numbers[i]>numbers[i-1]&&numbers[i]>numbers[i+1]) {
        console.log(numbers[i])
    }
}
//Nejprve spočítejte průměr čísel v poli a výsledek si ulože do proměnné mean. 
//Poté spočítejte součet druhých mocnin vzdáleností všech čísel od průměru.
let sum=0
for(i=0; numbers.length>i;i++) {
    sum+=numbers[i]
}
const mean=sum/numbers.length
console.log("Prumer je " + mean)
let sumOfDistance=0
for(i=0; numbers.length>i;i++) {
    let distance=numbers[i]-mean
    sumOfDistance += Math.pow(distance,2)
}

console.log("Rozptyl je " +sumOfDistance)

//Spočítejte směrodatnou odchylku čísel v poli. 
//To provedete tak, že nejprve spočítáte takzvaný rozptyl, 
//což je průměr druhých mocnin vzdáleností všech čísel od průměru.
// Rozptyl pak odmocníte pomocí funkce Math.sqrt.
const smerodajnaOdchylka = Math.sqrt(sumOfDistance/numbers.length)
console.log("Smerodajna odchylka je " +smerodajnaOdchylka)
//Najděte v seznamu největší prvek.
let max = numbers[0]
numbers.forEach((number) => {
  if (number > max) {
    max = number
  }
})
console.log('Najvacsie cislo je:', max)
//Najděte v seznamu největší prvek, který je menší než číslo 16.
let maxNumber = null;

numbers.forEach((number) => {
  if (number < 16 && (maxNumber === null || number > maxNumber)) {
    maxNumber = number;
  }
});

console.log(maxNumber)