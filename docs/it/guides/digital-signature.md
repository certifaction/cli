---
title: Firma Digitale PAdES Certifaction
description: Dettagli della firma digitale PAdES Certifaction per documenti altamente confidenziali
---

# Firma Digitale

La firma digitale di Certifaction consente agli utenti di aggiungere una o più firme digitali ai documenti PDF.

Le firme dei documenti Certifaction sono basate sullo standard [PAdES](https://en.wikipedia.org/wiki/PAdES),
che utilizza la crittografia e l'Infrastruttura a Chiave Pubblica (PKI) per fornire la massima garanzia contro la falsificazione.

Certifaction utilizza tre livelli di firma con crescenti garanzie di verifica dell'identità:

- Firma Elettronica Semplice (SES): verifica dell'email
- Firma Elettronica Avanzata (AES): requisiti di verifica migliorati
- Firma Elettronica Qualificata (QES): requisiti di firma elettronica qualificata svizzera e UE

La firma unica di Certifaction, incentrata sulla privacy, garantisce che il contenuto del documento non lasci la
vostra infrastruttura IT in testo chiaro.

## Firma semplice del documento

Ecco i passaggi durante una firma semplice del documento:

1.  Il CLI riceve il documento PDF da firmare e lo elabora (aggiunge funzioni di sicurezza incluso un URL sicuro univoco e una o più pagine
    di firma).
2.  L'hash del file viene inviato all'API Certifaction per la firma.
3.  L'API Certifaction utilizza uno dei suoi fornitori di firma modulari a seconda del livello di firma e della giurisdizione.
4.  L'API Certifaction restituisce la firma PKCS #7 CMS al CLI.
5.  Il CLI incorpora la firma nel documento PDF e lo restituisce all'utente.

Ulteriori firme possono essere aggiunte sequenzialmente a un documento già firmato. Inviare un documento firmato a un
altro firmatario è un'opzione semplice e valida.

![Diagramma della firma del documento](../../assets/document-signature-diagram.png)