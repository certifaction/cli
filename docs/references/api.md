# Local API

[[toc]]

## General usage

Certifaction Local API is started using the `certifaction server` command
as following:

```shell
    certifaction server [server flags]
```

The Local API is an HTTP server listening to the configured port and serving following endpoints:

    GET  /health          Returns the health of the Certifaction API
    GET  /ping            Pings the Certifaction API
    POST /prepare         Prepares a document for signing
    POST /sign            Signs a document
    POST /retract         Retracts a document
    POST /download        Downloads and decrypts a document
    POST /delete-access   Removes Certifaction access to the file
    POST /request/create  Requests a document signature
    POST /request/edit    Edits a signature request
    POST /request/cancel  Cancels a signature request
    POST /request/cancel/all  Cancels signing of the document
    POST /request/list        Lists signature requests for a document
    GET  /user            Returns the authenticated user information
    POST /qes/check       Checks whether the current user is QES enabled
    GET  /docs            Returns the API documentation [Upcoming feature]

## Authentication

When indicated, the requests must be authenticated using the Authorization header as following:

```
Authorization: <API key>
```

or

```
Authorization: Bearer <3rd party Oauth token>
```

API keys can be created in the setting section of the Certifaction web application.

If the request is not authenticated a HTTP 401 Unauthorized response is returned.

## TLS connection

The server does not terminate TLS connections. If TLS is required, a proxy must be placed before the server.

## Common response code

    400 Bad Request             Client error
    401 Unauthorized            The request is not authenticated
    403 Forbidden               The request is authenticated but the
                                client is not authorized
    500 Internal Server Error   An unexpected server error occurred
    503 Service Unavailable     Temporary service unavailability

## Checking the health of the API and its dependencies

> #### Usage
>
>     GET /health
>
> #### Description
>
> Returns the health of Certifaction services dependency.
>
> #### Authenticated
>
> No
>
> #### Query parameters
>
> None
>
> ### Response
>
>     200 OK    an application/json array containing service status objects

## Checking the API liveliness

> #### Usage
>
>     GET /ping
>
> #### Description
>
> Returns success if the API is running.
>
> #### Authenticated
>
> No
>
> #### Query parameters
>
> None
>
> #### Response
>
>     200 OK    No content

## Prepare a document for signing

> #### Usage
>
>     POST /prepare
>
> #### Description
>
> Takes the input file and prepares it for signing. A salt and a document claim
> encryption key pair is added to the document, and optionally a branded footer.
> If enabled, a Digital Twin QR code with a document encryption key will be added
> to the document. The resulting document is called a digital original. If the
> input file is already a digital original then the command will return the input
> file unchanged. Currently only processes PDF files. An error is returned if
> the input is not a PDF file.
>
> #### Authenticated
>
> Yes
>
> #### Header
>
>     Accept-Language: used to select the right footer language
>
> #### Query parameters
>
>     digital-twin=true: activates the Digital Twin feature
>     scope=[string]: overrides the default user signing scope.
>                     The possible values are register, sign and certify
>
> #### Response
>
>     200 OK    the prepared application/pdf file
>
> #### Body
>
> An application/pdf body containing the document to prepare

## Sign a document

> #### Usage
>
>     POST /sign
>
> #### Description
>
> Digitally sign the document given as input. The document must be a digital
> original, i.e. it must have been prepared with the prepare command. If the
> document is not a digital original, then it will be prepared first before
> signing unless the no-prepare flag is used. If the no-prepare flag is used and the
> document was not prepared, then an error is returned. If the document is
> prepared during signing, then the command will honor the prepare query
> parameters.
>
> #### Authenticated
>
> Yes
>
> #### Header
>
>     Accept-Language: used to select the right footer language
>
> #### Query parameters
>
>     no-prepare=true: do not prepare the document if it is not prepared and
>                      return an error instead.
>     hash=[string]: the hash of the document to sign
>     filename=[string]: the name of the file
>     legal-weight=[string]: allows to select type of the signature.
>                            Possible values are "standard" and "QES".
>                            Defaults to "standard".
>     jurisdiction=[string]: only valid with "QES" signature, supported values
>                            are "zertes" and "eidas"
>
>     In addition, the query will accept the prepare query parameters.
>
> #### Response
>
>     200 OK    the signed application/pdf file
>
> #### Body
>
> An application/pdf body containing the document to sign

## Retract a document

> #### Usage
>
>     POST /retract
>
> #### Description
>
> Retracts the document given as input. The document must be
> a digital original document. After retraction, all signature
> requests are cancelled. Returns an error if the document cannot
> be retracted.
>
> #### Authenticated
>
> Yes
>
> #### Header
>
> None
>
> #### Query parameters
>
> ```
> hash=[string]: the hash of the document to sign
> filename=[string]: the name of the file
> note=[string]: additional note to be stored in claim
>
> ```
>
> #### Response
>
>     200 OK    the signed application/pdf file
>
> #### Body
>
> An application/pdf body containing the document to retract

## Download file from digital archive

> #### Usage
>
>     GET /download
>
> #### Description
>
> Downloads document from the digital archive and then decrypts it.
>
> #### Authenticated
>
> No
>
> #### Query parameters
>
> file=[string]: digital archive URL
>
> ### Response
>
>     200 OK    An application/pdf body containing the document

## Delete Certifaction access to the file

> #### Usage
>
>     GET /delete-access
>
> #### Description
>
> This makes files inaccessible for the Certifaction system for further processing.
> Because of that it will no longer be possible to download files from the collection page
> or request new signatures, although it will still be possible to access them
> through the original signature request emails.
>
> #### Authenticated
>
> Yes
>
> #### Body
>
> An application/pdf body containing the document for which a signature is requested
>
> ### Response
>
>     200 OK    An application/pdf body containing the document

## Request a document signature

> #### Usage
>
>     POST /request/create
>
> #### Description
>
> Create a document signature URL for the person with the given email address and name.
> The signature request URL can either be sent to the user mailbox or returned by this
> command. If the request URL is sent by email, then it is not returned by the command.
> If the input parameter is omitted, then the command will take its input from stdin.
> Returns to stdout the URL to be handed to the signer if the URL is not sent by email
> otherwise return nothing. Document have to be already registered otherwise it will
> return an error.
>
> #### Authenticated
>
> Yes
>
> #### Header
>
> None
>
> #### Query parameters
>
>     name=[string]:    Full name of the signer
>     email=[string]:   Email address of the signer
>     send-email=true:  When this flag is enabled the API will send a signing
>                       request to the user
>
> #### Response
>
>     200 OK    an application/json containing the resulting request URL
>
> #### Body
>
> Either:
>
> - An application/pdf body containing the document for which a signature is requested;
> - or a multipart/form-data body containing the documents for which signatures are
>   requested under the field name `files`.
>
> ##### Example
>
> ```sh
> # Request signature for a single document.
> curl -X POST \
>     -H "Content-Type: application/pdf" \
>     --data-binary @file.pdf \
>     -H 'authorization:<API_KEY>' \
>     "http://localhost:8082/request/create?send-email=false&email=<signer-email>"
>
> # Request signatures for multiple documents.
> curl -X POST \
>     -F files=@file1.pdf \
>     -F files=@file2.pdf \
>     'http://localhost:8082/request/create?send-email=true&encryption-key=<generated-encryption-key>&email=<signer-email>'
> ```
>
> ```json
> {
>   "request_url": "<the URL to be handed to the signer>"
> }
> ```

## Edit a document signature request

> #### Usage
>
>     POST /request/edit
>
> #### Description
>
> Allows changing the email address and/or name for a given signature request for a given
> document. If the input parameter is omitted, then the command will take its
> input from stdin.
>
> #### Authenticated
>
> Yes
>
> #### Header
>
> None
>
> #### Query parameters
>
>     email=[string]:      Current email address of signer.
>     new-name=[string]:   New name of the signer.
>     new-email=[string]:  New email address of the signer.
>
> #### Response
>
>     200 OK
>
> #### Body
>
> An application/pdf body containing the document for which a signature is requested

## List document signature requests

> #### Usage
>
>     POST /request/list
>
> #### Description
>
> Lists all sent signature requests and their status for a given document.
>
> #### Authenticated
>
> Yes
>
> #### Header
>
> None
>
> #### Response
>
>     200 OK  A JSON object representing all signature requests for the file.
>
> #### Body
>
> An application/pdf body containing the document for which a signature is requested

## Cancel a document signature request

> #### Usage
>
>     POST /request/cancel
>
> #### Description
>
> Cancels a signature request for a given document for the person with the given email address.
>
> #### Authenticated
>
> Yes
>
> #### Header
>
> None
>
> #### Query parameters
>
>     email=[string]:   email address of signer
>     note=[string]:   Note to be sent to the invitee explaining why the
>                      request was cancelled.
>
> #### Response
>
>     204 No Content
>
> #### Body
>
> An application/pdf body containing the document for which a signature request should be cancelled

## Cancel a document signing process

> #### Usage
>
>     POST /request/cancel/all
>
> #### Description
>
> Cancels all signature request for a given document. If the input parameter is omitted, then the command will take its input from stdin.
>
> #### Authenticated
>
> Yes
>
> #### Header
>
> None
>
> #### Query parameters
>
>     note=[string]:   Note to be sent to the invitee explaining why the
>                      request was cancelled.
>
> #### Response
>
>     204 No Content
>
> #### Body
>
> An application/pdf body containing the document for which a signature is requested

## Get the authenticated user information

> #### Usage
>
>     GET /user
>
> #### Description
>
> Returns the user information as a JSON.
>
> #### Authenticated
>
> Yes
>
> #### Header
>
> None
>
> #### Query parameters
>
> None
>
> #### Response
>
>     200 OK    an application/json user object
>
> #### Body
>
> An application/pdf body containing the document for which a signature is requested
>
> ##### Example
>
> ```json
> {
>   "id": 506,
>   "uuid": "GzOysSHa8EB",
>   "external_id": "5fe0a47220148a00686f055a",
>   "email": "hans.muster@certifaction.com",
>   "name": "Hans Muster",
>   "eth_address": "0x124bf6e60b4ec8dc7bc314aaca4ab09dc4da1ecd",
>   "quota": 2,
>   "subscription_type": "credits"
> }
> ```
>
> ##### Explanation of essential fields:
>
> Field | Description
> \----- | -----------
> email| Email address of the user
> quota| The amount of credits the user has left to register or revoke files if the subscription type is credits.
> subscription_type| The subscription type of the user. Can be credits or flat_rate

## Get the API documentation \[Upcoming feature]

> #### Usage
>
>     GET /docs
>
> #### Description
>
> Returns the API documentation that was generated from a swagger file. The source swagger file URL can be found in the page.
>
> #### Authenticated
>
> No
>
> #### Query parameters
>
> None
>
> #### Response
>
>     200 OK    Returns the text/html documentation file
