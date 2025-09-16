---
title: Certifaction Lokale Verarbeitung
description: Die lokale Verarbeitung und E2E-Verschlüsselung des Certifaction-Clients schützt Ihre hochvertraulichen Dokumente
---

# Lokale Verarbeitung

Die lokale Dokumentverarbeitung gewährleistet die Vertraulichkeit von Dokumenten.

Der Certifaction-Client kann in zwei Modi verwendet werden:

- Server-Modus, der eine Lokale API bereitstellt.
- Interaktiv zur Ausführung von Befehlen in der Shell, als Teil eines Skripts oder von einer Drittanbieteranwendung aus.

In beiden Fällen dient der Certifaction-Client als Proxy zwischen der Drittanbieteranwendung und der Certifaction-API. Er übernimmt die Dokumentsignierung, Zertifizierung, Verifizierung und Widerrufung, ohne
dass der Dokumentinhalt außerhalb Ihrer kontrollierten IT-Infrastruktur preisgegeben wird.

![Prinzipiendiagramm](../../assets/principles-diagram.png)

## Ausführung der Lokalen API auf einem Knoten

In diesem Szenario starten Sie die Lokale API, entweder
direkt auf einem Knoten oder einer VM, oder in einem Docker-Container. Der Client verwendet
HTTP, um Dokumente zu signieren, mit der Garantie, dass Dokumente die
lokale Umgebung nicht verlassen. Dies ist die beste Option für zentralisierte Dokumentsignaturen, bei denen Dokumente während eines automatisierten Dokumentenworkflows signiert werden.

![HTTP-Server-Modus-Diagramm](../../assets/http-server-mode-diagram.png)

## Integration von Standalone-Anwendungen

Zusätzlich dazu, ein nützliches Kommandozeilen-Tool zu sein, kann die CLI von
Standalone-Anwendungen verwendet werden, um Dokumente mit Certifaction zu signieren und zu zertifizieren, ohne externe Bibliotheken integrieren und verlinken zu müssen.

Standalone-Anwendungen rufen die Certifaction-CLI auf, um Dokumente im
Dateisystem oder über die Standardeingabe und -ausgabe zu signieren.

![Standalone-Anwendungsdiagramm](../../assets/standalone-application-diagram.png)