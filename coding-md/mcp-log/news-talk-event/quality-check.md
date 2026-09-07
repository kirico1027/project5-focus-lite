# 工程 6 品質チェック（NEWS 詳細 / news-talk-event）

実施日: 2026-09-02  
参照: `coding-md/mcp-log/news-talk-event/design-context.md`

## 1. タイポグラフィ

| 項目 | 結果 |
|------|------|
| タイトル 20 / lh 30 / Bold | ✅ |
| 日付 15 / lh 22.5 / Regular | ✅ |
| 本文 13 / lh 20.8 / Regular | ✅ |
| BACK TO LIST 13 / lh 15.6 / tracking 1.3 | ✅ |

## 2. 構造

| 項目 | 結果 |
|------|------|
| Page Hero なし（Figma どおり） | ✅ |
| タイトル + 日付 + 本文 + BACK TO LIST | ✅ |
| Figma 文言どおり | ✅ |
| 画像なし | ✅ |

## 3. リンク

| 項目 | 結果 |
|------|------|
| TOP NEWS「トークイベント出演のお知らせ」→ `./news-talk-event.html` | ✅ |
| 他 NEWS 2件は `#` のまま | ✅ |
| BACK TO LIST → `./index.html`（一覧未制作） | ✅ |

## 4. レスポンシブ

| 項目 | 結果 |
|------|------|
| padding-top 200 → SP fluid 120–200 | ✅ |
| padding-inline 80 → SP fluid 20–40 | ✅ |
| margin-top BACK 160 → SP fluid 80–160 | ✅ |
| タイトル・日付・本文 fluid-sp-range | ✅ |

## 5. 未対応・要確認

- 工程 5 ピクセル目視調整（ユーザー側で実施）
- SP 専用 Figma カンプなし
- NEWS 一覧ページ未制作（BACK TO LIST は TOP へ）
- NEWS 一覧ページ制作時に BACK TO LIST 先を差し替え
