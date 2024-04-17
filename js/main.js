//chilometri//
let chilometri = prompt ("quanti chilometri devi fare?");

console.log ("chilometri richesti", chilometri);
//età//
let age = prompt ("quanti anni hai?");

console.log ("anni", age);

//calcolo chilometri//
let prezzo=chilometri*0.21;

console.log ("prezzo senza sconto", prezzo)

let spesa;

//sconti vari//
if (age < 18) {
    spesa=prezzo*0.80;
    console.log("sotto i 18 paghi:",spesa);
}else if (age > 65){
    spesa=prezzo*0.60;
    console.log("sopra i 65 paghi:",spesa);
}else spesa = prezzo

//fix//
let spesaIntera = spesa.toFixed(2)
console.log("Spesa intera è:", spesaIntera)

//html//
document.getElementById("spesa").innerHTML = spesaIntera;

