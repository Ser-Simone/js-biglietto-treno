const selezione = prompt ("Scegli Pari o dispari") ;
const numero = prompt("Scegli un numero compreso tra 1 e 9")
const numeroPC = Math.floor(Math.random() * 10);
let somma = 0;
let pippo = 0;

console.info(numeroPC);


somma = parseInt(numero) + numeroPC;
alert("la somma è" + somma);
pippo= somma%2;
console.info(pippo);

if((pippo == 0) && (selezione == 'pari'))
{
    alert("Hai vinto");
}else if ((pippo == 1) && (selezione == 'pari'))
{
    alert("Hai perso")
} else if ((pippo == 1) && (selezione == 'dispari'))
{
    alert("Hai vinto");
} else if ((pippo == 0) && (selezione == 'dispari'))
{
    alert("Hai perso");
}

/*switch (selezione)
{
    case "pari || Pari":
    if ( pippo == 0)
    {
        alert("Hai vinto");
    }
    else { alert("Hai perso") } 
    break;

    case "dispari || Dispari" :
    if (pippo==1)
    {
        alert("Hai vinto");
    } 
    else { alert("Hai perso") }
    break;
}*/