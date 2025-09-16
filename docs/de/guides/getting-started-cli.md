---
title: Erste Schritte mit der Certifaction CLI
description: Wie Sie die Certifaction-Kommandozeilenschnittstelle verwenden, um hochvertrauliche Dokumente digital zu signieren
---

# Erste Schritte mit der CLI

In diesem Abschnitt signieren Sie Ihr erstes Dokument in wenigen Schritten mit der Certifaction CLI:

[[toc]]

## Schritt 1: Einen persönlichen API-Schlüssel generieren

Falls Sie noch kein Certifaction-Konto erstellt haben, erstellen Sie bitte eines in der
[Certifaction-Webanwendung](https://app.certifaction.io).

Um einen persönlichen API-Schlüssel zu erstellen, navigieren Sie bitte
zur [API-Schlüssel-Einstellungsseite](https://app.certifaction.io/settings/api-keys)
und folgen Sie den Anweisungen.

Stellen Sie bitte sicher, dass Sie den Schlüssel kopieren und
sicher aufbewahren. Der Schlüssel gibt jedem Inhaber dieselben Kontoberechtigungen
wie Ihnen. Der Schlüssel wird nur einmal angezeigt.

## Schritt 2: Den Certifaction-Client herunterladen

Bitte laden Sie den neuesten Certifaction-Client von unserem [Github-Repository](https://github.com/certifaction/cli/releases/latest) herunter und installieren Sie ihn.

Zögern Sie nicht, ein [Issue](https://github.com/certifaction/cli/issues) zu erstellen, wenn Sie
keine ausführbare Datei für Ihre Plattform finden.

## Schritt 3: Ihr erstes Dokument signieren

Signieren Sie Ihr erstes PDF-Dokument mit dem folgenden Befehl:

::: code-group

```bash
certifaction --api-key PERSONAL_API_KEY sign -o signed-document.pdf document.pdf

```

:::

## Wie geht es weiter?

Für weitere Informationen über die CLI siehe die [CLI-Referenz](/de/references/cli).