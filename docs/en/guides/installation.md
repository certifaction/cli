---
title: How to install Magenta Security Sign Client
description: How to install the Magenta Security Sign Client to digitally sign highly confidential documents
---

# Installation

Use the <ProductName/> Client to integrate with <ProductName/>.
Using the Client ensures that your documents are processed locally and are never sent
in clear text.

## Requirements

The <ProductName/> Client is distributed as an executable file compatible with recent Linux,
Windows and macOS operating systems and can be run in a Docker container.

The Client requires access to the <ProductName/> API and an authentication token for most
of its commands.

When running the Client as a Local API, the executable will listen to HTTP ports
which must be accessible to client applications.

## How to install

Download <ProductName/> Client from our [Downloads](/downloads/) page.

## Usage

You can use the <ProductName/> Client as a Local API or as a CLI.
In both cases, you will be able to sign one or more documents and invite external
signers.

### Using the Client as a Local API

<div class="tip custom-block" style="padding-top: 8px">

Just want to try the Local API? Skip to the [Local API Quickstart](./getting-started-api).

</div>
In this scenario, you will start the Local API, either
directly in a node or VM, or inside a Docker container. The Client will use
HTTP to sign documents with the guarantee that documents do not leave
the local environment. This is the best option for centralized document
signatures where documents are signed during an automated document workflow.

<ThemeImage src="http-server-mode-diagram.png" alt="HTTP server mode diagram" />

### Using the client as command line interface

<div class="tip custom-block" style="padding-top: 8px">

Just want to try the CLI? Skip to the [CLI Quickstart](./getting-started-cli).

</div>

Use the Client as a command line interface (CLI) for desktop automation or to integrate <ProductName/>
in a standalone application.

Standalone applications can directly call the <ProductName/> executable to sign documents or request
signatures from other people.

Documents can either be saved and loaded on the file system, or they can be passed to the
command using the standard input and output.

<ThemeImage src="standalone-application-diagram.png" alt="Standalone application diagram" />
