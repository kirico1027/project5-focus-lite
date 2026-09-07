# NEWS 詳細 component-list（トークイベント出演のお知らせ）

## 共通コンポーネント（再利用）

| パーツ | 配置 | 備考 |
|--------|------|------|
| Header | `partials/header.html` | 変更なし |
| Footer | `partials/footer.html` | 変更なし |
| Head | `partials/head.html` | title のみ差し替え |
| Button ghost | `components/button` | `.btn.btn--ghost` — gallery-detail と同型 |
| BACK TO LIST アイコン | inline SVG | gallery-detail と同型 |

## ページ固有

| ブロック | クラス | 備考 |
|----------|--------|------|
| ページラッパー | `.news-page` | 背景・文字色 |
| 記事 | `.news-detail` | article |
| 内側 | `.news-detail__inner` | max 900 / padding-inline 80 |
| タイトル | `.news-detail__title` | h1 |
| 日付 | `.news-detail__date` | time |
| 本文 | `.news-detail__body` | p |
| 戻る | `.news-detail__actions` / `.news-detail__back` | 中央配置 |

## 共通化検討（今回は未実施）

- gallery-detail とレイアウト骨格（900/740・padding-top 200・BACK TO LIST）が近いが、タイポ・要素構成が異なるため NEWS 専用ブロックとして実装
- 将来 NEWS 一覧ページ制作時に `news-card` 等を共通化
