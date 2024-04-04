// Funzione controllo parolaPalindroma

/**
 * Description placeholder La funzione deve verificare se la parola inserita dall'utente è palindroma 
 * @date 4/4/2024 - 2:42:52 PM
 *
 * @param {string} word1
 * @returns{boolean} true se la parola inserita è palindroma, false se non lo è. 
 */
function parPalindroma (word1) {
   let word = prompt("inserisci una parola");
   console.log("parola iniziale", word);
   let wordInvert = word.split("").reverse().join("");
   console.log("parola inverita", wordInvert);
   let result;
   if(word === wordInvert) {
    result = true;
    console.log("è vero");
   } else {
    result = false;
  
   }

   return result;
   
}


 
