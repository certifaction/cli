---
title: Erste Schritte mit der Magenta Security Sign Lokalen API
description: Wie Sie den Magenta Security Sign-Client verwenden, um hochvertrauliche Dokumente digital zu signieren
---

<script setup>
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# Erste Schritte mit der Lokalen API

In diesem Abschnitt signieren Sie Ihr erstes Dokument in wenigen Schritten
mit der <ProductName/> Lokalen API:

[[toc]]

## Schritt 1: Einen persönlichen API-Schlüssel generieren

Falls Sie noch kein <ProductName/>-Konto erstellt haben, erstellen Sie bitte eines in der
[<ProductName/>-Webanwendung](https://app.magenta-security-sign.com).

Um einen persönlichen API-Schlüssel zu erstellen, navigieren Sie bitte
zur [API-Schlüssel-Einstellungsseite](https://app.magenta-security-sign.com/settings/api-keys)
und folgen Sie den Anweisungen.

Stellen Sie bitte sicher, dass Sie den Schlüssel kopieren und
sicher aufbewahren. Der Schlüssel gibt jedem Inhaber dieselben Kontoberechtigung
wie Ihnen. Der Schlüssel wird nur einmal angezeigt.

## Schritt 2: Den <ProductName/>-Client herunterladen

Bitte laden Sie den neuesten <ProductName/>-Client von unserer [Downloads-Seite](/downloads/latest/) herunter und installieren Sie ihn.

## Schritt 3: Die Lokale API starten

Starten Sie die Lokale API mit einer der folgenden Methoden.

<div class="language-shell"><pre><code>{{ commandName }} server</code></pre></div>

<div class="language-docker"><pre><code>docker run -p 8082:8082 {{ commandName }}/server:v.X.Y.Z</code></pre></div>

Die <ProductName/>-API wird auf dem Standard-HTTP-Server `http://localhost:8082` bereitgestellt.

## Schritt 4: Ihr erstes Dokument signieren

Signieren Sie Ihr erstes PDF-Dokument durch Aufrufen der Lokalen API über HTTP:

::: code-group

```curl
curl -X POST -H 'authorization: PERSONAL_API_KEY' -F files=@INPUT_FILE.pdf 'http://localhost:8082/sign'

```

:::

## Wie geht es weiter?

Für weitere Informationen über die Lokale API siehe die [Lokale API-Referenz](/de/references/api) oder schauen Sie sich die [Anleitungen](/de/guides/howto-sign-documents) an.
