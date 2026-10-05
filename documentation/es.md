<!-- ELUCENIA technical documentation · escala-clinica-de-fragilidade · es · no clinical/professional/rights approval -->

# Registro de un grado CFS previamente evaluado

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/escala-clinica-de-fragilidade)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Grado CFS previamente evaluado (1–9)

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

## Edición del método

Clinical Frailty Scale, 9 niveles; terminología actualizada de Rockwood/Theou 2020; no la edición de 7 niveles de 2005

## Fórmula documentada

Muestra el grado entero introducido previamente, de 1 a 9. No suma hallazgos ni asigna un nuevo grado.

## Límites y población

Utilice únicamente un grado CFS ya obtenido mediante evaluación clínica con un instrumento cuyo uso esté autorizado. Este registro no administra la escala, no evalúa la fragilidad ni reproduce descriptores, imágenes o traducciones del instrumento. El permiso de uso y traducción del instrumento es independiente y debe verificarse con su titular.

## Referencias

- [Rockwood K et al. A global clinical measure of fitness and frailty in elderly people. CMAJ, 2005.](https://doi.org/10.1503/cmaj.050051)

- [Rockwood K, Theou O. Using the Clinical Frailty Scale in allocating scarce health care resources. Can Geriatr J, 2020.](https://doi.org/10.5770/cgj.23.463)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
