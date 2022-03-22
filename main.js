// Dichiarazione delle variabili
let eta = prompt ("inserisci qua l'età del passeggero");
let km = prompt ("Inserisci i km che vuoi percorrere");
const prezzo = 0.21;
let costo = 0;
let sconto = 0;
const euro = "€";

// Condizioni
 if(eta<18)
{
    costo = km * prezzo;
    sconto= costo * 0.2;
    costo = costo - sconto;
    costo = costo.toFixed(2) + euro;

} else if (eta > 65)
{
    costo = km * prezzo;
    sconto= costo * 0.4;
    costo = costo - sconto;
    costo = costo.toFixed(2) + euro;
} else
{
    costo = km * prezzo + euro;
}



document.getElementById("costo").innerHTML = costo;
