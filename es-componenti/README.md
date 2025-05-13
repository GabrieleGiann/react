Crea una nuova applicazione React con vite e rimuovi tutti i file dalla cartella src.

All'interno della cartella src, crea un componente funzione Hello che renderizzi il messaggio "Hello, World!" all'interno di un tag h2.

Scrivi un componente funzione chiamato App che renderizzi il componente Hello all'interno di un tag div.

Crea un nuovo file index.jsx nella cartella src e renderizzi il componente App utilizzando la funzione createRoot e il metodo render sull'oggetto root creato.

Avvia l'applicazione con il comando npm run dev e apri l'applicazione nel browser (il percorso predefinito è http://localhost:5173).

Crea un nuovo componente Message che renderizzi un tag p con il messaggio "Che bella giornata!".

Renderizza il nuovo componente all'interno del componente Hello.
Puoi utilizzare il componente Hello più di una volta nel componente App? Cosa succede se lo fai?

Risposta: Si puoi inserire più volte il componente in app scrivendo i tag all'interno di <> </> e nell'html vengono generati tag h1 e tag p tutti allo stessi livello

Puoi renderizzare il componente Message direttamente all'interno del componente App? Cosa succede se lo fai?
Scrivi le tue risposte in un commento. Modifica il file vite.config.js per modificare la porta predefinita di Vite su 3000.
