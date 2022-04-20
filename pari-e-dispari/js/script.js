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

