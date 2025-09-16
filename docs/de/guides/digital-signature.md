---
title: Certifaction PAdES Digitale Signatur
description: Details zur Certifaction PAdES Digitalsignatur für hochvertrauliche Dokumente
---

# Digitale Signatur

Certifactions digitale Signatur ermöglicht es Benutzern, eine oder mehrere digitale Signaturen zu PDF-Dokumenten hinzuzufügen.

Certifaction-Dokumentsignaturen basieren auf dem [PAdES](https://en.wikipedia.org/wiki/PAdES)-Standard,
der Kryptografie und Public Key Infrastructure (PKI) verwendet, um die höchste Garantie gegen Fälschung zu bieten.

Certifaction verwendet drei Signaturebenen mit steigenden Identitätsverifikationsgewährleistungen:

- Standard Electronic Signature (SES): E-Mail-Verifizierung
- Advanced Electronic Signature (AES): erweiterte Verifizierungsanforderungen
- Qualified Electronic Signature (QES): Schweizer und EU-Anforderungen für qualifizierte elektronische Signaturen

Certifactions einzigartige datenschutzorientierte Signatur stellt sicher, dass der Dokumentinhalt Ihre
IT-Infrastruktur nicht im Klartext verlässt.

## Einfache Dokumentsignatur

Hier sind die Schritte während einer einfachen Dokumentsignatur:

1.  Die CLI erhält das zu signierende PDF-Dokument und verarbeitet es (fügt Sicherheitsfeatures hinzu, einschließlich einer eindeutigen sicheren URL und einer oder mehrerer Signaturseiten).
2.  Der Hash der Datei wird zur Signatur an die Certifaction-API gesendet.
3.  Die Certifaction-API verwendet einen ihrer austauschbaren Signaturanbieter, abhängig von der Signaturebene und Jurisdiktion.
4.  Die Certifaction-API gibt die PKCS #7 CMS-Signatur an die CLI zurück.
5.  Die CLI bettet die Signatur in das PDF-Dokument ein und gibt es an den Benutzer zurück.

Zusätzliche Signaturen können sequenziell an ein bereits signiertes Dokument angehängt werden. Das Senden eines signierten Dokuments an einen
anderen Unterzeichner ist eine einfache und gültige Option.

![Dokumentsignaturdiagramm](../../assets/document-signature-diagram.png)