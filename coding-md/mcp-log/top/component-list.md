# コンポーネント一覧（HOME / top）

工程 3 成果物。対象: HOME `1:935`（後続再利用を前提）。

## 既存コンポーネント（流用・拡張）

| コンポーネント名 | 使用箇所 | 備考 |
|------------------|----------|------|
| `head.html` | 全ページ | Google Fonts / `?v=` 追加 |
| `page-hero` | 下層のみ | HOME 未使用。枠は残す |
| `button`（`.c-button`） | → `.btn` に寄せて拡張 | fill / ghost |
| Sass foundation / mixins | 全体 | fluid / mq を利用 |
| `script.js` | 全体 | ドロワー・pagetop を追加 |

## 新規作成するコンポーネント（共通）

| ブロック名 | 使用箇所 | 想定パラメータ・バリエーション | 備考 |
|------------|----------|--------------------------------|------|
| `top-header` | 全ページ | カレント修飾子は後続で可 | ドロワー付き |
| `site-footer` | 全ページ | PAGETOP リンク | ナビ順は Header と異なる |
| `btn` | 複数 | `--fill` / `--ghost` | 160×44 カンプ |

## ページ固有（コンポーネント化しない）

| ブロック名 | 使用箇所 | 備考 |
|------------|----------|------|
| `hero` | HOME のみ | FV。画像後差し |
| `message` | HOME のみ | キャッチ + 本文 |
| `home-nav` | HOME のみ | 3 枚導線カード |
| `news` | HOME（後続で一覧化検討） | 見出し + リスト |

## 実装順（工程 4）

1. トークン / head / btn
2. top-header / site-footer
3. hero → message → home-nav → news
4. templates/index.html で組み立て
