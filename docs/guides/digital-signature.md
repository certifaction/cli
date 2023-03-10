# Digital signature

Certifaction digital signature allows client to add one or more digital signatures to PDF documents.

Certifaction document signature is based on the [PAdES](https://en.wikipedia.org/wiki/PAdES) standard,
which uses cryptography and the public PKI infrastructure to provides the highest guarantee against forgery.

Certifaction uses three signature levels with increasing identity verification assurances:

- Standard Electronic Signature (SES): email verification
- Professional Electronic Signature (PES): identification using ID document scanning and verification
- Qualified Electronic Signature (QES): Swiss and EU qualified electronic signature requirements

Certifaction's unique privacy-first signature ensures that document content does not leave your
IT infrastructure in clear text without your consent.

## Simple document signature

Here are the steps during a simple document signature:

1.  The CLI Receives the PDF document to sign and process it (add security features including a unique secure URL and one or more signature
    pages).
2.  The hash of the file is sent to Certifaction API for signature
3.  Certifaction API uses one of its pluggable signature provider depending on the signature level and jurisdiction
4.  Certifaction API returns the PKCS #7 CMS signature to the CLI
5.  The CLI embeds the signature in the PDF document and returns to the Client

Additional signatures can be appended to an already signed document sequentially. Sending a signed document to an
other signer is a simple and valid option.

![Document signature diagram](../assets/document-signature-diagram.svg)
