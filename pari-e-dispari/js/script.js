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

const chooseEvenOdd = document.getElementById('choose-odd-even')
chooseEvenOdd.innerHTML = `Hai scelto: ${evenOdd}`



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

const userChoice = document.getElementById ('user-choice')
userChoice.innerHTML = `${userNum}`


//variabile in cui il computer sceglierà un numero a random tra 1 e 5
const cpuNum = randomNum(1, 5); 

const cpuChoice = document.getElementById ('cpu-choice')
cpuChoice.innerHTML = `${cpuNum}`


function randomNum(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
    
}


// metodo function per indicare il vincitore
function winner(userNum, cpuNum) {
    
  // variabile indica la somma del numero dell'utente e del numero della cpu
  const sum = userNum + cpuNum;
  
  let result;

  
  // se la somma non è divisibile per 2, è dispari
  if(sum % 2){
    result = 'dispari';
  } 
  
  // altrimenti è pari
  else {
    result = 'pari';
  }
  
  const sumNumbers = document.getElementById ('sum-number')
  sumNumbers.innerHTML = `${sum}`

  return result;
}   



const resultGame = document.getElementById('result-game');

// se tra la somma dell'utente
if(winner(userNum, cpuNum) === evenOdd) {
  
  resultGame.innerHTML = 'Vince chi ha scelto Pari';
} 

else {
  
  resultGame.innerHTML = 'Vince chi ha scelto dispari';
  
}
console.log(winner(userNum, cpuNum));


