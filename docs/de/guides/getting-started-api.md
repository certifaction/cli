---
title: Erste Schritte mit der Certifaction Lokalen API
description: Wie Sie den Certifaction-Client verwenden, um hochvertrauliche Dokumente digital zu signieren
---

# Erste Schritte mit der Lokalen API

In diesem Abschnitt signieren Sie Ihr erstes Dokument in wenigen Schritten
mit der Certifaction Lokalen API:

[[toc]]

## Schritt 1: Einen persönlichen API-Schlüssel generieren

Falls Sie noch kein Certifaction-Konto erstellt haben, erstellen Sie bitte eines in der
[Certifaction-Webanwendung](https://app.certifaction.io).

Um einen persönlichen API-Schlüssel zu erstellen, navigieren Sie bitte
zur [API-Schlüssel-Einstellungsseite](https://app.certifaction.io/settings/api-keys)
und folgen Sie den Anweisungen.

Stellen Sie bitte sicher, dass Sie den Schlüssel kopieren und
sicher aufbewahren. Der Schlüssel gibt jedem Inhaber dieselben Kontoberechtigung
wie Ihnen. Der Schlüssel wird nur einmal angezeigt.

## Schritt 2: Den Certifaction-Client herunterladen

Bitte laden Sie den neuesten Certifaction-Client von unserem [Github-Repository](https://github.com/certifaction/cli/releases/latest) herunter und installieren Sie ihn.

Zögern Sie nicht, ein [Issue](https://github.com/certifaction/cli/issues) zu erstellen, wenn Sie
keine ausführbare Datei für Ihre Plattform finden.

## Schritt 3: Die Lokale API starten

Starten Sie die Lokale API mit einer der folgenden Methoden.

::: code-group

```shell
certifaction server

```

```docker
docker run -p 8082:8082 certifaction/server:v.X.Y.Z

```

:::

Die Certifaction-API wird auf dem Standard-HTTP-Server `http://localhost:8082` bereitgestellt.

## Schritt 4: Ihr erstes Dokument signieren

Signieren Sie Ihr erstes PDF-Dokument durch Aufrufen der Lokalen API über HTTP:

::: code-group

```curl
curl -X POST -H 'authorization: PERSONAL_API_KEY' -F files=@INPUT_FILE.pdf 'http://localhost:8082/sign'

```

:::

## Wie geht es weiter?

Für weitere Informationen über die Lokale API siehe die [Lokale API-Referenz](/de/references/api) oder schauen Sie sich die [Anleitungen](/de/guides/howto-sign-documents) an.