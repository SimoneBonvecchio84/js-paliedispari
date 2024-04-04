
/**
 * Description: Generiamo un numero random da 1 a 5
 * @date 4/4/2024 - 6:46:35 PM
 *
 * @param {number} min estemo inferiore
 * @param {number} max estremo superiore
 * 
 * @returns {number}
 */
function generaRandom(min, max) {
    let numRandom = Math.floor(Math.random() * max - min + 1) + min;
    return numRandom
}

/***************************************************** */

/**
 * Description: Somma i numeri e stabilisci se il risultato è pari o dispari
 * @date 4/4/2024 - 6:58:04 PM
 *
 * @param {number} num1
 * @param {number} num2
 * 
 * @returns {number} valore booleano 
 */
function sommaNum(num1, num2) {
   const esito = num1 + num2;

   return esito;
}


function isPari(controllaNum) {
    
    return numero % 2 ===0;
}