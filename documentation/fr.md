<!-- ELUCENIA technical documentation · escala-clinica-de-fragilidade · fr · no clinical/professional/rights approval -->

# Enregistrer un niveau CFS déjà évalué

[conditions, sources et autorisations](https://elucenia.org/fr/outils/escala-clinica-de-fragilidade)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Niveau CFS déjà évalué (1–9)

`cfs`

- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4
- `5` — 5
- `6` — 6
- `7` — 7
- `8` — 8
- `9` — 9

## Édition de la méthode

Clinical Frailty Scale, 9 niveaux ; terminologie actualisée décrite par Rockwood/Theou 2020 ; pas l’édition à 7 niveaux de 2005

## Formule documentée

Affiche le niveau entier déjà saisi, de 1 à 9. N’additionne pas les observations et n’attribue pas de nouveau niveau.

## Limites et population

Utilisez uniquement un niveau CFS déjà obtenu par une évaluation clinique avec un instrument dont l’utilisation est autorisée. Cet enregistrement n’administre pas l’échelle, n’évalue pas la fragilité et ne reproduit pas les descriptions, images ou traductions de l’instrument. L’autorisation d’utiliser et de traduire l’instrument est distincte et doit être vérifiée auprès du titulaire.

## Références

- [Rockwood K et al. A global clinical measure of fitness and frailty in elderly people. CMAJ, 2005.](https://doi.org/10.1503/cmaj.050051)

- [Rockwood K, Theou O. Using the Clinical Frailty Scale in allocating scarce health care resources. Can Geriatr J, 2020.](https://doi.org/10.5770/cgj.23.463)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
