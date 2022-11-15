/*Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.*/

const ListaSpesa = ["uova", "latte", "biscotti", "caffè", "burro", "pane", "marmellata"];

/*CICLO FOR_______________________________________________________________________________//

for (i = 0; i < ListaSpesa.length; i++) {
    console.log(ListaSpesa[i]);
}
*/

//CICLO WHILE_____________________________________________________________________________//

i = 0;
while (i < ListaSpesa.length) {

    console.log(ListaSpesa[i]);

    //STAMPA IN HTML__________________________________________________________________________//

    MiaSpesa.innerHTML += `<li>` + ListaSpesa[i] + `</li>`
    i++;
}
