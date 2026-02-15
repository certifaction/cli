---
title: Magenta Security Sign CLI Reference
description: Magenta Security Sign Client command line interface uses local processing and E2E encryption to digitally sign highly confidential documents.
---

<script setup>
import { useTheme } from '../../.vitepress/theme/useTheme.js'
const { commandName } = useTheme()
</script>

# CLI Reference

[[toc]]

<ProductName/> command line interface (CLI) is a convenient tool to sign documents and
request signatures from others.

## General usage

<div class="language-shell"><pre><code>{{ commandName }} [{{ commandName }} flags] &lt;command&gt; [arguments]</code></pre></div>

## Getting help

Use <code>{{ commandName }} --help</code> to get the list of available commands:

<pre class="code-block"><code>{{ commandName }} --help
The Magenta Security Sign CLI can be used in two modes:
 * Interactive to execute commands on the shell, as part of a script or from a third party application.
 * Server mode that exposes HTTP endpoints.

In both cases, the CLI sits between the third party application and Magenta Security Sign API and will handle document signing, verification and revocation without leaking the document content outside the controlled IT infrastructure of the client.

The two main functions of the CLI are document signature and verification.

Usage:
  {{ commandName }} [command]

Available Commands:
  delete-access Remove Magenta Security Sign access to the file
  download      Download and decrypt document from digital archive
  export        Export data
  generate-keys Generate encryption keys &amp; a possible password
  health        Return the health of the Magenta Security Sign API
  help          Help about any command
  info          Return the metadata of provided file
  ping          Ping the Magenta Security Sign API
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
      --api string       Overrides the default Magenta Security Sign API URL
      --api-key string   The api key used for authentication
      --env string       Optional environment name. Defaults to prod. Will automatically setup the API URL for a Given Magenta Security Sign environment.
  -h, --help             help for {{ commandName }}
  -t, --token string     The authentication token
  -v, --verbose count    Increase logs verbosity. Can be repeated multiple times to increase it even more.
      --version          version for {{ commandName }}
</code></pre>

Then use <code>{{ commandName }} help &lt;command&gt;</code> to get more detailed help for a given command, like for example:

<pre class="code-block"><code>{{ commandName }} help help
Help provides help for any command in the application.
Simply type {{ commandName }} help [path to command] for full details.

Usage:
  {{ commandName }} help [command] [flags]

Flags:
  -h, --help   help for help

Global Flags:
      --api string       Overrides the default Magenta Security Sign API URL
      --api-key string   The api key used for authentication
      --env string       Optional environment name. Defaults to prod. Will automatically setup the API URL for a Given Magenta Security Sign environment.
  -t, --token string     The authentication token
  -v, --verbose count    Increase logs verbosity. Can be repeated multiple times to increase it even more.
</code></pre>
