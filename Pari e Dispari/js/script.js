
// Chiediamo all utente di scegliere pari e dispari
const utenteParOdisp = prompt("scegli pari o dispari");
// dis cegliere un numero tra 
const utenteNum = parseInt(prompt("scegli un numero da 1 a 5: "));
if (isNaN(utenteNum) || utenteNum < 1 || utenteNum > 5) {
    alert("Input non valido. Inserisci un numero da 1 a 5.");
    // Chiedi nuovamente all'utente di inserire un numero da 1 a 5
    utenteNum = parseInt(prompt("Inserisci un numero da 1 a 5:"));
}
let numComputer = generaRandom((1,5));

let somma = utenteNum + numComputer;

let sommaPari = sommaNum();

// Dichariamo chi ha vinto
if (utenteNum === "pari" && sommaPari) {
    alert("Hai vinto! La somma è pari.");
} else if (utenteNum === "dispari" && !sommaPari) {
    alert("Hai vinto! La somma è dispari.");
} else {
    alert("Hai perso! La somma è " + (sommaPari ? "pari" : "dispari") + ".");
}


console.log(generaRandom(1,5));





console.log(isPari());



