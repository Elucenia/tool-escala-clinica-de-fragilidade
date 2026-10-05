<!-- ELUCENIA technical documentation · escala-clinica-de-fragilidade · ja · no clinical/professional/rights approval -->

# 評価済みのCFSグレードを記録

[条件・出典・許諾](https://elucenia.org/ja/tools/escala-clinica-de-fragilidade)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 評価済みのCFSグレード（1–9）

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

## 方法の版

Clinical Frailty Scale、9段階、Rockwood/Theou 2020の更新用語、2005年の7段階版ではない

## 記載された計算式

入力済みの1〜9の整数グレードを表示します。所見を合計したり、新しいグレードを判定したりしません。

## 限界・対象集団

使用が許可された尺度による臨床評価で取得済みのCFSグレードのみを入力してください。この記録は尺度の実施やフレイル評価を行わず、尺度の記述、画像、翻訳を転載しません。尺度の使用・翻訳許可は別途、権利者に確認してください。

## 参考文献

- [Rockwood K et al. A global clinical measure of fitness and frailty in elderly people. CMAJ, 2005.](https://doi.org/10.1503/cmaj.050051)

- [Rockwood K, Theou O. Using the Clinical Frailty Scale in allocating scarce health care resources. Can Geriatr J, 2020.](https://doi.org/10.5770/cgj.23.463)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
