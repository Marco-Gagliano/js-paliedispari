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
let invertWord = invertWord(word);

if(word == invertWord){
  console.log('la parola è palindroma');
} 
else {
    console.log('la parola non è palindroma');
}