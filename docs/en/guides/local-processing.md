---
title: Magenta Security Sign Local Processing
description: Magenta Security Sign client local processing and E2E encryption protects your highly confidential documents
---

# Local Processing

Local document processing ensures document confidentiality.

The <ProductName/> Client can be used in two modes:

- Server mode that exposes a Local API.
- Interactive to execute commands on the shell, as part of a script or from a third-party application.

In both cases, the <ProductName/> Client serves as a proxy between the third-party application and the <ProductName/>
API. It handles document signing, certification, verification and revocation without
leaking the document content outside your controlled IT infrastructure.

## Running the Local API on a node

In this scenario, you will start the Local API, either
directly in a node or VM, or inside a Docker container. The Client will use
HTTP to sign documents with the guarantee that documents do not leave
the local environment. This is the best option for centralized document
signatures where documents are signed during an automated document workflow.

<ThemeImage src="http-server-mode-diagram.png" alt="HTTP server mode diagram" />

## Standalone application integration

In addition to being a useful command line utility, the CLI can be used by
standalone applications to sign and certify documents with <ProductName/> without having to
integrate and link to external libraries.

Standalone applications call the <ProductName/> CLI to sign documents on the
file system or using the standard input and output.

<ThemeImage src="standalone-application-diagram.png" alt="Standalone application diagram" />
