<!-- ELUCENIA technical documentation · escala-clinica-de-fragilidade · zh · no clinical/professional/rights approval -->

# 记录已评定的CFS等级

[条件、来源与许可](https://elucenia.org/zh/tools/escala-clinica-de-fragilidade)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 已评定的CFS等级（1–9）

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

## 方法版本

临床衰弱量表9级；Rockwood/Theou 2020更新术语；不是2005年的7级版

## 已记录的公式

显示先前输入的1至9整数等级。不累加临床发现，也不重新评定等级。

## 限制与适用人群

仅使用通过获准使用的工具进行临床评估后已获得的CFS等级。本记录不实施该量表、不评估衰弱，也不复制工具的描述、图像或译文。工具的使用和翻译许可需单独向权利人确认。

## 参考文献

- [Rockwood K et al. A global clinical measure of fitness and frailty in elderly people. CMAJ, 2005.](https://doi.org/10.1503/cmaj.050051)

- [Rockwood K, Theou O. Using the Clinical Frailty Scale in allocating scarce health care resources. Can Geriatr J, 2020.](https://doi.org/10.5770/cgj.23.463)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
