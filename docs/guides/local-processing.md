# Local Processing

Local document processing ensures document confidentiality.

The Certifaction client can be used in two modes:

- Server mode that exposes a Local API.
- Interactive to execute commands on the shell, as part of a script or from a third-party application.

In both cases, the Certifaction client serves as a proxy between the third-party application and the Certifaction
API. It handles document signing, certification, verification and revocation without
leaking the document content outside your controlled IT infrastructure.

![Principles diagram](../assets/principles-diagram.png)

## Running the Local API on a node

In this scenario, you will start the Local API, either
directly in a node or VM, or inside a Docker container. The client will use
HTTP to sign documents with the guarantee that documents do not leave
the local environment. This is the best option for centralized document
signatures where documents are signed during an automated document workflow.

![HTTP server mode diagram](../assets/http-server-mode-diagram.png)

## Standalone application integration

In addition to being a useful command line utility, the CLI can be used by
standalone applications to sign and certify documents with Certifaction without having to
integrate and link to external libraries.

Standalone applications call the Certifaction CLI to sign documents on the
file system or using the standard input and output.

![Standalone application diagram](../assets/standalone-application-diagram.png)
