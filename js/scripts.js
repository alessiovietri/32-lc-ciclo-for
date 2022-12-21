// i++
// i = i + 1
// i += 1

// for (CONTATORE; CONDIZIONE DI PERMANENZA; MODALITA DI AVANZAMENTO) {
  
//  // Istruzioni da eseguire
 
// }

console.log('PRIMA DEL CICLO FOR');

// for (let i = 1; i <= 10; i++) {
// for (let i = 0; i <= 9; i++) {
for (let i = 0; i < 10; i++) {

    console.log('DURANTE IL CICLO FOR', i);

    document.getElementById('mio-div').innerHTML += '<p>' + (i + 1) + '° P</p>';

} 

console.log('DOPO IL CICLO FOR');

// ---------------------------------------------------------------------------------------------------

console.log('PRIMA DEL SECONDO CICLO FOR');

for (let contatore = 10; contatore >= 1; contatore--) {

    console.log('DURANTE IL SECONDO CICLO FOR', contatore);

    document.getElementById('mio-div-2').innerHTML += '<p>' + contatore + '° P</p>';

} 

console.log('DOPO IL SECONDO CICLO FOR');

// ---------------------------------------------------------------------------------------------------

console.log('PRIMA DEL TERZO CICLO FOR');

for (let contatore = 9; contatore >= 1; contatore = contatore - 2) {

    console.log('DURANTE IL TERZO CICLO FOR', contatore);

    document.getElementById('mio-div-3').innerHTML += '<p>' + contatore + '° P</p>';

} 

console.log('DOPO IL TERZO CICLO FOR');

// ---------------------------------------------------------------------------------------------------

console.log('PRIMA DEL QUARTO CICLO FOR');

let i = 15;
for (i = 0; i < 10; i++) {

    console.log('DURANTE IL QUARTO CICLO FOR', i);

    document.getElementById('mio-div-4').innerHTML += '<p>' + i + '° P</p>';

} 

console.log('DOPO IL QUARTO CICLO FOR');