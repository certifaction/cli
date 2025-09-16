---
title: Sécurité et Confidentialité Certifaction
description: Les fonctionnalités de sécurité et de confidentialité de la signature numérique Certifaction protègent les documents hautement confidentiels
---

# Sécurité et Confidentialité

L'un de nos piliers principaux est la Sécurité et la Confidentialité des informations de nos clients. Cette section met en évidence certaines des mesures de sécurité spécifiques que nous avons prises pour atteindre cet objectif.

## Chiffrement et stockage des documents

Protéger la confidentialité, l'intégrité et la disponibilité des données de nos clients est une priorité importante pour nous. À cette fin, nous employons le chiffrement côté client comme mesure critique pour protéger les données sensibles contre l'accès non autorisé et les violations.

Le chiffrement côté client est une méthode de chiffrement des données avant qu'elles ne soient transmises sur un réseau ou stockées dans le cloud. Dans cette approche, le chiffrement et le déchiffrement des données sont effectués côté client, plutôt que côté serveur, garantissant que seuls les utilisateurs autorisés possédant la clé de déchiffrement peuvent accéder aux données.

En utilisant le chiffrement côté client, nous nous assurons que tous les documents téléchargés par nos clients sont chiffrés avant de quitter leur appareil. Cela réduit le risque de violations de données et d'accès non autorisé aux informations sensibles. De plus, puisque les clés de chiffrement sont générées et stockées côté client, l'organisation n'a aucun accès au contenu des documents chiffrés, fournissant une couche supplémentaire de confidentialité et de sécurité des données.

En plus du chiffrement, nous avons également choisi de stocker nos documents sur des serveurs suisses certifiés ISO 27001. Cette certification est une norme largement reconnue pour la gestion de la sécurité de l'information, et elle nous fournit une vérification indépendante que nos serveurs répondent à des exigences de sécurité strictes. Ces exigences incluent des mesures de sécurité physique, des contrôles d'accès, la sécurité réseau, et d'autres mesures qui aident à protéger nos données contre les menaces.

> Bien qu'Azure soit notre fournisseur de cloud, les clients sont libres de déployer leur propre instance de stockage de documents.

## Résidence des données suisses

Nous nous engageons à protéger la confidentialité et la vie privée des données de nos clients. Dans le cadre de cet engagement, nous avons mis en place une politique stricte pour le stockage des documents qui exige que tous les documents soient stockés exclusivement sur des serveurs basés en Suisse. La résidence des données suisses est critique pour notre politique, car elle offre des mesures robustes de protection et de confidentialité des données.

Stocker nos documents sur des serveurs basés en Suisse offre plusieurs avantages clés. Premièrement, la Suisse est connue pour ses lois et réglementations strictes de protection des données, qui fournissent des protections rigoureuses de confidentialité et de sécurité pour les données de nos clients. Deuxièmement, en stockant nos données dans la résidence de données suisse, nous pouvons nous assurer qu'elles sont soumises aux contrôles stricts et à la supervision des autorités suisses, renforçant davantage la sécurité et la confidentialité des données de nos clients.

Notre politique de stocker les documents uniquement sur des serveurs basés en Suisse garantit que les données de nos clients restent dans un lieu qui offre le plus haut niveau de protection. Nous prenons au sérieux notre responsabilité de protéger les données de nos clients et nous nous engageons à respecter toutes les lois et réglementations applicables régissant la protection et la confidentialité des données.

## Serveurs haute disponibilité

Nous employons des serveurs haute disponibilité au sein de notre plateforme de cloud computing et maintenons un plan complet de reprise après sinistre. Notre utilisation de serveurs haute disponibilité garantit que nos systèmes restent opérationnels et accessibles aux utilisateurs, même en cas de défaillances matérielles ou logicielles, tandis que notre plan de reprise après sinistre décrit les mesures que nous prendrons en cas de perturbation ou de panne majeure.

> Bien qu'Azure soit notre fournisseur de cloud, les clients sont libres de déployer leur propre instance de stockage de documents.

## Authentification à deux facteurs

Nous prenons très au sérieux la sécurité des comptes de nos utilisateurs. Pour aider à protéger les comptes de nos utilisateurs contre l'accès non autorisé, nous offrons l'authentification à deux facteurs (2FA) comme couche de sécurité supplémentaire. Notre système 2FA est compatible avec toutes les applications communes de mots de passe à usage unique basés sur le temps (TOTP), y compris Microsoft Authenticator, Google Authenticator, et Duo.

Quand un utilisateur active la 2FA sur son compte, il est requis d'entrer un code unique en plus de son nom d'utilisateur et de son mot de passe lors de la connexion. Ce code est généré par une application TOTP, comme Microsoft Authenticator ou Google Authenticator, et est valide pour un temps limité. En exigeant un code unique en plus du mot de passe de l'utilisateur, nous pouvons nous assurer que seuls les utilisateurs autorisés peuvent accéder à leurs comptes.

## Évaluations de sécurité

Nous accordons une haute priorité à la sécurité de notre application et infrastructure. Pour nous assurer que nos mesures de sécurité sont efficaces, nous effectuons régulièrement des audits de sécurité internes et externes et des tests de pénétration. Ces audits et tests de pénétration sont effectués au moins une fois par an et sont conçus pour identifier toute vulnérabilité ou faiblesse dans notre système qui pourrait être exploitée par des acteurs malveillants.

Les audits de sécurité internes sont effectués par notre propre équipe de sécurité, qui utilise divers outils et techniques pour identifier les problèmes de sécurité potentiels. Ces audits sont conçus pour tester nos mesures de sécurité du point de vue d'un initié, simulant les actions qu'un acteur malveillant pourrait prendre s'il obtenait l'accès à notre système.

Les audits de sécurité externes et les tests de pénétration sont effectués par des experts en sécurité indépendants qui ne sont pas affiliés à notre organisation. Ces experts utilisent divers outils et techniques pour simuler des attaques du monde réel et identifier les vulnérabilités potentielles dans notre système. En effectuant des audits externes et des tests de pénétration, nous pouvons nous assurer que nos mesures de sécurité sont efficaces contre une gamme de menaces et pas seulement celles que nous avons anticipées.

## Non-répudiation et audit

Nous reconnaissons l'importance de suivre les changements apportés aux documents tout au long de leur cycle de vie. Pour y parvenir, nous avons implémenté une piste d'audit entièrement immuable qui enregistre tous les changements apportés à chaque document de la création à la suppression.

La piste d'audit capture un ensemble complet de métadonnées pour chaque document, incluant la date et l'heure de chaque changement, l'identité de l'utilisateur qui a fait le changement, et la nature du changement. Ces métadonnées sont stockées dans un journal sécurisé et inviolable qui ne peut pas être modifié ou supprimé.

En maintenant une piste d'audit entièrement immuable, nous pouvons nous assurer que l'historique entier de chaque document est préservé et peut être accédé si nécessaire. Cela aide à maintenir l'intégrité de nos documents, fournissant l'assurance qu'ils n'ont pas été altérés ou modifiés de manière non autorisée.

Notre piste d'audit immuable est un composant essentiel de notre système de gestion de documents, fournissant transparence et responsabilité tout au long du cycle de vie du document. Elle nous aide également à nous conformer aux exigences réglementaires et aux meilleures pratiques de l'industrie, qui exigent souvent des organisations qu'elles maintiennent des pistes d'audit complètes de toutes les activités liées aux documents.