// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

//Definisco le funzioni
/** 
 * getRndInteger - genera un numero random
 * 
 * @param  {number} min //numero minimo 
 * @param  {number} max //numero massimo
 * @return {number} //un numero randoma tra il numero max e min
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const numbers = [];

for ( var y = 0; y < 20; y++ ) {
    var num = getRndInteger(0, 100);
    numbers.push(num);
}
console.log(numbers);

do {
    var numeroA = parseInt(prompt('Inserisci un numero A da 0 a 20'));
} while ( numeroA < 0 || numeroA > 20);

do {
    var numeroB = parseInt(prompt('Inserisci un numero B da 0 a 20'));
} while ( numeroB < numeroA || numeroB > 20 );


const newArray = numbers.filter((item) => {
    return numbers.indexOf(item) >= numeroA && numbers.indexOf(item) <= numeroB;
});
console.log(newArray);