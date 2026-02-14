---
title: Référence CLI Magenta Security Sign
description: L'interface en ligne de commande du Client Magenta Security Sign utilise le traitement local et le chiffrement E2E pour signer numériquement des documents hautement confidentiels.
---

# Référence CLI

[[toc]]

L'interface en ligne de commande (CLI) Magenta Security Sign est un outil pratique pour signer des documents et
demander des signatures d'autres personnes.

## Utilisation générale

```shell
mss [drapeaux mss] <commande> [arguments]
```

## Obtenir de l'aide

Utilisez `mss --help` pour obtenir la liste des commandes disponibles :

```shell
mss --help
Le CLI Magenta Security Sign peut être utilisé dans deux modes :
 * Interactif pour exécuter des commandes sur le shell, dans le cadre d'un script ou depuis une application tierce.
 * Mode serveur qui expose des points de terminaison HTTP.

Dans les deux cas, le CLI se situe entre l'application tierce et l'API Magenta Security Sign et gérera la signature, la vérification et la révocation des documents sans divulguer le contenu du document en dehors de l'infrastructure informatique contrôlée du client.

Les deux fonctions principales du CLI sont la signature et la vérification de documents.

Utilisation :
  mss [commande]

Commandes Disponibles :
  certify       Certifier un document
  delete-access Supprimer l'accès Magenta Security Sign au fichier
  download      Télécharger et déchiffrer un document depuis l'archive numérique
  export        Exporter des données
  generate-keys Générer des clés de chiffrement et un mot de passe possible
  health        Retourner l'état de l'API Magenta Security Sign
  help          Aide sur n'importe quelle commande
  info          Retourner les métadonnées du fichier fourni
  ping          Ping l'API Magenta Security Sign
  prepare       Préparer un document pour la signature
  qes           QES (Signature Électronique Qualifiée)
  register      enregistrer un document
  request       Demander une signature de document
  retract       rétracter un document
  revoke        révoquer un document
  server        Démarrer en mode serveur
  sign          Signer un document
  user          Retourner les informations de l'utilisateur authentifié
  verify        Vérifier un document

Drapeaux :
      --api string       Remplace l'URL par défaut de l'API Magenta Security Sign
      --api-key string   La clé api utilisée pour l'authentification
      --env string       Nom d'environnement optionnel. Par défaut prod. Configurera automatiquement l'URL de l'API et les adresses de contrat Ethereum pour un environnement Magenta Security Sign donné.
  -h, --help             aide pour mss
  -t, --token string     Le jeton d'authentification
  -v, --verbose count    Augmenter la verbosité des logs. Peut être répété plusieurs fois pour l'augmenter encore plus.
      --version          version pour mss
```

Puis utilisez `mss help <commande>` pour obtenir une aide plus détaillée pour une commande donnée, comme par exemple :

```shell
mss help help
Help fournit de l'aide pour n'importe quelle commande dans l'application.
Tapez simplement mss help [chemin vers commande] pour les détails complets.

Utilisation :
  mss help [commande] [drapeaux]

Drapeaux :
  -h, --help   aide pour help

Drapeaux Globaux :
      --api string       Remplace l'URL par défaut de l'API Magenta Security Sign
      --api-key string   La clé api utilisée pour l'authentification
      --env string       Nom d'environnement optionnel. Par défaut prod. Configurera automatiquement l'URL de l'API et les adresses de contrat Ethereum pour un environnement Magenta Security Sign donné.
  -t, --token string     Le jeton d'authentification
  -v, --verbose count    Augmenter la verbosité des logs. Peut être répété plusieurs fois pour l'augmenter encore plus.
```