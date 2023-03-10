# Authentication

Document signature, revocation and getting user information require authentication.
The authentication is done by passing an authentication token or an API key:

- Access tokens can be issued by you or by an external OIDC provider. Either case, Certifaction will have to register the identity provider.
- API keys are managed from the Certifaction web application. They can only be used for server side API integration.
- For HIN Sign authentication, please follow the instructions:
  - [German](https://download.hin.ch/documentation/oAuth2_Dokumentation_de.pdf)
  - [French](https://download.hin.ch/documentation/oAuth2_Dokumentation_fr.pdf)
