# Signature request

Users can invite other people to sign documents by providing them with secure signature request URLs, which contain a secret key. The secret key will decrypt the document before signing, ensuring that no third-party (not even Certifaction) has access to the document in clear text.

Certifaction document signature requests rely on the Certifaction Digital Archive to store end-to-end encrypted
documents.

During a signature request, the CLI will:

1.  Receive the PDF document to sign and the signer information.
2.  Process the document, adding security features including a secure Digital Archive URL.
3.  Encrypt the document using either the secret key contained in the Digital Archive URL, or a manually provided key.
4.  Store the document in the Certifaction Digital Archive for later retrieval.
5.  Return the signature request URL.

The signature request URL can be shared with the invited person. A new URL must be created for each signer.
Since the signature request URL contains a secret, access to it must be protected in the same way as the original document.

To furhter increase the security, you can encrypt the URL secret with a cryptographically strong password.
