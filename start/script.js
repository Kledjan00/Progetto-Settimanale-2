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
   { nome: "Monitor", categoria: "Elettronica", prezzo: 150, rating: 4, immagine: "img/monitor.jpg", disponibile: true },
   { nome: "Cuffie", categoria: "Elettronica", prezzo: 49, rating: 3, immagine: "img/cuffie.jpg", disponibile: true },
   { nome: "Tastiera", categoria: "Elettronica", prezzo: 29, rating: 2, immagine: "img/tastiera.jpg", disponibile: false },
   { nome: "Il Signore degli Anelli", categoria: "Libri", prezzo: 24, rating: 5, immagine: "img/anelli.jpg", disponibile: true },
   { nome: "Il Piccolo Principe", categoria: "Libri", prezzo: 8, rating: 4, immagine: "img/principe.jpg", disponibile: true },
   { nome: "Manuale di JavaScript", categoria: "Libri", prezzo: 35, rating: 3, immagine: "img/manuale.jpg", disponibile: false },
   { nome: "Giacca", categoria: "Abbigliamento", prezzo: 89, rating: 4, immagine: "img/giacca.jpg", disponibile: true },
   { nome: "Maglietta", categoria: "Abbigliamento", prezzo: 12, rating: 2, immagine: "img/maglietta.jpg", disponibile: true },
   { nome: "Scarpe", categoria: "Abbigliamento", prezzo: 64, rating: 5, immagine: "img/scarpe.jpg", disponibile: false },
   { nome: "Lampada", categoria: "Casa", prezzo: 19, rating: 3, immagine: "img/lampada.jpg", disponibile: true },
   { nome: "Tostapane", categoria: "Casa", prezzo: 27, rating: 1, immagine: "img/tostapane.jpg", disponibile: true },
   { nome: "Set di pentole", categoria: "Casa", prezzo: 79, rating: 4, immagine: "img/pentole.jpg", disponibile: false }
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
console.log(`${prodotti[1].nome}: ${formattaPrezzo(prodotti[1].prezzo)}`);
console.log(`${prodotti[4].nome}: ${formattaPrezzo(prodotti[4].prezzo)}`);

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/



/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


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
