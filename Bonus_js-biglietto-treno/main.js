// Dichiarazione delle variabili
let eta = prompt ("inserisci l'età della prima persona");
let eta2 = prompt ("Inserisci l'età della seconda persona");
let vincitore = '';

// Condizioni
 if(eta<eta2)
{
    vincitore = eta2 + ' seconda persona';
} else if (eta > eta2)
{
    vincitore = eta + ' prima persona';
} 
else
{
    vincitore = 'hanno la stessa età';
}


document.getElementById("vincitore").innerHTML = vincitore;
