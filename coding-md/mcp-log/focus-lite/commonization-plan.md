# 共通化方針（FOCUS LITE）

工程 0 成果物。サイト全体事前調査 + HOME（`1:935`）確認に基づく。

## レイアウト基準

| 項目 | 値 |
|------|-----|
| カンプ幅 | 1920px |
| SP 最小 | 375px（SP カンプなし。合理的縮小） |
| 列切替 | 768 / 769 |
| 外コンテナ | 1580px（左右 170） |
| 内側 padding | 80px → 本文幅 1420px |
| ヘッダー高さ | 80px |
| フッター padding | 上 220 / 下 80 / 左右 80 |
| セクション下余白（HOME） | 160px |

## 共通パーツ一覧

| パーツ名 | 静的配置 | 使用箇所 | 備考 |
|---------|---------|---------|------|
| Header | `partials/header.html` | 全ページ | ブロック `top-header` |
| Footer | `partials/footer.html` | 全ページ | ブロック `site-footer` |
| Button（fill / ghost） | `components/button` | Hero CTA、後続 BACK TO LIST 等 | `.btn` |
| Page Hero | `partials/page-hero.html` | 下層のみ | HOME では未使用 |
| Head | `partials/head.html` | 全ページ | フォント・CSS |

## ページ固有（共通化しない）

- HOME Hero（左右写真枠 + 中央コピー）
- HOME Message
- HOME 導線カード（PROFILE / WORKS / GALLERY）
- HOME NEWS ブロック（行マークアップは後続 NEWS で再利用検討可）

## partials 構成案

```
src/partials/
├── head.html
├── header.html
├── footer.html
├── page-hero.html
└── （下層実装時）sections/ / cards/
```

## 未制作ページへのリンク方針

- PROFILE / NEWS: `href="#"`（仮。差し替え容易）
- WORKS / GALLERY / CONTACT: 想定ファイル名（`./works.html` 等）を先に書いておく
