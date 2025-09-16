---
title: Paramètres de Proxy HTTP
description: Comment configurer vos paramètres de proxy HTTP pour l'intégration API Certifaction
---

# Paramètres de Proxy HTTP

Le client Certifaction s'intègre avec l'API Certifaction en utilisant HTTPS.
Si le déploiement est derrière un proxy, vous devez configurer le
proxy en utilisant des variables d'environnement.

Le proxy peut être configuré en définissant les variables `HTTP_PROXY`,
`HTTPS_PROXY` et `NO_PROXY` (ou leurs versions en minuscules).
HTTPS_PROXY prend la précédence sur HTTP_PROXY pour les requêtes https.

Les valeurs d'environnement peuvent être soit une URL complète soit un "host[:port]", dans ce cas le schéma "http" est assumé.
Les schémas "http", "https", et "socks5" sont supportés. Une erreur est retournée si la valeur est sous une forme différente.