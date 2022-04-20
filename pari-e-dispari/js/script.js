/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/



let evenOdd;

// Variabile con metodo boolean per la scelta del pari e dispari
let isEvenOdd = true;


while(isEvenOdd){
  
  evenOdd = prompt('Cosa scegli? Pari, o dispari?');
  
  // finché la stringa "evenOdd" non risulta che sia o pari o dispari, richiedo il prompt
  if(evenOdd !== 'pari' && evenOdd !== 'dispari'){
    alert('Non hai scritto corretamente la tua scelta. Riprova');
  }
  
  else{
    isEvenOdd = false;
  }
}

console.log('Hai scelto: ', evenOdd)


const resultGame = document.getElementById('result-game');

// variabile che indica il numero che scriverà l'utente
let userNum;

// Variabile con metodo boolean per la scelta del pari e dispari
let result = true;


while(result) {

  userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));

  // finché la variabile "userNum" non risulta che hai inserito un numero da 1 a 5, richiedo il prompt
  if(isNaN(userNum)){
    alert('Inserisci un numero');} 

  // finchè scrivo un numero maggiore di 5, richiedo il prompt
  else if(userNum > 5) {
    alert('Inserisci un numero minore di 5');} 

  // finchè scrivo un numero minore di 5, richiedo il prompt
  else if(userNum < 1){
    alert('Inserisci un numero maggiore di 1');}
    
  else {
    result = false;}
}

console.log(userNum);