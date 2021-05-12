const bici = [{
        nome: 'bianchi',
        peso: 4
    },
    {
        nome: 'olmo',
        peso: 5
    },
    {
        nome: 'legnano',
        peso: 8
    },
    {
        nome: 'coppi',
        peso: 6
    },
    {
        nome: 'pinarello',
        peso: 7
    }
];

let pesoPiccolo = 99;


// utilizzando il ciclo for


// per ogni oggetto interno all'array
// for (let i = 0; i < bici.length; i++){
//     const {peso, nome} = bici[i];
//     console.log(nome, peso);

//     if (peso < pesoPiccolo){
//         pesoPiccolo = peso;
//         nomePiccolo = nome;
//     }
// };


// utilizzando il forEach

bici.forEach((element, index) => {

    const { peso, nome } = bici[index]; // prendi gli elementi peso e nome di bici con index crescente
    console.log(nome, peso); // vedi se funziona


    if (peso < pesoPiccolo) { // se il peso(con idex sempre crescente) è minore di pesoPiccolo
        pesoPiccolo = peso; // quel peso viene sovrascritto in pesoPiccolo
        nomePiccolo = nome; // quel nome viene salvato in nomePiccolo
    };


});

// console.log(pesoPiccolo, nomePiccolo);// stampa le due variabili


console.log(`la bici più leggera è ${nomePiccolo}, il suo peso è ${pesoPiccolo}`);