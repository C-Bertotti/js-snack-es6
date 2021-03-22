// Snack2
//Definisco le funzioni

const getRndInteger = (min, max) => {
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
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const falliSquadre = squadre.map((item) => {
    item.puntiFatti = getRndInteger(1, 12);
    item.falliSubiti = getRndInteger(1, 12);
    // let { nome, falliSubiti: falli /*alias si crea mettendo i due punti seguito dal nome che desideriamo */ } = item;
    return { squadra: item.nome, falli: item.falliSubiti };
});
console.log(squadre);
console.log(falliSquadre);