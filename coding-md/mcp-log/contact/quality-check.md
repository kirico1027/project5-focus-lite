# 工程 6 品質チェック（CONTACT / contact）

実施日: 2026-09-01  
参照: `coding-md/mcp-log/contact/design-context.md`

## 1. タイポグラフィ

| 項目 | 結果 | 備考 |
|------|------|------|
| Hero 64 / tracking 12.8 | ✅ | page-hero 共通 |
| リード 13 / lh 20.8 | ✅ | |
| ラベル 14 Bold + * 15 | ✅ | `--color-required` |
| SUBMIT 16 Bold | ✅ | |

## 2. 色・角丸

| 項目 | 結果 |
|------|------|
| フォーム bg `#222` | ✅ `--color-form-bg` |
| カード radius 24 | ✅ |
| 入力 radius 4 / 白地 | ✅ |

## 3. フォーム構造

| 項目 | 結果 |
|------|------|
| NAME / EMAIL / MESSAGE | ✅ required |
| 同意 checkbox | ✅ required |
| SUBMIT button | ✅ type=submit |
| action 送信先 | ⏳ `#`（静的・接続なし） |
| novalidate | ✅ form-patterns |

## 4. リンク

| 項目 | 結果 |
|------|------|
| Header / Footer CONTACT | ✅ 既存 `./contact.html` |
| プライバシーポリシー | ⏳ `#`（詳細ページ未実装） |

## 5. HTML

| 項目 | 結果 |
|------|------|
| page-hero h1 + 隠し h2 | ✅ |
| BEM contact-form__* | ✅ |
| u-visually-hidden | ✅ reset に追加 |

## 未対応

- メール送信 / 外部フォーム接続
- プライバシーポリシーページ
- 工程 5 ピクセル目視調整
