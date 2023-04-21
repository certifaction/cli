---
title: Certifaction CLI Reference
description: Certifaction Client command line interface uses local processing and E2E encryption to digitally sign highly confidential documents.
---

# CLI Reference

[[toc]]

Certifaction command line interface (CLI) is a convenient tool to sign documents and
request signatures from others.

## General usage

```shell
certifaction [certifaction flags] <command> [arguments]
```

## Getting help

Use `certifaction --help` to get the list of available commands:

```shell
certifaction --help
The Certifaction CLI can be used in two modes:
 * Interactive to execute commands on the shell, as part of a script or from a third party application.
 * Server mode that exposes HTTP endpoints.

In both cases, the CLI sits between the third party application and Certifaction API and will handle document signing, verification and revocation without leaking the document content outside the controlled IT infrastructure of the client.

The two main functions of the CLI are document signature and verification.

Usage:
  certifaction [command]

Available Commands:
  certify       Certify a document
  delete-access Remove Certifaction access to the file
  download      Download and decrypt document from digital archive
  export        Export data
  generate-keys Generate encryption keys & a possible password
  health        Return the health of the Certifaction API
  help          Help about any command
  info          Return the metadata of provided file
  ping          Ping the Certifaction API
  prepare       Prepare a document for signing
  qes           QES (Qualified E-Signature)
  register      registers a document
  request       Request a document signature
  retract       retract a document
  revoke        revoke a document
  server        Start in server mode
  sign          Sign a document
  user          Return the authenticated user information
  verify        Verify a document

Flags:
      --api string       Overrides the default Certifaction API URL
      --api-key string   The api key used for authentication
      --env string       Optional environment name. Defaults to prod. Will automatically setup the API URL and Ethereum contract addresses for a Given Certifaction environment.
  -h, --help             help for certifaction
  -t, --token string     The authentication token
  -v, --verbose count    Increase logs verbosity. Can be repeated multiple times to increase it even more.
      --version          version for certifaction
```

Then use `certifaction help <command>` to get more detailed help for a given command, like for example:

```shell
certifaction help help
Help provides help for any command in the application.
Simply type certifaction help [path to command] for full details.

Usage:
  certifaction help [command] [flags]

Flags:
  -h, --help   help for help

Global Flags:
      --api string       Overrides the default Certifaction API URL
      --api-key string   The api key used for authentication
      --env string       Optional environment name. Defaults to prod. Will automatically setup the API URL and Ethereum contract addresses for a Given Certifaction environment.
  -t, --token string     The authentication token
  -v, --verbose count    Increase logs verbosity. Can be repeated multiple times to increase it even more.
```
