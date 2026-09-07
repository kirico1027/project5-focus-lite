# 工程 6 品質チェック（GALLERY 一覧 / gallery）

実施日: 2026-08-31  
参照: `coding-md/mcp-log/gallery/design-context.md`

## 1. タイポグラフィ

| 項目 | 結果 | 備考 |
|------|------|------|
| font-family（Poppins） | ✅ | 共通変数 / page-hero |
| ページ Hero 64px / lh 70.4 / tracking 12.8px | ✅ | `page-hero__title` 共通 |

## 2. 色

| 項目 | 結果 |
|------|------|
| 背景・文字 | ✅ `var(--color-bg/text)` |

## 3. 画像

| 項目 | 結果 | 備考 |
|------|------|------|
| gallery_01–12 存在 | ✅ | Figma MCP から取得 |
| 命名規則 | ✅ | `gallery_XX.png` |
| HTML パス一致 | ✅ | design-context と一致 |
| 並び順 | ✅ | Figma 1:512 List 順 |

## 4. JS・インタラクション

| 項目 | 結果 |
|------|------|
| サムネ hover | ✅ opacity 0.75 |
| focus-visible | ✅ outline |
| Header drawer | ✅ 共通 `script.js` |

## 5. meta / head

| 項目 | 結果 | 備考 |
|------|------|------|
| title | ✅ | `GALLERY \| TAKAHIRO KOBAYASHI` |
| description | — | サイト共通 partial 未設定 |

## 6. HTML / リンク

| 項目 | 結果 |
|------|------|
| h1 は 1 つ | ✅ page-hero |
| サムネリンク | ⏳ `#` 仮（詳細ページ未実装） |
| aria-label | ✅ 各リンク |
| BEM（gallery-grid__*） | ✅ |

## 工程 4 整合性

| 項目 | 結果 |
|------|------|
| HTML クラス ↔ SCSS 定義 | ✅ |
| ビルド（npm run build） | ✅ |

## レスポンシブ

| 帯 | 列数 | gap |
|----|------|-----|
| PC カンプ（コンテナ最大〜） | 5列 | 12px |
| 狭い PC（769–1579） | 3列 | 12px |
| SP（≤768） | 2列 | 8–12px fluid |

## 未対応（意図的・後続）

- GALLERY 詳細ページ（node `1:344` MIDNIGHT RIDER 等）へのリンク
- 工程 5 目視ピクセル調整（初回実装後の個別修正待ち）
- SP 専用 Figma カンプなし（375 は既存トークン準拠）
