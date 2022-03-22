let eta = prompt ("inserisci qua l'età del passeggero");
let km = prompt ("Inserisci i km che vuoi percorrere");
const prezzo = 0.21;
let costo = 0;
const scontoMinore = 20;
const scontoOver = 40;
let sconto = 0;

if(eta > 18 && eta < 65)
{
    costo = km * prezzo;
} else if(eta<18)
{
    costo = km * prezzo;
    sconto= costo * 0.2;
    costo = costo - sconto;
    costo.toFixed(2);

} else if (eta > 65)
{
    costo = km * prezzo;
    sconto= costo * 0.4;
    costo = costo - sconto;
    costo.toFixed(2);
}

//console.info(testoDaStampareInConsole);

document.getElementById("costo").innerHTML = costo;
