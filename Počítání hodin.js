console.log('Počítání hodin')
//Napište cyklus WHILE, který do konzole 
//postupně vypíše všechny časové údaje v rámci jednoho dne od 0:00 až po 23:59.


for(let hours=0; hours<24; hours++) {
    for(let minutes=0; minutes<60; minutes++) {
        let hodiny = hours.toString().padStart(2, '0')
        let minuty = minutes.toString().padStart(2, '0')
        console.log(`${hodiny}:${minuty}`)
    }
}