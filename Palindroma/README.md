#PALINDROMA

Chiedere all'utente di inserire una parola,
e creare una funzione per capire se la parola inserita è palindroma.

1. Creazione Funzione controllo parola Palindroma

   la funzione deve verificare se la parola inserita è palindroma oppure no.
    
   la funzione avrà il parametro word1

   e come output il valore Booleano false e true

2. Logica

   definiamo una variabile e tramite prompt chiediamo all'utente di inserire una parola

   Creiamo una variabile parolaInvertita sarà uguale a parola(prima variabile inizializzata) .split().reverse().join(). Metodi che prima trasformano la stringa in un array poi la invertono e che poi la riconvertono in stringa ricongiungendo gli elementi in precedenza separati dal metodo split.

   Condizione

    se(parola1 sarà uguale a parora 2 reverse)
       avremo un palindromo "true"
    altrimenti
       "false" 

3. OUTPUT

   inizializiamo una variabile in uno
   script separato
   la variabile sarà uguale al nome che abbiamo dato alla funzione.
   stampiamo tramite console il risultato del nostro codice.
