/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

const prodotti = [
   { nome: "Monitor", categoria: "Elettronica", prezzo: 150, rating: 4, immagine: "img/Monitor.jpg", disponibile: true },
   { nome: "Cuffie", categoria: "Elettronica", prezzo: 49, rating: 3, immagine: "img/Cuffie.jpg", disponibile: true },
   { nome: "Tastiera", categoria: "Elettronica", prezzo: 29, rating: 2, immagine: "img/Tastiera.jpg", disponibile: false },
   { nome: "Fahrenheit 451", categoria: "Libri", prezzo: 21.90, rating: 5, immagine: "img/Fahrenheit.jpg", disponibile: true },
   { nome: "1984", categoria: "Libri", prezzo: 15.90, rating: 5, immagine: "img/1984.jpg", disponibile: true },
   { nome: "Superuomo", categoria: "Libri", prezzo: 15, rating: 4, immagine: "img/Superuomo.jpg", disponibile: true },
   { nome: "The Witcher 3", categoria: "Giochi", prezzo: 5, rating: 5, immagine: "img/The Witcher3.jpg", disponibile: true },
   { nome: "Laccino", categoria: "Abbigliamento", prezzo: 2.90, rating: 2, immagine: "img/Laccino.jpg", disponibile: true },
   { nome: "Scarpe", categoria: "Abbigliamento", prezzo: 64, rating: 5, immagine: "img/Scarpe.jpg", disponibile: false },
   { nome: "Lampada", categoria: "Casa", prezzo: 17, rating: 1, immagine: "img/Lampada.jpg", disponibile: true },
   { nome: "Divano", categoria: "Casa", prezzo: 220, rating: 1, immagine: "img/Divano.jpg", disponibile: true },
   { nome: "Letto", categoria: "Casa", prezzo: 179, rating: 4, immagine: "img/Letto.jpg", disponibile: false }
];

console.table(prodotti);


/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

function formattaPrezzo(prezzo) {

   const euro = Math.floor(prezzo);
   let centesimi = Math.round((prezzo - euro) * 100);

   if (centesimi < 10) {
      centesimi = "0" + centesimi;
   }
   return `€ ${euro},${centesimi}`;
}

console.log(`${prodotti[0].nome}: ${formattaPrezzo(prodotti[0].prezzo)}`);
console.log(`${prodotti[3].nome}: ${formattaPrezzo(prodotti[1].prezzo)}`);
console.log(`${prodotti[7].nome}: ${formattaPrezzo(prodotti[4].prezzo)}`);

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

function stelline(rating) {
   let risultato = "";

   for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
         risultato = risultato + "★";
      } else {
         risultato = risultato + "☆";
      }
   }

   return risultato;
}

console.log(`${prodotti[0].nome}: rating ${prodotti[1].rating} → "${stelline(prodotti[0].rating)}"`);
console.log(`${prodotti[3].nome}: rating ${prodotti[8].rating} → "${stelline(prodotti[8].rating)}"`);

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

function filtraPerCategoria(categoria) {
   const risultato = [];

   for (let i = 0; i < prodotti.length; i++) {
      if (prodotti[i].categoria === categoria) {
         risultato.push(prodotti[i]);
      }
   }

   return risultato;
}

// test
console.log("Prodotti della categoria Libri:");
console.table(filtraPerCategoria("Libri"));


/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

function filtraDisponibiliAlti() {
   const risultato = [];

   for (let i = 0; i < prodotti.length; i++) {
      if (prodotti[i].disponibile === true && prodotti[i].rating >= 3) {
         risultato.push(prodotti[i]);
      }
   }

   return risultato;
}

// test
console.log("Prodotti disponibili con rating >= 3:");
console.table(filtraDisponibiliAlti());

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/*--- Prendo dal DOM il contenitore vuoto dove metto la tabella ---*/
const tabella = document.getElementById("tabella");

function renderProdotti(lista) {
   /*--- parto da una stringa con l'inizio della tabella e la riga dei titoli ---*/
   let html = `
      <table>
         <thead>
            <tr>
               <th>Nome</th>
               <th>Categoria</th>
               <th>Prezzo</th>
               <th>Rating</th>
            </tr>
         </thead>
         <tbody>
   `;

   /*---- per ogni prodotto aggiungo una riga alla stringa ---*/
   for (let i = 0; i < lista.length; i++) {
      html = html + `
            <tr>
               <td>${lista[i].nome}</td>
               <td>${lista[i].categoria}</td>
               <td>${formattaPrezzo(lista[i].prezzo)}</td>
               <td class="stelle">${stelline(lista[i].rating)}</td>
            </tr>
      `;
   }

   /*--- chiudo il body della tabella e aggiungo la riga finale con il totale ---*/
  
   html = html + `
         </tbody>
         <tfoot>
            <tr>
               <td colspan="4">Totale prodotti = ${lista.length}</td>
            </tr>
         </tfoot>
      </table>
   `;

   /*--- metto tutta la tabella nel contenitore in una volta sola --*/
   tabella.innerHTML = html;
}

/*--- senza questa riga non compare niente ---*/
renderProdotti(prodotti);



/* Extra VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/*Extra VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/*Extra VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/*Extra VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
