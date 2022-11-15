/*Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.*/

const ListaSpesa = ["uova", "latte", "biscotti", "caffè", "burro", "pane", "marmellata"];

for (i = 0; i < ListaSpesa.length; i++) {
    console.log(ListaSpesa[i]);
}

i = 0;
let DaComprare = "";
while (ListaSpesa[i]) {
    DaComprare += ListaSpesa[i] + "<br>"
    i++;
}

console.log(DaComprare);

document.getElementById("TestoSpesa").innerHTML = DaComprare;