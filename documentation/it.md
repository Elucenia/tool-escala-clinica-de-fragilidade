<!-- ELUCENIA technical documentation · escala-clinica-de-fragilidade · it · no clinical/professional/rights approval -->

# Registrazione di un grado CFS già valutato

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/escala-clinica-de-fragilidade)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Grado CFS già valutato (1–9)

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

## Edizione del metodo

Clinical Frailty Scale, 9 livelli; terminologia aggiornata descritta da Rockwood/Theou 2020; non l’edizione a 7 livelli del 2005

## Formula documentata

Mostra il grado intero già inserito, da 1 a 9. Non somma reperti e non assegna un nuovo grado.

## Limiti e popolazione

Usare solo un grado CFS già ottenuto con una valutazione clinica mediante uno strumento autorizzato all’uso. Questa registrazione non somministra la scala, non valuta la fragilità e non riproduce descrizioni, immagini o traduzioni dello strumento. Il permesso di usare e tradurre lo strumento è distinto e deve essere verificato con il titolare.

## Riferimenti

- [Rockwood K et al. A global clinical measure of fitness and frailty in elderly people. CMAJ, 2005.](https://doi.org/10.1503/cmaj.050051)

- [Rockwood K, Theou O. Using the Clinical Frailty Scale in allocating scarce health care resources. Can Geriatr J, 2020.](https://doi.org/10.5770/cgj.23.463)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
