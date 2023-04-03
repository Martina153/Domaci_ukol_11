console.log('Čekání na šestku')
//Napište funkci roll, která simuluje hod kostkou. 
//Vrátí tedy náhodné číslo od 1 do 6 tak, že všechna čísla mají stejnou pravděpodobnost

const roll =() => {
  return  Math.floor(Math.random()*6)+1
}
//Váš program nechť hází kostkou tak dlouho, až poprvé padne šestka. 
//Vypište na výstup na kolikátý pokus šestka padla.
let count=1
while (roll()!==6) {
  count++
}
console.log("Sestka padla na " + count + " pokus")