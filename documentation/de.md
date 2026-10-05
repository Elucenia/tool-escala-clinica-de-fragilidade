<!-- ELUCENIA technical documentation · escala-clinica-de-fragilidade · de · no clinical/professional/rights approval -->

# Bereits beurteilten CFS-Grad dokumentieren

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/escala-clinica-de-fragilidade)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Bereits beurteilter CFS-Grad (1–9)

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

## Fassung der Methode

Clinical Frailty Scale, 9 Stufen; aktualisierte Begriffe nach Rockwood/Theou 2020; nicht die 7-Stufen-Ausgabe von 2005

## Dokumentierte Formel

Zeigt den zuvor eingegebenen ganzzahligen Grad von 1 bis 9. Befunde werden weder summiert noch wird ein neuer Grad zugewiesen.

## Grenzen und Population

Verwenden Sie nur einen CFS-Grad, der bereits in einer klinischen Beurteilung mit einem zur Nutzung freigegebenen Instrument ermittelt wurde. Diese Dokumentation wendet die Skala nicht an, beurteilt keine Gebrechlichkeit und reproduziert keine Beschreibungen, Bilder oder Übersetzungen des Instruments. Die Erlaubnis zur Nutzung und Übersetzung des Instruments ist gesondert beim Rechteinhaber zu prüfen.

## Referenzen

- [Rockwood K et al. A global clinical measure of fitness and frailty in elderly people. CMAJ, 2005.](https://doi.org/10.1503/cmaj.050051)

- [Rockwood K, Theou O. Using the Clinical Frailty Scale in allocating scarce health care resources. Can Geriatr J, 2020.](https://doi.org/10.5770/cgj.23.463)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
