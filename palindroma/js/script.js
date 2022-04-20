/*
Palindroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input

*/

// PROCEDIMENTO:
// 
// 
// 
// 
// 

let word = prompt('inserisci una parola e scopri se è palindroma o no');
let invertWord = invertedWord(word);

if(word == invertWord){
  console.log('La parola inserita è palindroma');
} 
else {
    console.log('La parola inserita non è palindroma');
}

function invertedWord(wordStr){
  let invertWord = '';

  let i = wordStr.length - 1;

  while (i >= 0) {
    invertWord += wordStr[i];
    i--;
  }

  return invertWord;}