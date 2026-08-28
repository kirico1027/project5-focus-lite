# HOME design-context（FOCUS LITE / node `1:935`）

取得日: 2026-08-25  
ソース: Figma Desktop MCP `get_design_context` / `get_screenshot` / `get_metadata`

## フレーム

| 項目 | 値 |
|------|-----|
| 名前 | FOCUS LITE |
| nodeId | `1:935` |
| サイズ | 1920 × 3031 |
| 背景 | `#000000` |

## フォント情報

| 用途 | font-family | weight |
|------|-------------|--------|
| 英字・ナビ・見出し | Poppins | Medium 500 / Bold 700 / Regular 400 / Italic |
| 日本語本文（実装） | Noto Sans JP（フォールバック） | Regular / Bold |
| アイコン（Figma） | Material Icons | → SVG に置換 |

## カラー情報

| CSS 変数 | 値 | 用途 |
|----------|-----|------|
| `--color-bg` | `#000000` | 背景 |
| `--color-text` | `#ffffff` | テキスト |
| `--color-border` | `#ffffff` | ボタン枠・ライン |
| `--color-text-inverse` | `#000000` | fill ボタン文字 |

## タイポグラフィ詳細（PC カンプ）

| 要素 | size | line-height | letter-spacing | weight |
|------|------|-------------|----------------|--------|
| Header ナビ | 12px | 14.4px | 1.2px | Medium |
| Header ロゴ | 18px | 19.8px | — | Bold |
| Hero PHOTOGRAPHER | 13px | 15.6px | 10.4px | Medium |
| Hero 名前 | 64px | 70.4px | 12.8px | Bold |
| Hero CTA | 13px | 15.6px | 5.2px | Medium |
| Message キャッチ | 40px | 44px | — | Bold |
| Message JA 短文 | 16px | 17.6px | — | Bold |
| Message 本文 | 16px | 24px | — | Regular |
| Message 署名 | 12px | 18px | — | Italic |
| カードラベル | 11px | 13.2px | 6.6px | Medium |
| カード見出し | 24px | 26.4px | 4.8px | Bold |
| NEWS ラベル | 11px | 13.2px | 6.6px | Medium |
| NEWS 見出し | 48px | 52.8px | 9.6px | Bold |
| NEWS 行 | 15px | 21px | — | Bold(日付) / Regular(見出し) |
| Footer 巨大ロゴ | 172.8px | 172.8px | — | Bold |
| Footer ナビ | 12px | 14.4px | 1.2px | Medium |
| PAGETOP | 13px | 15.6px | 1.3px | Medium |
| Copyright | 10px | 12px | 1px | Medium |

## レイアウト

| 項目 | 値 |
|------|-----|
| Header | h80 / px80 / pt34 pb22 |
| Hero | h968 / 左右写真枠 948×944 / 中央コピー |
| Message 外枠 | w1580 / px80 / pb160 |
| 導線カード | 458.6×300 / gap22 / pb160 |
| NEWS | w1580 / px80 |
| Footer | pt220 pb80 px80 |

## 画像一覧

| 用途 | ファイル | 判断根拠 |
|------|----------|----------|
| Hero 左 | `focus-01.jpeg`（1080×1620） | 暗めのマイクシルエット。左右対の縦写真 |
| Hero 右 | `focus-02.jpeg`（1080×1620） | 夕景の車。左と対になる縦写真・色の対比 |
| PROFILE 導線 | `focus-03.jpeg`（1080×720） | カメラを構える人物＝WHO I AM。横長でカード比率に適合 |
| WORKS 導線 | `focus-04.jpeg`（1080×720） | ライブ／クライアント案件の雰囲気。横長 |
| GALLERY 導線 | `focus-05.jpeg`（1080×1631） | ストリートポートレート＝VISUAL DIARY |

Figma 上の該当フレームは引き続き空。素材は提供ファイルを内容・比率で割り当て。

実装: `object-fit: cover`。Hero 枠はカンプ相当の左右分割、導線は `aspect-ratio: 458.609 / 300`。
