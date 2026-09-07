# コンポーネント一覧（GALLERY 詳細 / gallery-wall-texture）

工程 3 成果物。対象: `GALLERY - WALL TEXTURE`（node `1:2`）。

## 既存コンポーネント（流用）

| コンポーネント名 | 使用箇所 | 備考 |
|------------------|----------|------|
| `head.html` | 全ページ | title 差し替え |
| `header.html`（`top-header`） | 全ページ | 変更なし |
| `footer.html`（`site-footer`） | 全ページ | 変更なし |
| `btn` / `btn--ghost` | BACK TO LIST | WORKS 詳細と同型 |

## 新規作成（ページ固有）

| ブロック名 | 使用箇所 | 備考 |
|------------|----------|------|
| `gallery-detail` | GALLERY 詳細 | タイトル・縦積み画像・BACK TO LIST |
| `gallery-page--detail` | ページ修飾子 | 一覧との区別 |

## 実装ファイル

| 種別 | パス |
|------|------|
| テンプレート | `src/templates/gallery-wall-texture.html` |
| SCSS | `src/sass/pages/gallery/_gallery.scss`（`.gallery-detail*`） |
| 一覧リンク | `src/templates/gallery.html`（WALL TEXTURE → 本ページ） |
