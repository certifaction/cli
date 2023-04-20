---
title: HTTP Proxy Settings
description: Certifaction Client API uses local processing and E2E encryption to digitally sign highly confidential documents.
---

# HTTP Proxy Settings

Certifaction client integrates with Certifaction API using HTTPS.
If the deployment is behind a proxy you must configure the
proxy using environment variables.

The proxy can be configured by setting the `HTTP_PROXY`,
`HTTPS_PROXY` and `NO_PROXY` (or the lowercase versions thereof).
HTTPS_PROXY takes precedence over HTTP_PROXY for https requests.

The environment values may be either a complete URL or a "host[:port]", in which case the "http" scheme is assumed.
The schemes "http", "https", and "socks5" are supported. An error is returned if the value is a different form.
