console.log('Malé algoritmy')
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
]

//Vypište na výstup všechna čísla.

for(let i=0; i<numbers.length; i++) {
  console.log(numbers[i])
}
//Vypište na výstup druhé mocniny všech čísel.
for (let i=0; i<numbers.length;i++) {
  const square = Math.pow(numbers[i], 2)
  console.log(square)
}
//Vypište na výstup pouze záporná čísla.
numbers.forEach((number)=> {
  if(number<0){
    console.log(number)
  }
})
//Vypište na výstup absolutní hodnotu všech čísel.
numbers.forEach((number) => {
 console.log(Math.abs(number))
})

//Vypište na výstup pouze sudá čísla.
numbers.forEach((number) => {
  if(number%2===0) {
    console.log(number)
  }
 })
 //Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
 numbers.forEach((number) => {
  if(Math.abs(number)%3===0) {
    console.log(number)
  }
 })
 //Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.
 numbers.forEach((number) => { 
  console.log(numbers.indexOf(5)-numbers.indexOf(number))
  })
//Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.
  numbers.forEach((number) => { 
  const distance = numbers.indexOf(5)-numbers.indexOf(number)
  console.log(Math.pow(distance,2))
  })
//Spočítejte, kolik je v seznamu záporných čísel.
let count=0
numbers.forEach((number) => { 
  if(number<0) {
    count++
  }})
  console.log(count)
//Spočítejte součet všech čísel v poli.
let sum=0
numbers.forEach((number) => { 
  sum+=number
  })
  console.log(sum)
//Spočítejte průměr všech čísel v poli.
let sum2=0
for(let i=0; i<numbers.length;i++) {
  sum2+=numbers[i]
}
console.log("Prumer je " + sum2/numbers.length)

//Spočítejte součet všech kladných čísel v poli.
let sum3=0
numbers.forEach((number) => {
  if(number>0){ 
  sum3+=number}
  })
  console.log(sum3)

  


