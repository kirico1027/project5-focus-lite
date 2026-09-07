# WORKS 詳細 design-context（STREET CIPHER DOCUMENTARY / node `1:585`）

取得日: 2026-08-29  
ソース: Figma Desktop MCP `get_design_context` / `get_screenshot` / `get_metadata`

## フレーム

| 項目 | 値 |
|------|-----|
| 名前 | WORKS - STREET CIPHER DOCUMENTARY |
| nodeId | `1:585` |
| サイズ | 1920 × 8152 |
| 背景 | `#000000` |

## フォント情報

| 用途 | font-family | weight |
|------|-------------|--------|
| 作品タイトル（Hero） | Poppins | Bold 700 |
| メタタイトル | Poppins | Bold 700 |
| メタ本文（Client 等） | Poppins | Regular 400 |
| BACK TO LIST | Poppins | Medium 500 |
| Header / Footer | 共通（top/design-context.md 参照） | — |

## カラー情報

| CSS 変数 | 値 | 用途 |
|----------|-----|------|
| `--color-bg` | `#000000` | 背景 |
| `--color-text` | `#ffffff` | テキスト |
| `--color-border` | `#ffffff` | BACK TO LIST 枠 |

## タイポグラフィ詳細（PC カンプ）

| 要素 | size | line-height | letter-spacing | weight |
|------|------|-------------|----------------|--------|
| 作品タイトル（Hero H1） | 100px | 110px | — | Bold |
| メタタイトル | 15px | 22.5px | — | Bold |
| メタ本文 | 13px | 20.8px | — | Regular |
| BACK TO LIST | 13px | 15.6px | 1.3px | Medium |

## レイアウト（PC 1920）

| 項目 | 値 |
|------|-----|
| タイトル Hero | min-height 1128px / padding-bottom 160px / 中央配置 |
| 本文コンテナ | max 1580px / padding-inline 80px → 本文 1420px |
| 2カラム | 左 300px / gap 50px / 右 1070px（1420 内比率 21.1% : 75.4%） |
| 本文画像 | 1070×749 / gap 22px × 8枚 |
| メタ情報 | 左カラム・スクロール末尾付近（sticky 想定） |
| BACK TO LIST | margin-top 160px / 中央 / ghost ボタン |
| Hero 画像 | Figma カンプに画像なし（レイアウトのみ・差し替え用） |

## テキスト内容

| 項目 | 内容 |
|------|------|
| タイトル | STREET CIPHER DOCUMENTARY |
| Client | Eastblock Collective |
| Date | 2024-08 |
| Role | Videographer |

## 画像一覧

| 用途 | 保存先パス | 備考 |
|------|-----------|------|
| Hero（差し替え） | `src/public/assets/img/works/street-cipher/hero.jpg` | ユーザー提供待ち |
| 本文 01 | `src/public/assets/img/works/street-cipher/works-detail_01.png` | Figma MCP 取得 |
| 本文 02 | `src/public/assets/img/works/street-cipher/works-detail_02.png` | 同上 |
| 本文 03 | `src/public/assets/img/works/street-cipher/works-detail_03.png` | 同上 |
| 本文 04 | `src/public/assets/img/works/street-cipher/works-detail_04.png` | 同上 |
| 本文 05 | `src/public/assets/img/works/street-cipher/works-detail_05.png` | 同上 |
| 本文 06 | `src/public/assets/img/works/street-cipher/works-detail_06.png` | 同上 |
| 本文 07 | `src/public/assets/img/works/street-cipher/works-detail_07.png` | 同上 |
| 本文 08 | `src/public/assets/img/works/street-cipher/works-detail_08.png` | 同上 |

実装: 本文画像は `figure.works-detail__figure` + `aspect-ratio: 1070 / 749` + `object-fit: cover`。
