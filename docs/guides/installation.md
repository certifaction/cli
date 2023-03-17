# Installation

Use the Certifaction client to integrate with Certifaction.
Using the client ensures that your documents are processed locally and are never sent
in clear text.

## Requirements

The Certifaction client is distributed as an executable file compatible with recent Linux,
Windows and macOS operating systems and can be run in a Docker container.

The client requires access to the Certifaction API and an authentication token for most
of its commands.

When running the client as a Local API, the executable will listen to HTTP ports
which must be accessible to client applications.

## How to install

Download Certifaction client from our [Public Repository](https://github.com/certifaction/cli/releases).

Please create an [Issue](https://github.com/certifaction/cli/issues) if you do
not find an executable for your platform.

## Usage

You can use the Certifaction client as a Local API or as a CLI.
In both cases, you will be able to sign one or more documents and invite external
signers.

### Using the client as a Local API

<div class="tip custom-block" style="padding-top: 8px">

Just want to try the Local API? Skip to the [Local API Quickstart](./getting-started-api).

</div>
In this scenario, you will start the Local API, either
directly in a node or VM, or inside a Docker container. The client will use
HTTP to sign documents with the guarantee that documents do not leave
the local environment. This is the best option for centralized document
signatures where documents are signed during an automated document workflow.

![HTTP server mode diagram](../assets/http-server-mode-diagram.png)

### Using the client as command line interface

<div class="tip custom-block" style="padding-top: 8px">

Just want to try the CLI? Skip to the [CLI Quickstart](./getting-started-cli).

</div>

Use the client as a command line interface (CLI) for desktop automation or to integrate Certifaction
in a standalone application.

Standalone applications can directly call the Certifaction executable to sign documents or request
signatures from other people.

Documents can either be saved and loaded on the file system, or they can be passed to the
command using the standard input and output.

![Standalone application diagram](../assets/standalone-application-diagram.png)
