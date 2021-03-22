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

/** 
* arrayInterval - verifica i valori compresi tra due posizioni (comprese)
* 
* @param  {number} a //numero più piccolo 
* @param  {number} b //numero più grande
* @param  {array} array //narray di riferimento
* @return {array} //un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// */
function arrayInterval(a, b, array) {
    var arryInt = [];
    for ( var i = (a - 1); i < b; i++ ) {
        arryInt.push(array[i]);
    }
    return arryInt;
} 

const numbers = [];

for ( var y = 0; y < 20; y++ ) {
    var num = getRndInteger(0, 100);
    numbers.push(num);
}
console.log(numbers);

const Interval = arrayInterval(3, 10, numbers);
console.log(Interval);
