
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// 
/*********** Variante 2  ****************/

// Kompaktere Lösung

// let zahl1, zahl2, summe;

// zahl1 = parseInt(prompt("Zahl 1: "));
// zahl2 = parseInt(prompt("Zahl 2: "));
// summe = zahl1 + zahl2;
// console.log("Die Summe der Zahlen ist: " + summe);

// /*********** Variante 3  ****************/
// // Kompakt, aber schlechter lesbar, unflexibel

// console.log
// (
//     "Die Summe ist: " + 
//    (
//     parseFloat(prompt("Bitte Zahl 1 eingeben")) +
//     parseFloat(prompt("Bitte Zahl 2 eingeben"))
//    ) 
// );

/*  Meine Lösung zur Programmieraufgabe ... */

let zahl1 = Number(prompt("Bitte Zahl 1 eingeben: "));
let operant = prompt("Bitte Operanten eingeben ( + | - ): ");
let zahl2 = Number(prompt("Bitte Zahl 2 eingeben: "));

console.log("Das Ergebnis lautet: " + rechner(zahl1, operant, zahl2));

function rechner(zahl1, operant, zahl2) {
    switch (operant) {
        case "+":
            return console.log(summe(zahl1,zahl2));
        case "-":
            return console.log(differenz(zahl1,zahl2));
        default:
            return "Error!"
    }
}

function summe(zahl1, zahl2) {
    return (zahl1 + zahl2)
}

function differenz(zahl1, zahl2) {
    return (zahl1 - zahl2)
}
