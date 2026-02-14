---
title: Erste Schritte mit der Magenta Security Sign CLI
description: Wie Sie die Magenta Security Sign-Kommandozeilenschnittstelle verwenden, um hochvertrauliche Dokumente digital zu signieren
---

# Erste Schritte mit der CLI

In diesem Abschnitt signieren Sie Ihr erstes Dokument in wenigen Schritten mit der <ProductName/> CLI:

[[toc]]

## Schritt 1: Einen persönlichen API-Schlüssel generieren

Falls Sie noch kein <ProductName/>-Konto erstellt haben, erstellen Sie bitte eines in der
[<ProductName/>-Webanwendung](https://app.magenta-security-sign.com).

Um einen persönlichen API-Schlüssel zu erstellen, navigieren Sie bitte
zur [API-Schlüssel-Einstellungsseite](https://app.magenta-security-sign.com/settings/api-keys)
und folgen Sie den Anweisungen.

Stellen Sie bitte sicher, dass Sie den Schlüssel kopieren und
sicher aufbewahren. Der Schlüssel gibt jedem Inhaber dieselben Kontoberechtigungen
wie Ihnen. Der Schlüssel wird nur einmal angezeigt.

## Schritt 2: Den <ProductName/>-Client herunterladen

Bitte laden Sie den neuesten <ProductName/>-Client von unserer [Downloads-Seite](/downloads/latest/) herunter und installieren Sie ihn.

## Schritt 3: Ihr erstes Dokument signieren

Signieren Sie Ihr erstes PDF-Dokument mit dem folgenden Befehl:

::: code-group

```bash
mss --api-key PERSONAL_API_KEY sign -o signed-document.pdf document.pdf

```

:::

## Wie geht es weiter?

Für weitere Informationen über die CLI siehe die [CLI-Referenz](/de/references/cli).