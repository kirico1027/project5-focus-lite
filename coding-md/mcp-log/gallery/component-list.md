# コンポーネント一覧（GALLERY 一覧 / gallery）

工程 3 成果物。対象: `FOCUS LITE` GALLERY 一覧（node `1:452`）。

## 既存コンポーネント（流用）

| コンポーネント名 | 使用箇所 | 備考 |
|------------------|----------|------|
| `head.html` | 全ページ | title 差し替え |
| `header.html`（`top-header`） | 全ページ | 変更なし |
| `footer.html`（`site-footer`） | 全ページ | 変更なし |
| `page-hero.html` | ページ Hero | `heroTitleEn: GALLERY` |

## 新規作成

| ブロック名 | 使用箇所 | 備考 |
|------------|----------|------|
| `gallery-page` | GALLERY 一覧 | ページラッパー |
| `gallery-grid` | ギャラリー一覧 | 5列グリッド（レスポンシブ可変） |
| `gallery-grid__item` | 各サムネイルリンク | partial `cards/gallery-item.html` |

## 後続詳細ページで共通化検討

| パターン | 現状 | 備考 |
|----------|------|------|
| サムネイルカード | `gallery-grid__*` | GALLERY 詳細 BACK TO LIST は WORKS 詳細と共通化可 |
| 単一画像 Hero | 未実装 | node `1:344` MIDNIGHT RIDER |

## 実装ファイル

| 種別 | パス |
|------|------|
| テンプレート | `src/templates/gallery.html` |
| カード partial | `src/partials/cards/gallery-item.html` |
| SCSS | `src/sass/pages/gallery/_gallery.scss` |
