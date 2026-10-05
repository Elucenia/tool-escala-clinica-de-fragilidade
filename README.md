# Registro de grau CFS previamente avaliado

## Documentation in ten languages

- [Português (Brasil)](documentation/pt-BR.md) · [ELUCENIA](https://elucenia.org/pt-br/ferramentas/escala-clinica-de-fragilidade)
- [English](documentation/en.md) · [ELUCENIA](https://elucenia.org/en/tools/escala-clinica-de-fragilidade)
- [Español](documentation/es.md) · [ELUCENIA](https://elucenia.org/es/herramientas/escala-clinica-de-fragilidade)
- [Français](documentation/fr.md) · [ELUCENIA](https://elucenia.org/fr/outils/escala-clinica-de-fragilidade)
- [Deutsch](documentation/de.md) · [ELUCENIA](https://elucenia.org/de/werkzeuge/escala-clinica-de-fragilidade)
- [Italiano](documentation/it.md) · [ELUCENIA](https://elucenia.org/it/strumenti/escala-clinica-de-fragilidade)
- [العربية](documentation/ar.md) · [ELUCENIA](https://elucenia.org/ar/tools/escala-clinica-de-fragilidade)
- [中文](documentation/zh.md) · [ELUCENIA](https://elucenia.org/zh/tools/escala-clinica-de-fragilidade)
- [日本語](documentation/ja.md) · [ELUCENIA](https://elucenia.org/ja/tools/escala-clinica-de-fragilidade)
- [हिन्दी](documentation/hi.md) · [ELUCENIA](https://elucenia.org/hi/tools/escala-clinica-de-fragilidade)

The README introduction is in English; the linked usage, field, method, limits, source and review documentation is available in each listed language. Bibliographic titles and schema identifiers retain their source identity.

## Current scope

This independent package records a CFS grade already assigned in a separate clinical assessment. It accepts integer grade codes 1–9 and returns the same grade. It does not administer the scale or classify clinical findings, dementia or prognosis. No instrument descriptors, card images or translations are bundled.

Authorization from the instrument's owner is **not established**. Publishing this numeric recorder does not assert authorization, official instrument equivalence, clinical validation or professional translation approval. See [SOURCE-RIGHTS-REVIEW.md](SOURCE-RIGHTS-REVIEW.md) and [the developer's conditions](https://www.dal.ca/sites/gmr/our-tools/permission-for-use.html).

## Installation and use

No npm dependencies are required. Use Node.js 22 or later:

```sh
node test.cjs
node test-recorder-scope.cjs
```

```js
const {calculate} = require('./calculator.js');
console.log(calculate({cfs:'9'}));
```

Serve this directory using a local HTTP server and open index.html for the browser interface. The selected grade is never assigned automatically. Inputs and outputs remain local; this package makes no provider requests and stores no patient data.

## Licenses and provenance

Preserve [LICENSE](LICENSE), [NOTICE](NOTICE), [METHOD-CODE-LICENSE.txt](METHOD-CODE-LICENSE.txt) and [METHOD-CODE-NOTICE.md](METHOD-CODE-NOTICE.md). Apache-2.0 covers the original standalone wrapper/support code; the retained method-code component has its own MIT notice. Neither license grants rights in the instrument itself.

The previous README remains available in Git history; it is not copied into this revision. Its obsolete dementia mapping has been removed from current publication metadata. See tool.json for the exact scope and publication-provenance.json for byte bindings.
