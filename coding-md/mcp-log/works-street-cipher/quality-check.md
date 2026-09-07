# 工程 6 品質チェック（WORKS 詳細 / works-street-cipher）

実施日: 2026-08-29  
参照: `coding-md/mcp-log/works-street-cipher/design-context.md`

## 1. タイポグラフィ

| 項目 | 結果 | 備考 |
|------|------|------|
| font-family（Poppins） | ✅ | `_works.scss` / 共通変数 |
| タイトル 100px / lh 110 | ✅ | `.works-detail__title` |
| メタ 15px / 13px | ✅ | `.works-detail__meta-*` |
| BACK TO LIST 13px / tracking 1.3px | ✅ | `.works-detail__back` |

## 2. 色

| 項目 | 結果 |
|------|------|
| 背景・文字・枠 | ✅ `var(--color-bg/text/border)` |

## 3. 画像

| 項目 | 結果 | 備考 |
|------|------|------|
| 本文 01–08 存在 | ✅ | `works-detail_01.png` 〜 `08.png` |
| 命名規則 | ✅ | `works-detail_XX.png` |
| HTML パス一致 | ✅ | design-context と一致 |
| hero.jpg | ⏳ 意図的未配置 | ユーザー差し替え待ち |

## 4. JS・インタラクション

| 項目 | 結果 |
|------|------|
| BACK TO LIST hover | ✅ `.btn:hover` |
| focus-visible | ✅ `.btn:focus-visible` |
| Header drawer | ✅ 共通 `script.js` |

## 5. meta / head

| 項目 | 結果 | 備考 |
|------|------|------|
| title | ✅ | ページ固有 title 設定済み |
| description | — | サイト共通 partial 未設定（他ページ同様・今回変更なし） |
| OGP / favicon | — | サイト全体未設定（他ページ同様） |

## 6. HTML / リンク

| 項目 | 結果 |
|------|------|
| h1 は 1 つ | ✅ |
| BACK TO LIST → `./works.html` | ✅ |
| 本文 img に alt | ✅ 空（装飾・差し替え前 hero 含む） |
| BEM（works-detail__*） | ✅ |

## 工程 4 整合性

| 項目 | 結果 |
|------|------|
| HTML クラス ↔ SCSS 定義 | ✅ |
| ビルド（npm run build） | ✅ 実装時済み |

## 未対応（意図的・後続）

- Hero 画像（`hero.jpg`）の配置
- 工程 5 に基づく Figma とのピクセル調整（目視確認後）
- meta description / OGP（サイト全体方針）
