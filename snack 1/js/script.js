// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bici = [
    {
        nome: 'Giant',
        peso: 700
    },
    {
        nome: 'Wilier',
        peso: 600
    },
    {
        nome: 'Cervelo',
        peso: 500
    },
];


// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let biciLeggera = bici[1];

for ( let i = 0; i < bici.length; i++ ) {
    const { peso } = bici[i];
    if ( (peso) < (biciLeggera.peso) ) {
        biciLeggera = bici[i];
    }
}

const { nome, peso } = biciLeggera;
console.log(`La bici più leggera è di marca ${nome} poichè pesa ${peso}gr.`);
