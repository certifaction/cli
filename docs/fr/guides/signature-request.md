---
title: Demande de Signature
description: Utilisez Magenta Security Sign pour demander une signature numérique pour des documents hautement confidentiels
---

# Demande de Signature

Les utilisateurs peuvent inviter d'autres personnes à signer des documents en leur fournissant des URL de demande de signature sécurisées, qui contiennent une clé secrète. La clé secrète déchiffrera le document avant la signature, garantissant qu'aucune tierce partie (pas même <ProductName/>) n'a accès au document en texte clair.

Les demandes de signature de documents <ProductName/> s'appuient sur l'Archive Numérique <ProductName/> pour stocker les documents chiffrés de bout en bout.

Lors d'une demande de signature, le CLI va :

1.  Recevoir le document PDF à signer et les informations du signataire.
2.  Traiter le document, en ajoutant des fonctionnalités de sécurité incluant une URL sécurisée d'Archive Numérique.
3.  Chiffrer le document en utilisant soit la clé secrète contenue dans l'URL d'Archive Numérique, soit une clé fournie manuellement.
4.  Stocker le document dans l'Archive Numérique <ProductName/> pour récupération ultérieure.
5.  Retourner l'URL de demande de signature.

L'URL de demande de signature peut être partagée avec la personne invitée. Une nouvelle URL doit être créée pour chaque signataire.
Puisque l'URL de demande de signature contient un secret, l'accès à celle-ci doit être protégé de la même manière que le document original.

Pour augmenter davantage la sécurité, vous pouvez chiffrer le secret de l'URL avec un mot de passe cryptographiquement fort.