---
title: HTTP-Proxy-Einstellungen
description: So konfigurieren Sie Ihre HTTP-Proxy-Einstellungen für die Certifaction-API-Integration
---

# HTTP-Proxy-Einstellungen

Der Certifaction-Client integriert sich mit der Certifaction-API über HTTPS.
Wenn die Bereitstellung hinter einem Proxy erfolgt, müssen Sie den
Proxy mit Umgebungsvariablen konfigurieren.

Der Proxy kann durch Setzen der `HTTP_PROXY`,
`HTTPS_PROXY` und `NO_PROXY` (oder deren Kleinschreibungsversionen) konfiguriert werden.
HTTPS_PROXY hat Vorrang vor HTTP_PROXY für HTTPS-Anfragen.

Die Umgebungswerte können entweder eine vollständige URL oder ein "host[:port]" sein, wobei das "http"-Schema angenommen wird.
Die Schemas "http", "https" und "socks5" werden unterstützt. Ein Fehler wird zurückgegeben, wenn der Wert eine andere Form hat.