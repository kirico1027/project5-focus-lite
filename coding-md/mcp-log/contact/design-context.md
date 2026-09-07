# CONTACT design-context（FOCUS LITE / node `1:186`）

取得日: 2026-09-01  
ソース: Figma Desktop MCP `get_design_context` / `get_metadata`

## フレーム

| 項目 | 値 |
|------|-----|
| 名前 | FOCUS LITE（CONTACT） |
| nodeId | `1:186` |
| サイズ | 1920 × 1777 |
| 背景 | `#000000` |

## フォント情報

| 用途 | font-family | weight |
|------|-------------|--------|
| ページ Hero | Poppins | Bold 700 |
| リード文 | Poppins | Regular 400 |
| ラベル | Poppins | Bold 700 |
| 入力・同意 | Poppins | Regular 400 |
| SUBMIT | Poppins | Bold 700 |

## カラー情報

| CSS 変数 | 値 | 用途 |
|----------|-----|------|
| `--color-bg` | `#000000` | ページ背景・SUBMIT |
| `--color-text` | `#ffffff` | テキスト |
| `--color-form-bg` | `#222222` | フォームカード |
| `--color-muted` | `#cccccc` | placeholder |
| `--color-required` | `#bf2325` | 必須 `*` |
| 入力欄背景 | `#ffffff` | input / textarea |

## タイポグラフィ（PC カンプ）

| 要素 | size | line-height | weight |
|------|------|-------------|--------|
| Hero CONTACT | 64px | 70.4 / tracking 12.8 | Bold |
| リード | 13px | 20.8 | Regular |
| ラベル | 14px | 19.6 | Bold |
| 必須 `*` | 15px | 21 | Bold |
| placeholder / 入力 | 15px | normal / 21 | Regular |
| 同意文 | 12px | 16.8 | Regular |
| プライバシーリンク | 11px | 15.4 | Regular underline |
| SUBMIT | 16px | 16 | Bold |

## レイアウト（PC 1920）

| 項目 | 値 |
|------|-----|
| ページ Hero | min-height 400 / 中央（共通 page-hero） |
| フォーム外枠 | コンテナ幅 900 / 中央 |
| フォームカード | 600 × 内パディング 50 / radius 24 |
| フィールド幅 | 500 |
| 入力高 | 50 / textarea 160 / radius 4 |
| フィールド間隔 | 各グループ下 20 |
| SUBMIT 上 | 30 / ボタン padding 18 |

## フォーム項目

| name | type | label | placeholder | required |
|------|------|-------|-------------|----------|
| name | text | NAME | お名前 | * |
| email | email | EMAIL | メールアドレス | * |
| message | textarea | MESSAGE | お問い合わせ内容 | * |
| privacy | checkbox | プライバシーポリシーに同意する | — | * |
| — | submit | SUBMIT | — | — |

リード文:
ご質問・ご相談などお気軽にお問い合わせください。  
下記にお問合せ内容をご記入の上、送信ボタンを押してください。

プライバシーリンク: 「プライバシーポリシーはこちら」（詳細ページ未実装のため `#`）

## 画像

フォームのみ。追加画像なし（工程 2 スキップ）。
