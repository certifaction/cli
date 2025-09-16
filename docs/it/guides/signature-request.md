---
title: Richiesta di Firma
description: Utilizzare Certifaction per richiedere la firma digitale di documenti altamente confidenziali
---

# Richiesta di Firma

Gli utenti possono invitare altre persone a firmare documenti fornendo loro URL sicuri di richiesta di firma, che contengono una chiave segreta. La chiave segreta decrittograferà il documento prima della firma, garantendo che nessuna terza parte (nemmeno Certifaction) abbia accesso al documento in testo chiaro.

Le richieste di firma documenti Certifaction si basano sull'Archivio Digitale Certifaction per archiviare documenti
crittografati end-to-end.

Durante una richiesta di firma, il CLI:

1.  Riceve il documento PDF da firmare e le informazioni del firmatario.
2.  Elabora il documento, aggiungendo funzioni di sicurezza incluso un URL sicuro dell'Archivio Digitale.
3.  Crittografa il documento utilizzando la chiave segreta contenuta nell'URL dell'Archivio Digitale, o una chiave fornita manualmente.
4.  Archivia il documento nell'Archivio Digitale Certifaction per il recupero successivo.
5.  Restituisce l'URL della richiesta di firma.

L'URL della richiesta di firma può essere condiviso con la persona invitata. Un nuovo URL deve essere creato per ciascun firmatario.
Poiché l'URL della richiesta di firma contiene un segreto, l'accesso ad esso deve essere protetto nello stesso modo del documento originale.

Per aumentare ulteriormente la sicurezza, è possibile crittografare il segreto URL con una password crittograficamente forte.