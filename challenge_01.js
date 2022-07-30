
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie das Ergebnis der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe" => "Das Ergebnis lautet: "
*/

/*  Meine Xte Lösung zur Programmieraufgabe ... */
/* +, -, * und / samt Idiotenschleife! und es Funktioniert */
/*********************************************************************************/

let zahl, zahl1, zahl2, operant, op;

zahl1 = getZahl();

operant = getOperant();

zahl2 = getZahl();

console.log("Das Ergebnis von " + zahl1 + " " + operant + " " + zahl2 + " = " + rechner(zahl1, operant, zahl2));

/*********************************************************************************/
function getZahl() {
    do { zahl = Number(prompt("Bitte ein Zahl eingeben: "));
    } while (isNaN(zahl));
    return zahl
}
/*********************************************************************************/
function getOperant(){
    do { operant = (prompt("Bitte Operanten eingeben ( + oder - oder * oder / ): "));
       switch (operant) {
                case "+":
                case "-":
                case "*":
                case "/":
                    op = true;
                    break
                default:
                    op = false;
                    console.log("Bitte einen korrekten Operanten eingeben!");
                    break
                };
    } while (op == false) 
    return operant
};    
/*********************************************************************************/
function rechner(zahl1, operant, zahl2) {
    switch (operant) {
        case "+":
            return (summe(zahl1,zahl2));
        case "-":
            return (differenz(zahl1,zahl2));
        case "*":
            return (multiplikation(zahl1,zahl2));
        case "/":
            return (division(zahl1,zahl2));
        default:
            return "Error!"
    }
}
/*********************************************************************************/
function summe(zahl1, zahl2) { 
    return (zahl1 + zahl2) }

function differenz(zahl1, zahl2) { 
    return (zahl1 - zahl2) }

function multiplikation(zahl1, zahl2) { 
    return (zahl1 * zahl2) }

function division(zahl1, zahl2) {
      if (zahl2 != 0) { 
        return (zahl1 / zahl2) }
      else 
        return console.log("Division durch 0 ist nicht erlaubt!")
     }
/*********************************************************************************/
// EoP