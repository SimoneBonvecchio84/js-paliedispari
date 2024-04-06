// Funzione controllo parolaPalindroma

/**
 * Description placeholder La funzione deve verificare se la parola inserita dall'utente è palindroma 
 * @date 4/4/2024 - 2:42:52 PM
 *
 * @param {string} word1
 * @param {Array} array
 * @returns{boolean} true se la parola inserita è palindroma, false se non lo è. 
 */
function parPalindroma(word1, indice, revers) {

   indice = "";

   for (let i = 0; i < word1.length; i++) {

      indice += word1[i];

   }

   revers = "";

   for (let j = indice.length - 1; j >= 0; j--) {

      revers += indice[j];

   }

  

   return indice === revers;
}




