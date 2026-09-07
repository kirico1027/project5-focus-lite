# コンポーネント一覧（WORKS 詳細 / works-street-cipher）

工程 3 成果物。対象: `WORKS - STREET CIPHER DOCUMENTARY`（node `1:585`）。

## 既存コンポーネント（流用）

| コンポーネント名 | 使用箇所 | 備考 |
|------------------|----------|------|
| `head.html` | 全ページ | title 差し替え |
| `header.html`（`top-header`） | 全ページ | 変更なし |
| `footer.html`（`site-footer`） | 全ページ | 変更なし |
| `btn` / `btn--ghost` | BACK TO LIST | アイコンはページ内 SVG |

## 新規作成（ページ固有・コンポーネント化しない）

| ブロック名 | 使用箇所 | 備考 |
|------------|----------|------|
| `works-detail` | WORKS 詳細 | タイトル Hero・2カラム・ギャラリー・アクション |
| `works-page--detail` | WORKS 詳細 | 一覧とのページ修飾子 |

## 後続詳細ページで共通化検討

| パターン | 現状 | 備考 |
|----------|------|------|
| タイトル Hero（100px） | ページ固有 SCSS | 2件目以降で partial 化検討 |
| BACK TO LIST | `btn--ghost` + ページ修飾子 | GALLERY 詳細と共通化可 |
| 2カラム + sticky メタ | ページ固有 | 他 WORKS 詳細で再利用可 |

## 実装ファイル

| 種別 | パス |
|------|------|
| テンプレート | `src/templates/works-street-cipher.html` |
| SCSS | `src/sass/pages/works/_works.scss`（`.works-detail*` ブロック） |
