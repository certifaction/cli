---
title: Magenta Security Sign CLI-Referenz
description: Die Magenta Security Sign Client-Kommandozeilenschnittstelle verwendet lokale Verarbeitung und E2E-Verschlüsselung, um hochvertrauliche Dokumente digital zu signieren.
---

# CLI-Referenz

[[toc]]

Die <ProductName/>-Kommandozeilenschnittstelle (CLI) ist ein praktisches Tool zum Signieren von Dokumenten und
zum Anfordern von Signaturen von anderen.

## Allgemeine Verwendung

```shell
mss [mss flags] <command> [arguments]
```

## Hilfe erhalten

Verwenden Sie `mss --help`, um die Liste der verfügbaren Befehle zu erhalten:

```shell
mss --help
Die Magenta Security Sign CLI kann in zwei Modi verwendet werden:
 * Interaktiv zur Ausführung von Befehlen in der Shell, als Teil eines Skripts oder von einer Drittanbieteranwendung aus.
 * Server-Modus, der HTTP-Endpunkte bereitstellt.

In beiden Fällen sitzt die CLI zwischen der Drittanbieteranwendung und der Magenta Security Sign-API und übernimmt die Dokumentsignierung, Verifizierung und den Widerruf, ohne dass der Dokumentinhalt außerhalb der kontrollierten IT-Infrastruktur des Clients preisgegeben wird.

Die beiden Hauptfunktionen der CLI sind Dokumentsignierung und Verifizierung.

Verwendung:
  mss [command]

Verfügbare Befehle:
  certify       Ein Dokument zertifizieren
  delete-access Magenta Security Sign-Zugriff auf die Datei entfernen
  download      Dokument aus dem digitalen Archiv herunterladen und entschlüsseln
  export        Daten exportieren
  generate-keys Verschlüsselungsschlüssel & ein mögliches Passwort generieren
  health        Die Gesundheit der Magenta Security Sign-API zurückgeben
  help          Hilfe zu jedem Befehl
  info          Die Metadaten der bereitgestellten Datei zurückgeben
  ping          Die Magenta Security Sign-API anpingen
  prepare       Ein Dokument zum Signieren vorbereiten
  qes           QES (Qualifizierte E-Signatur)
  register      Ein Dokument registrieren
  request       Eine Dokumentsignatur anfordern
  retract       Ein Dokument zurückziehen
  revoke        Ein Dokument widerrufen
  server        Im Server-Modus starten
  sign          Ein Dokument signieren
  user          Die authentifizierten Benutzerinformationen zurückgeben
  verify        Ein Dokument verifizieren

Flags:
      --api string       Überschreibt die Standard-Magenta Security Sign-API-URL
      --api-key string   Der für die Authentifizierung verwendete API-Schlüssel
      --env string       Optionaler Umgebungsname. Standardmäßig prod. Richtet automatisch die API-URL und Ethereum-Vertragsadressen für eine gegebene Magenta Security Sign-Umgebung ein.
  -h, --help             Hilfe für mss
  -t, --token string     Das Authentifizierungstoken
  -v, --verbose count    Protokollverbosität erhöhen. Kann mehrmals wiederholt werden, um sie noch weiter zu erhöhen.
      --version          Version für mss
```

Verwenden Sie dann `mss help <command>`, um detailliertere Hilfe für einen bestimmten Befehl zu erhalten, wie zum Beispiel:

```shell
mss help help
Help bietet Hilfe für jeden Befehl in der Anwendung.
Geben Sie einfach mss help [Pfad zum Befehl] für vollständige Details ein.

Verwendung:
  mss help [command] [flags]

Flags:
  -h, --help   Hilfe für help

Globale Flags:
      --api string       Überschreibt die Standard-Magenta Security Sign-API-URL
      --api-key string   Der für die Authentifizierung verwendete API-Schlüssel
      --env string       Optionaler Umgebungsname. Standardmäßig prod. Richtet automatisch die API-URL und Ethereum-Vertragsadressen für eine gegebene Magenta Security Sign-Umgebung ein.
  -t, --token string     Das Authentifizierungstoken
  -v, --verbose count    Protokollverbosität erhöhen. Kann mehrmals wiederholt werden, um sie noch weiter zu erhöhen.
```