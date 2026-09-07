# コンポーネント一覧（CONTACT / contact）

工程 3 成果物。対象: `FOCUS LITE` CONTACT（node `1:186`）。

## 既存コンポーネント（流用）

| コンポーネント名 | 使用箇所 | 備考 |
|------------------|----------|------|
| `head.html` | 全ページ | title 差し替え |
| `header.html` | 全ページ | CONTACT → `./contact.html` 済 |
| `footer.html` | 全ページ | 同上 |
| `page-hero.html` | ページ Hero | `CONTACT` |
| CSS 変数 | form-bg / required / muted | `_variables.scss` 既存 |

## 新規作成

| ブロック名 | 使用箇所 | 備考 |
|------------|----------|------|
| `contact-form` | CONTACT 本文 | カード型フォーム（form-patterns 準拠） |

## 実装ファイル

| 種別 | パス |
|------|------|
| テンプレート | `src/templates/contact.html` |
| SCSS | `src/sass/pages/contact/_contact.scss` |
