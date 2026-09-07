# GALLERY 詳細 design-context（WALL TEXTURE / node `1:2`）

取得日: 2026-09-01  
ソース: Figma Desktop MCP `get_design_context` / `get_metadata`

## フレーム

| 項目 | 値 |
|------|-----|
| 名前 | GALLERY - WALL TEXTURE |
| nodeId | `1:2` |
| サイズ | 1920 × 9784 |
| 背景 | `#000000` |

## フォント情報

| 用途 | font-family | weight |
|------|-------------|--------|
| 作品タイトル | Poppins | Bold 700 |
| BACK TO LIST | Poppins | Medium 500 |
| Header / Footer | 共通 | — |

## カラー情報

| CSS 変数 | 値 | 用途 |
|----------|-----|------|
| `--color-bg` | `#000000` | 背景 |
| `--color-text` | `#ffffff` | テキスト |
| `--color-border` | `#ffffff` | BACK TO LIST 枠 |

## タイポグラフィ詳細（PC カンプ）

| 要素 | size | line-height | letter-spacing | weight |
|------|------|-------------|----------------|--------|
| 作品タイトル | 15px | 22.5px | — | Bold |
| BACK TO LIST | 13px | 15.6px | 1.3px | Medium |

## レイアウト（PC 1920）

| 項目 | 値 |
|------|-----|
| Main 上余白 | padding-top 200px |
| 本文カラム | max-width 900px / padding-inline 80px → 画像幅 740px・中央 |
| タイトル → 画像 | gap 50px |
| 画像 | 740 × 1057.141 / gap 22px × 8枚 |
| BACK TO LIST | margin-top 160px / 中央 / ghost ボタン |

## テキスト内容

| 項目 | 内容 |
|------|------|
| タイトル | WALL TEXTURE |
| 戻る | BACK TO LIST → `./gallery.html` |

## 画像一覧

一覧サムネ `gallery_01.png` とはハッシュ不一致のため、詳細用として別保存。

| # | 保存先 |
|---|--------|
| 01–08 | `src/public/assets/img/gallery/wall-texture/detail_0N.png` |

## SP カンプ

Figma に SP フレームなし。375px は左右 padding・画像幅を fluid で縮小。
