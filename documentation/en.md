<!-- ELUCENIA technical documentation · escala-clinica-de-fragilidade · en · no clinical/professional/rights approval -->

# Record a previously assessed CFS grade

[conditions, sources and permissions](https://elucenia.org/en/tools/escala-clinica-de-fragilidade)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Previously assessed CFS grade (1–9)

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

## Method edition

Clinical Frailty Scale, 9 levels; updated terminology described by Rockwood/Theou 2020; not the 7-level 2005 edition

## Documented formula

Displays the previously entered integer grade from 1 to 9. It does not sum findings or assign a new grade.

## Limits and population

Use only a CFS grade already obtained through clinical assessment with an instrument authorized for use. This record does not administer the scale, assess frailty or reproduce instrument descriptors, images or translations. Permission to use and translate the instrument is separate and must be checked with its owner.

## References

- [Rockwood K et al. A global clinical measure of fitness and frailty in elderly people. CMAJ, 2005.](https://doi.org/10.1503/cmaj.050051)

- [Rockwood K, Theou O. Using the Clinical Frailty Scale in allocating scarce health care resources. Can Geriatr J, 2020.](https://doi.org/10.5770/cgj.23.463)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
