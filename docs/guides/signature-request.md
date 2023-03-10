# Signature request

Client can invite other people to sign documents by providing them with secure document URLs
containing a secret key. The secret key will decrypt the document before signing, ensuring that
Certifaction never access the document in clear text.

Certifaction document signature request rely on the Certifaction Digital Archive to store end-to-end encrypted
document.

During a signature request, the CLI will:

1.  Receive the PDF document to sign and the signer information
2.  Process the document, adding security features including the secure Digital Twin URL
3.  Encrypt the document using either the secret key contained in the Digital Twin URL, or a manually provided key
4.  Store the document in Certifaction Digital Archive for later retrieval
5.  Return the secure URL.

The Digital Twin URL can be shared with the invited person. A new URL must be created for each signer.
Since the URL contains a secret, access to its content must be protected as well as would be the original document.

To facilitate Digital Twin URL exchange, you can protect the URL secret with a cryptographically strong password.
