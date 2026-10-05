<!-- ELUCENIA technical documentation · escala-clinica-de-fragilidade · pt-BR · no clinical/professional/rights approval -->

# Registro de grau CFS previamente avaliado

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/escala-clinica-de-fragilidade)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Grau CFS previamente avaliado (1–9)

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

## Edição do método

Clinical Frailty Scale 9 níveis; terminologia atualizada descrita Rockwood Theou 2020; não 7 níveis 2005

## Fórmula documentada

Exibe o grau inteiro previamente informado, de 1 a 9. Não soma achados nem atribui um novo grau.

## Limites e população

Use somente um grau CFS já obtido por avaliação clínica e por um instrumento cujo uso esteja autorizado. Este registro não administra a escala, não avalia fragilidade e não reproduz descritores, imagens ou traduções do instrumento. A permissão de uso e tradução do instrumento é separada e deve ser verificada com seu titular.

## Referências

- [Rockwood K et al. A global clinical measure of fitness and frailty in elderly people. CMAJ, 2005.](https://doi.org/10.1503/cmaj.050051)

- [Rockwood K, Theou O. Using the Clinical Frailty Scale in allocating scarce health care resources. Can Geriatr J, 2020.](https://doi.org/10.5770/cgj.23.463)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
