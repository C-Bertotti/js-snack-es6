// Snack2
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

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadre = [
    {
        nome: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti. 
const falliSquadre = [];
var squadra;
for ( let i = 0; i < squadre.length; i++ ) {
    squadra = squadre[i];
    let { nome, puntiFatti, falliSubiti  } = squadra;
    puntiFatti = getRndInteger(1, 12);
    falliSubiti = getRndInteger(1, 12);
    squadra.falliSubiti = falliSubiti;
    squadra.puntiFatti = puntiFatti;
    falliSquadre.push({
        nome: nome, 
        falliSubiti: falliSubiti
    });
};
console.log(squadre);
console.log(falliSquadre);