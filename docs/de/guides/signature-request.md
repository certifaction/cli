---
title: Signaturanfrage
description: Verwenden Sie Certifaction, um digitale Signaturen für hochvertrauliche Dokumente anzufordern
---

# Signaturanfrage

Benutzer können andere Personen einladen, Dokumente zu signieren, indem sie ihnen sichere Signaturanfrage-URLs bereitstellen, die einen geheimen Schlüssel enthalten. Der geheime Schlüssel entschlüsselt das Dokument vor der Signierung und stellt sicher, dass kein Dritter (nicht einmal Certifaction) Zugriff auf das Dokument im Klartext hat.

Certifaction-Dokumentsignaturanfragen basieren auf dem Certifaction Digital Archive zur Speicherung von Ende-zu-Ende-verschlüsselten
Dokumenten.

Während einer Signaturanfrage wird die CLI:

1.  Das zu signierende PDF-Dokument und die Unterzeichnerinformationen erhalten.
2.  Das Dokument verarbeiten und Sicherheitsfeatures hinzufügen, einschließlich einer sicheren Digital Archive-URL.
3.  Das Dokument mit entweder dem geheimen Schlüssel verschlüsseln, der in der Digital Archive-URL enthalten ist, oder einem manuell bereitgestellten Schlüssel.
4.  Das Dokument im Certifaction Digital Archive für späteren Abruf speichern.
5.  Die Signaturanfrage-URL zurückgeben.

Die Signaturanfrage-URL kann mit der eingeladenen Person geteilt werden. Für jeden Unterzeichner muss eine neue URL erstellt werden.
Da die Signaturanfrage-URL ein Geheimnis enthält, muss der Zugriff darauf genauso geschützt werden wie das ursprüngliche Dokument.

Um die Sicherheit weiter zu erhöhen, können Sie das URL-Geheimnis mit einem kryptografisch starken Passwort verschlüsseln.